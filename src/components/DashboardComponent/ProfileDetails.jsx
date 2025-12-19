import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import AdvancedTimezoneDropdown from "@/shared/DashboardShared/AdvancedTimezoneDropdown";
import CountryDropdown from "@/shared/DashboardShared/CountryDropdown";
import { EmailIconSVG, ProfileIconSVG } from "../SVG/DashboardLayoutSVG";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import toast from "react-hot-toast";

const ProfileDetails = () => {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      timezone: "",
    },
  });

  const timezone = watch("timezone");

  const onSubmit = (data) => {
    console.log("Profile Form Submitted:", data);
    toast.success("Successfully updated profile details");
  };

  return (
    <div className="px-2 sm:px-4 pt-2 sm:pt-4 pb-4 sm:pb-6 bg-white rounded-b-[12px]">
      <ProfilePhoto />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 sm:space-y-4 mt-4"
      >
        {/* Full Name */}
        <CommonInputField
          label="Full Name"
          name="fullName"
          placeholder="Enter your full name"
          icon={ProfileIconSVG}
          register={register}
          error={errors.fullName}
          rules={{ required: "Full name is required" }}
        />

        {/* Email (Read Only) */}
        <CommonInputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          value="fixedEmail@gmail.com"
          icon={EmailIconSVG}
          register={register}
          readOnly={true}
          className="bg-gray-100 cursor-not-allowed"
        />

        {/* Country */}
        <div>
          <label className="text-xs text-[#2E3139] font-medium mb-1">
            Country
          </label>

          <Controller
            name="country"
            control={control}
            rules={{ required: "Country is required" }}
            render={({ field }) => (
              <CountryDropdown
                value={field.value}
                onChange={(val) => field.onChange(val)}
                placeholder="Select your country"
              />
            )}
          />

          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Timezone */}
        <div>
          <Controller
            name="timezone"
            control={control}
            rules={{ required: "Timezone is required" }}
            render={({ field }) => (
              <AdvancedTimezoneDropdown
                value={field.value}
                onChange={(val) => field.onChange(val)}
                country={watch("country")}
                placeholder="Select your timezone"
              />
            )}
          />

          {errors.timezone && (
            <p className="text-red-500 text-xs mt-1">
              {errors.timezone.message}
            </p>
          )}
        </div>

        {/* Timezone preview */}
        {timezone && (
          <div className="p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Selected Timezone:</strong> {timezone}
            </p>

            <p className="text-xs text-blue-600 mt-1">
              Current time:{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: timezone,
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        )}

        <Button type="submit" variant="secondary">
          Save
        </Button>
      </form>
    </div>
  );
};

export default ProfileDetails;
