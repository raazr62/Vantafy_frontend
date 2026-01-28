/**
 * Extract domain from a URL safely
 * @param {string} url - The URL to extract domain from
 * @returns {string|null} - The domain without 'www.' prefix, or null if invalid
 */
export const getDomain = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
};

/**
 * Validate if a string is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean} - True if valid URL, false otherwise
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Get logo URL for a domain with fallback
 * @param {string} domain - The domain to get logo for
 * @returns {object} - Object with primary and fallback logo URLs
 */
export const getLogoUrls = (domain) => ({
  primary: `https://logo.clearbit.com/${domain}`,
  fallback: `https://icons.duckduckgo.com/ip3/${domain}.ico`,
});
