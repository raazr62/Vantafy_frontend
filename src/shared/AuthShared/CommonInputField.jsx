// CommonInputField.jsx
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaRegEye } from "react-icons/fa6";
import { PasswordEyeCloseIconSVG } from "@/components/SVG/AuthLayoutSVG";

const CommonInputField = ({
  label,
  type = "text",
  name,
  placeholder,
  icon: Icon,
  className,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={name} className="text-xs text-[#2E3139]">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          required={required}
          className={cn(
            "w-full py-3.5 rounded-lg border border-sky-500 outline-none focus:border-primary",
            Icon && "pl-9",
            className
          )}
        />

        {/* Left Icon */}
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        )}

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showPassword ? (
              <PasswordEyeCloseIconSVG />
            ) : (
              <FaRegEye size={14} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default CommonInputField;
