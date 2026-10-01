import { usePublicFetch } from "./useApi";

export const useSystemInfo = () => {
  return usePublicFetch(["/about-system/"], "/about-system/", {}, { skipCache: true });
};
