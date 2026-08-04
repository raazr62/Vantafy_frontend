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
  value,
  labelClassName,
  preventPaste,
  onPaste,
  onCopy,
  onCut,
  onDrop,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  const isConfirmField =
    preventPaste ??
    (name?.toLowerCase().includes("confirm") ||
      label?.toLowerCase().includes("confirm") ||
      name?.toLowerCase().includes("retype") ||
      label?.toLowerCase().includes("retype") ||
      placeholder?.toLowerCase().includes("retype") ||
      placeholder?.toLowerCase().includes("re-enter"));

  const handlePrevent = (e, customHandler) => {
    if (isConfirmField) {
      e.preventDefault();
    }
    if (customHandler) {
      customHandler(e);
    }
  };

  return (
    <div className="flex flex-col gap-1 sm:gap-2 w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className={cn("text-xs text-[#2E3139] font-medium", labelClassName)}
        >
          {label}
        </label>
      )}

      <div className="relative">
        {/* Input */}
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          readOnly={readOnly}
          onPaste={(e) => handlePrevent(e, onPaste)}
          onCopy={(e) => handlePrevent(e, onCopy)}
          onCut={(e) => handlePrevent(e, onCut)}
          onDrop={(e) => handlePrevent(e, onDrop)}
          className={cn(
            "w-full py-2 sm:py-3.5 rounded-lg border border-sky-500 outline-none transition focus:border-primary",
            Icon ? "pl-9" : "",
            readOnly && "bg-gray-100 cursor-not-allowed opacity-70",
            error && "border-red-500 focus:border-red-500",
            className,
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
