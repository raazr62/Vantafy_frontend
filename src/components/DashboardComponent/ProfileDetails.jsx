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
      isAutomatedMail: true,
    },
  });

  useEffect(() => {
    if (data?.data) {
      reset({
        fullName: data.data.full_name || "",
        email: data.data.email || "",
        country: data.data.country || "",
        timezone: data.data.time_zone || "",
        isAutomatedMail: data.data.is_automated_mail ?? true,
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
      is_automated_mail: formData.isAutomatedMail,
    };

    updateProfile(payload);
  };

  const onFormError = (formErrors) => {
    console.error("Profile form validation errors:", formErrors);
    const firstError = Object.values(formErrors)[0]?.message;
    toast.error(firstError || "Please fill in all required fields");
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
        onSubmit={handleSubmit(onSubmit, onFormError)}
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

        {/* Automated Email Reports Toggle */}
        <div className="flex items-center justify-between p-3.5 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <div className="space-y-0.5 pr-4">
            <label className="text-xs sm:text-sm font-semibold text-[#2E3139] flex items-center gap-2">
              <svg className="w-4 h-4 text-[#240042]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Automated Email Reports
            </label>
            <p className="text-xs text-gray-500">
              Enable or disable receiving automated email reports for scan findings and link removals.
            </p>
          </div>

          <Controller
            name="isAutomatedMail"
            control={control}
            render={({ field }) => (
              <button
                type="button"
                role="switch"
                aria-checked={field.value}
                disabled={isPending}
                onClick={() => {
                  const newValue = !field.value;
                  field.onChange(newValue);
                  updateProfile({
                    full_name: watch("fullName"),
                    country: watch("country"),
                    time_zone: watch("timezone"),
                    is_automated_mail: newValue,
                  });
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border transition-colors duration-200 ease-in-out focus:outline-none ${
                  field.value
                    ? "bg-gray-700 border-gray-800"
                    : "bg-gray-200 border-gray-300"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    field.value ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            )}
          />
        </div>

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
