import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  GetData,
  GetPublicData,
  PostData,
  PutData,
  PatchData,
  DeleteData,
  UploadFile,
  PostFormUrlEncoded,
} from "@/api";

/**
 * Generic Hook for fetching data (GET)
 * @param {Array} queryKey - The Query Key (e.g., ['users', 1])
 * @param {string} endpoint - The API endpoint
 * @param {Object} params - Query parameters
 * @param {Object} options - Approx options for useQuery (enabled, staleTime, etc.)
 * @returns {UseQueryResult}
 */

export const useFetch = (queryKey, endpoint, params = {}, options = {}) => {
  return useQuery({
    queryKey,
    queryFn: () => GetData(endpoint, params),
    ...options,
  });
};

/**
 * Generic Hook for fetching PUBLIC data (GET without credentials)
 * Use this for public endpoints that don't require authentication
 * @param {Array} queryKey - The Query Key (e.g., ['landing-page'])
 * @param {string} endpoint - The API endpoint
 * @param {Object} params - Query parameters
 * @param {Object} options - Approx options for useQuery (enabled, staleTime, etc.)
 * @returns {UseQueryResult}
 */
export const usePublicFetch = (
  queryKey,
  endpoint,
  params = {},
  options = {},
) => {
  return useQuery({
    queryKey,
    queryFn: () => GetPublicData(endpoint, params),

    ...options,
  });
};

/**
 * Generic Hook for Mutations (POST, PUT, PATCH, DELETE)
 * @param {Function} mutationFn - The API function
 * @param {Object} options - Approx options for useMutation (onSuccess, onError, etc.)
 * @returns {UseMutationResult}
 */
const useGenericMutation = (mutationFn, options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    ...options,
    onSuccess: (data, variables, context) => {
      // Optional: Invalidate queries if provided
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

// --- Specialized Mutation Hooks ---

export const usePost = (options) =>
  useGenericMutation(
    (payload) => PostData(options?.endpoint || "", payload),
    options,
  );
export const usePut = (options) =>
  useGenericMutation(
    (payload) => PutData(options?.endpoint || "", payload),
    options,
  );
export const usePatch = (options) =>
  useGenericMutation(
    (payload) => PatchData(options?.endpoint || "", payload),
    options,
  );
export const useDelete = (options) =>
  useGenericMutation(
    (payload) => DeleteData(options?.endpoint || "", payload),
    options,
  );
export const useUpload = (options) =>
  useGenericMutation(
    (payload) => UploadFile(options?.endpoint || "", payload),
    options,
  );
export const usePostForm = (options) =>
  useGenericMutation(
    (payload) => PostFormUrlEncoded(options?.endpoint || "", payload),
    options,
  );

/* 
Usage Example:
  
  // 1. Fetching
  const { data, isLoading } = useFetch(['users'], '/users');

  // 2. Creating (Post)
  const { mutate: createUser } = usePost({
    endpoint: '/users/create',
    invalidateQueries: ['users'], 
    onSuccess: () => console.log("User created!")
  });

  // Call it: createUser({ name: "John" });
*/
