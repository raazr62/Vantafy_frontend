import React from "react";
import { useForm } from "react-hook-form";
import CommonInputField from "@/shared/AuthShared/CommonInputField";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { LockIconSVG } from "../SVG/AuthLayoutSVG";
import { useChangePassword } from "@/hooks/useChangePassword";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const { mutate: changePassword } = useChangePassword(reset);

  const newPassword = watch("new_password");
  const confirmPassword = watch("confirm_password");

  const onSubmit = (data) => {
    changePassword(data);
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
        name="old_password"
        icon={LockIconSVG}
        placeholder="Enter your current password"
        register={register}
        rules={{
          required: "Current password is required",
        }}
        error={errors.old_password}
      />

      {/* New Password */}
      <CommonInputField
        label="New Password"
        type="password"
        name="new_password"
        icon={LockIconSVG}
        placeholder="Enter your new password"
        register={register}
        rules={{
          required: "New password is required",
          minLength: {
            value: 6,
            message: "New password must be at least 6 characters",
          },
          validate: {
            matchesConfirm: (value) => {
              // Only validate if confirm password has been filled
              if (!confirmPassword || confirmPassword.length === 0) {
                return true; // Don't show error if confirm is empty
              }
              return value === confirmPassword || "Passwords do not match";
            },
          },
        }}
        error={errors.new_password}
      />

      {/* Confirm Password */}
      <CommonInputField
        label="Confirm Password"
        type="password"
        name="confirm_password"
        icon={LockIconSVG}
        placeholder="Confirm your new password"
        register={register}
        rules={{
          required: "Please confirm your password",
          validate: {
            matchesNew: (value) => {
              // Check if new password is entered
              if (!newPassword || newPassword.length === 0) {
                return "Please enter new password first";
              }
              return value === newPassword || "Passwords do not match";
            },
          },
        }}
        error={errors.confirm_password}
      />

      <Button type="submit" variant="secondary" className="w-full mt-3">
        Save
      </Button>
    </form>
  );
};

export default ChangePassword;
