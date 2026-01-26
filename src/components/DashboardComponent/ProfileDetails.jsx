import React, { useEffect } from "react";
import ProfilePhoto from "./ProfilePhoto";
import AdvancedTimezoneDropdown from "@/shared/DashboardShared/AdvancedTimezoneDropdown";
import CountryDropdown from "@/shared/DashboardShared/CountryDropdown";
import { EmailIconSVG, ProfileIconSVG } from "../SVG/DashboardLayoutSVG";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { useGetProfileData } from "@/hooks/useGetProfileData";
import useUpdateProfile from "@/hooks/useUpdateProfile";

const ProfileDetails = () => {
  const { data, isLoading } = useGetProfileData();
  const { mutate: updateProfile, isPending } = useUpdateProfile();

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      country: "",
      timezone: "",
    },
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        fullName: data.data.full_name || "",
        email: data.data.email || "",
        country: data.data.country || "",
        timezone: data.data.time_zone || "",
      });
    }
  }, [data?.data, reset]);

  const timezone = watch("timezone");

  const onSubmit = (formData) => {
    // Map form fields to API expected fields
    const payload = {
      full_name: formData.fullName,
      country: formData.country,
      time_zone: formData.timezone,
    };

    updateProfile(payload);
  };

  if (isLoading) {
    return (
      <div className="px-2 sm:px-4 pt-2 sm:pt-4 pb-4 sm:pb-6 bg-white rounded-b-[12px]">
        <div className="animate-pulse space-y-4">
          <div className="h-24 bg-gray-200 rounded-xl"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-2 sm:px-4 pt-2 sm:pt-4 pb-4 sm:pb-6 bg-white rounded-b-[12px]">
      <ProfilePhoto profile_photo={data?.data?.avatar} />

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
          disabled={isPending}
        />

        {/* Email (Read Only) */}
        <CommonInputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="example@gmail.com"
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
                disabled={isPending}
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
                disabled={isPending}
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

        <Button type="submit" variant="secondary" disabled={isPending}>
          {isPending ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Saving...
            </>
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </div>
  );
};

export default ProfileDetails;
