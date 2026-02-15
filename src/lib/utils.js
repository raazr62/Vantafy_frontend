import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getSocialPlatform = (url) => {
  try {
    const hostname = new URL(url).hostname.replace("www.", "");

    if (hostname.includes("instagram"))
      return { name: "Instagram", domain: "instagram.com" };

    if (hostname.includes("twitter") || hostname.includes("x.com"))
      return { name: "X (Twitter)", domain: "x.com" };

    if (hostname.includes("onlyfans"))
      return { name: "OnlyFans", domain: "onlyfans.com" };

    if (hostname.includes("linktr"))
      return { name: "Linktree", domain: "linktr.ee" };

    if (hostname.includes("facebook"))
      return { name: "Facebook", domain: "facebook.com" };

    return { name: hostname, domain: hostname };
  } catch {
    return null;
  }
};

export const formatNumberUS = (num) => {
  if (num < 1000) return num.toString();

  if (num < 1000000) {
    if (num < 10000) {
      return Math.floor(num / 1000) + "k";
    }
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }

  if (num < 1000000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
};
