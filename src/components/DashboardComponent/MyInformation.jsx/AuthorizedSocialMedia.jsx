import { Button } from "@/components/ui/button";
import { getSocialPlatform } from "@/lib/utils";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const AuthorizedSocialMedia = ({ memberData }) => {
  const [isAddActive, setIsAddActive] = useState(false);

  // Add Social Media
  const handleAddSocialMedia = (e) => {
    e.preventDefault();
    const authorizedSocialMedia = e.target.authorizedSocialMedia.value;
    if (!authorizedSocialMedia) {
      toast.error("Please provide a authorized link");
      return;
    }
    toast.success("Authorized Social Media Successfully added");
    setIsAddActive(false);
    e.target.reset();
  };
  return (
    <div className="bg-white rounded-2xl p-4 w-full border border-[#E2E8F0] shadow-[0_0.785px_2.355px_rgba(0,0,0,0.10)] flex flex-col min-h-60 lg:min-h-0 grow flex-1">
      <p className="font-semibold text-center">Authorized Social Media</p>

      <button
        onClick={() => setIsAddActive(true)}
        className="text-xs font-medium text-center bg-[#E6ECEF] rounded-[6px] py-2 flex items-center justify-center my-2 w-full gap-1 cursor-pointer"
      >
        <PlusIcon size={14} /> Add Account
      </button>
      {isAddActive && (
        <form onSubmit={handleAddSocialMedia} className="mb-2">
          <CommonInputField
            type="url"
            name="authorizedSocialMedia"
            placeholder={"Paste Website Url here"}
            className={"px-2 sm:px-4 sm:py-1.5 text-xs"}
          />
          <div className="flex items-center gap-5 mt-2">
            <Button
              type={"button"}
              onClick={() => setIsAddActive(false)}
              variant={"outline"}
              className={"flex-1 text-xs"}
            >
              Cancel
            </Button>
            <Button
              type={"submit"}
              variant={"secondary"}
              className={"flex-1 text-xs py-0.5"}
            >
              Submit
            </Button>
          </div>
        </form>
      )}
      <div className="space-y-2 grow overflow-y-auto px-2 max-h-80 lg:max-h-full">
        {memberData?.socialMedia?.map((url, idx) => {
          const platform = getSocialPlatform(url);
          if (!platform) return null;

          return (
            <Link
              to={url}
              target="_blank"
              key={idx}
              className="py-2 px-3 text-xs font-medium bg-primary rounded-[6px] text-center w-full! flex items-center justify-center gap-2"
            >
              {/* Platform Logo */}
              <img
                src={`https://logo.clearbit.com/${platform.domain}`}
                onError={(e) => {
                  e.currentTarget.src = `https://www.google.com/s2/favicons?domain=${platform.domain}&sz=64`;
                }}
                alt={platform.name}
                className="w-4 h-4 rounded"
              />

              {/* Platform Name */}
              <p className="text-xs font-medium text-white">{platform.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default AuthorizedSocialMedia;
