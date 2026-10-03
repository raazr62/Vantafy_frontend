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
  if (num === undefined || num === null || num === "") return "0";
  const val = Number(num);
  if (isNaN(val)) return "0";
  if (val < 1000) return val.toString();

  if (val < 1000000) {
    if (val < 10000) {
      return Math.floor(val / 1000) + "k";
    }
    return (val / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  }

  if (val < 1000000000) {
    return (val / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }

  return (val / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
};
