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
  register,
  rules = {},
  error,
  readOnly = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      {label && (
        <label htmlFor={name} className="text-xs text-[#2E3139] font-medium">
          {label}
        </label>
      )}

      <div className="relative">
        {/* Input */}
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          readOnly={readOnly}
          className={cn(
            "w-full py-3.5 rounded-lg border border-sky-500 outline-none transition focus:border-primary",
            Icon ? "pl-9" : "",
            readOnly && "bg-gray-100 cursor-not-allowed opacity-70",
            error && "border-red-500 focus:border-red-500",
            className
          )}
          {...(register && register(name, rules))}
          {...props}
        />

        {/* Left Icon */}
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
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

      {/* Error Message */}
      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error.message || "Invalid field"}
        </p>
      )}
    </div>
  );
};

export default CommonInputField;
