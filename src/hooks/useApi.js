import { useState, useCallback } from "react";
import {
  GetData,
  PostData,
  PutData,
  PatchData,
  DeleteData,
  UploadFile,
  PostFormUrlEncoded,
} from "@/api";

/**
 * Hook to use API calls with loading and error states
 * @param {Function} apiFunc - The API function to call (e.g., GetData, PostData)
 * @returns {Object} { execute, data, loading, error }
 */
export const useApi = (apiFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(
    async (...args) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunc(...args);
        setData(result);
        return result;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunc]
  );

  return { execute, data, loading, error };
};

// --- Specialized Hooks (Optional Shortcuts) ---

export const useGet = () => useApi(GetData);
export const usePost = () => useApi(PostData);
export const usePut = () => useApi(PutData);
export const usePatch = () => useApi(PatchData);
export const useDelete = () => useApi(DeleteData);
export const useUpload = () => useApi(UploadFile);
export const usePostForm = () => useApi(PostFormUrlEncoded);
