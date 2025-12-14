import CommonInputField from "@/shared/AuthShared/CommonInputField";
import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const AuthorizedSites = () => {
  const [authorizedSitesData, setAuthorizedSitesData] = useState([]);
  const [url, setUrl] = useState("");

  // Extract domain safely
  const getDomain = (url) => {
    try {
      return new URL(url).hostname.replace("www.", "");
    } catch {
      return null;
    }
  };

  const handleAuthorizeSitesSubmit = (e) => {
    e.preventDefault();

    const domain = getDomain(url);
    if (!domain) return;

    const newSite = {
      id: crypto.randomUUID(),
      url,
      domain,
    };

    setAuthorizedSitesData((prev) => [...prev, newSite]);
    setUrl("");
  };

  const handleDelete = (id) => {
    setAuthorizedSitesData((prev) => prev.filter((site) => site.id !== id));
  };

  return (
    <div className="bg-white py-6 px-4.5 rounded-b-[12px] grow min-h-0">
      <div className="p-4 border border-[#EAEAEA] rounded-xl space-y-4 h-full flex flex-col">
        {/* Add Site */}
        <form
          onSubmit={handleAuthorizeSitesSubmit}
          className="flex items-center gap-2"
        >
          <CommonInputField
            name="authorizedLink"
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste website URL here"
            className="px-6 border-[#707070]"
            required
          />
          <button
            type="submit"
            className="bg-sky-500 text-white rounded-xl px-9.5 py-4 font-semibold cursor-pointer"
          >
            Add
          </button>
        </form>

        {/* Authorized Sites List */}
        <div className="space-y-2 grow min-h-0 overflow-y-auto">
          {authorizedSitesData.map((site) => (
            <div
              key={site.id}
              className="flex items-center justify-between bg-[#F9F9F9] border border-[#A8B2B5] rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                {/* Dynamic Logo */}
                <img
                  src={`https://logo.clearbit.com/${site.domain}`}
                  onError={(e) => {
                    e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${site.domain}&sz=64`;
                  }}
                  alt={site.domain}
                  className="w-8 h-8 rounded"
                />

                <p className="text-sm text-gray-700 truncate max-w-[260px] sm:max-w-full">
                  {site.url}
                </p>
              </div>

              <FaRegTrashAlt
                onClick={() => handleDelete(site.id)}
                color="red"
                className="cursor-pointer"
                size={18}
              />
            </div>
          ))}

          {authorizedSitesData.length === 0 && (
            <p className="text-3xl text-gray-400 text-center h-full flex items-center justify-center">
              No authorized sites added yet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorizedSites;
