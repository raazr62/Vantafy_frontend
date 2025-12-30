import { useReducer, useCallback, useMemo } from "react";
import { getDomain } from "@/utils/urlHelpers";

// Action types
const ACTIONS = {
  ADD_SITE: "ADD_SITE",
  REMOVE_SITE: "REMOVE_SITE",
  SET_SELECTED_PLATFORM: "SET_SELECTED_PLATFORM",
  SET_MODAL_OPEN: "SET_MODAL_OPEN",
  SET_URL: "SET_URL",
  RESET_FORM: "RESET_FORM",
};

// Initial state
const initialState = {
  sites: [],
  selectedPlatform: null,
  isModalOpen: false,
  url: "",
};

// Reducer function
const authorizedSitesReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_SITE:
      return {
        ...state,
        sites: [...state.sites, action.payload],
      };
    case ACTIONS.REMOVE_SITE:
      return {
        ...state,
        sites: state.sites.filter((site) => site.id !== action.payload),
      };
    case ACTIONS.SET_SELECTED_PLATFORM:
      return {
        ...state,
        selectedPlatform: action.payload,
        isModalOpen: false,
      };
    case ACTIONS.SET_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case ACTIONS.SET_URL:
      return {
        ...state,
        url: action.payload,
      };
    case ACTIONS.RESET_FORM:
      return {
        ...state,
        selectedPlatform: null,
        url: "",
      };
    default:
      return state;
  }
};

/**
 * Custom hook for managing authorized sites
 * @returns {object} - State and actions for authorized sites
 */
export const useAuthorizedSites = () => {
  const [state, dispatch] = useReducer(authorizedSitesReducer, initialState);

  // Add a new site
  const addSite = useCallback(
    (platform, username = "") => {
      let url, domain;

      if (platform.name === "Custom") {
        domain = getDomain(state.url);
        if (!domain) return false;
        url = state.url;
      } else {
        // Concatenate platform link with username
        url = platform.link + username;
        // Extract domain from the complete URL
        domain = getDomain(url);
        if (!domain) return false;
      }

      const newSite = {
        id: crypto.randomUUID(),
        url,
        domain,
        platformName: platform.name,
      };

      dispatch({ type: ACTIONS.ADD_SITE, payload: newSite });
      dispatch({ type: ACTIONS.RESET_FORM });
      return true;
    },
    [state.url]
  );

  // Remove a site
  const removeSite = useCallback((id) => {
    dispatch({ type: ACTIONS.REMOVE_SITE, payload: id });
  }, []);

  // Set selected platform
  const selectPlatform = useCallback((platform) => {
    dispatch({ type: ACTIONS.SET_SELECTED_PLATFORM, payload: platform });
  }, []);

  // Toggle modal
  const setModalOpen = useCallback((isOpen) => {
    dispatch({ type: ACTIONS.SET_MODAL_OPEN, payload: isOpen });
  }, []);

  // Set URL
  const setUrl = useCallback((url) => {
    dispatch({ type: ACTIONS.SET_URL, payload: url });
  }, []);

  // Reset form
  const resetForm = useCallback(() => {
    dispatch({ type: ACTIONS.RESET_FORM });
  }, []);

  // Memoized values
  const hasSites = useMemo(() => state.sites.length > 0, [state.sites.length]);

  return {
    // State
    sites: state.sites,
    selectedPlatform: state.selectedPlatform,
    isModalOpen: state.isModalOpen,
    url: state.url,
    hasSites,
    // Actions
    addSite,
    removeSite,
    selectPlatform,
    setModalOpen,
    setUrl,
    resetForm,
  };
};
