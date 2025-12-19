import React from "react";
import { useForm } from "react-hook-form";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { LockIconSVG } from "../SVG/AuthLayoutSVG";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const newPassword = watch("newPass");

  const onSubmit = (data) => {
    console.log("Password change request:", data);
    reset();
    toast.success("Password updated successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 pt-4 bg-white pb-6 rounded-[12px] space-y-2 sm:space-y-4"
    >
      {/* Current Password */}
      <CommonInputField
        label="Current Password"
        type="password"
        name="currentPassword"
        icon={LockIconSVG}
        placeholder="Enter your current password"
        register={register}
        rules={{
          required: "Current password is required",
        }}
        error={errors.currentPassword}
      />

      {/* New Password */}
      <CommonInputField
        label="New Password"
        type="password"
        name="newPass"
        icon={LockIconSVG}
        placeholder="Enter your new password"
        register={register}
        rules={{
          required: "New password is required",
          minLength: {
            value: 6,
            message: "New password must be at least 6 characters",
          },
        }}
        error={errors.newPass}
      />

      {/* Confirm Password */}
      <CommonInputField
        label="Confirm Password"
        type="password"
        name="confirmPass"
        icon={LockIconSVG}
        placeholder="Confirm your new password"
        register={register}
        rules={{
          required: "Please confirm your password",
          validate: (value) =>
            value === newPassword || "Passwords do not match",
        }}
        error={errors.confirmPass}
      />

      <Button type="submit" variant="secondary" className="w-full mt-3">
        Save
      </Button>
    </form>
  );
};

export default ChangePassword;
