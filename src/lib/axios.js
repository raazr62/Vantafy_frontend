import axios from "axios";

// --- Environment Variables ---
const BASE_URL = import.meta.env.VITE_BASE_URL;

// --- Axios Instances ---
export const baseApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "X-Client-Type": "web",
  },
});

export const fileUploadApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "X-Client-Type": "web",
  },
});

// --- Request Interceptor to attach Authorization header ---
const attachTokenInterceptor = (config) => {
  const token = localStorage.getItem("access_token");
  if (token && token !== "null" && token !== "undefined" && token !== "None") {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

baseApi.interceptors.request.use(attachTokenInterceptor, (error) => Promise.reject(error));
fileUploadApi.interceptors.request.use(attachTokenInterceptor, (error) => Promise.reject(error));

// --- Response Interceptors ---
let isRefreshing = false;
let failedQueue = [];
let navigateFn = null;

export const setupAxios = (navigate) => {
  navigateFn = navigate;
};

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const errorInterceptor = async (error) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then(() => {
          return baseApi(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const refreshToken = localStorage.getItem("refresh_token");
      // Attempt to refresh the token
      const refreshResponse = await baseApi.post("/token/refresh/", {
        refresh_token: refreshToken,
      });

      const newAccess =
        refreshResponse.data?.data?.tokens?.access ||
        refreshResponse.data?.tokens?.access;
      const newRefresh =
        refreshResponse.data?.data?.tokens?.refresh ||
        refreshResponse.data?.tokens?.refresh;

      if (newAccess) {
        localStorage.setItem("access_token", newAccess);
      }
      if (newRefresh) {
        localStorage.setItem("refresh_token", newRefresh);
      }

      processQueue(null);
      isRefreshing = false;
      return baseApi(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      isRefreshing = false;

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");

      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};

baseApi.interceptors.response.use((response) => response, errorInterceptor);
fileUploadApi.interceptors.response.use(
  (response) => response,
  errorInterceptor,
);

