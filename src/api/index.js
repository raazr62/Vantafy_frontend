import { baseApi, fileUploadApi } from "@/lib/axios";

// --- Generic GET ---
export const GetData = async (endpoint, params = {}) => {
  const response = await baseApi.get(endpoint, {
    params,
    withCredentials: true,
  });
  return response.data;
};

// --- Public GET (without credentials) ---
export const GetPublicData = async (endpoint, params = {}) => {
  const response = await baseApi.get(endpoint, {
    params,
    withCredentials: false,
    headers: {
      "ngrok-skip-browser-warning": "true",
    },
  });

  return response.data;
};

// --- Generic POST ---
export const PostData = async (endpoint, payload) => {
  const response = await baseApi.post(endpoint, payload);
  return response.data;
};

// --- Generic PUT ---
export const PutData = async (endpoint, payload) => {
  const response = await baseApi.put(endpoint, payload);
  return response.data;
};

// --- Generic PATCH ---
export const PatchData = async (endpoint, payload) => {
  const response = await baseApi.patch(endpoint, payload);
  return response.data;
};

// --- Generic DELETE ---
export const DeleteData = async (endpoint, payload) => {
  const response = await baseApi.delete(endpoint, { data: payload });
  return response.data;
};

// --- POST Form Url Encoded ---
export const PostFormUrlEncoded = async (endpoint, payload) => {
  const params = new URLSearchParams(payload).toString();
  const response = await baseApi.post(endpoint, params, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.data;
};

// --- File Upload ---
export const UploadFile = async (endpoint, formData) => {
  const response = await fileUploadApi.post(endpoint, formData);
  return response.data;
};
