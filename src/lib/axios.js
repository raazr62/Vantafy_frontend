import axios from "axios";

// --- Environment Variables ---
const BASE_URL = import.meta.env.VITE_BASE_URL;

// --- Axios Instances ---
export const baseApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fileUploadApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// --- Response Interceptors ---
let isRefreshing = false;
let failedQueue = [];

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
      // Attempt to refresh the token
      await baseApi.post("/auth/refresh");

      // If successful, process the queue and retry the original request
      processQueue(null);
      isRefreshing = false;
      return baseApi(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError, null);
      isRefreshing = false;

      // Auth cookie really expired - Logout user
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
      return Promise.reject(refreshError);
    }
  }

  return Promise.reject(error);
};

baseApi.interceptors.response.use((response) => response, errorInterceptor);
fileUploadApi.interceptors.response.use(
  (response) => response,
  errorInterceptor
);
