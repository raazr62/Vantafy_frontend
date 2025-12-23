import React, { useRef, useState } from "react";

const OtpInput = ({ length = 6, onChange, onSubmitOtp }) => {
  const navigationInputs = useRef([]);
  const [error, setError] = useState(false);

  const triggerErrorAnimation = () => {
    setError(true);
    setTimeout(() => setError(false), 400);
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    // Allow only a single digit
    if (/^\d$/.test(value)) {
      const newOtp = navigationInputs.current.map(
        (input) => input?.value || ""
      );
      newOtp[index] = value;
      onChange?.(newOtp.join(""));

      // Auto move next
      if (index < length - 1) {
        navigationInputs.current[index + 1].focus();
      }

      // Auto submit
      if (newOtp.join("").length === length && !newOtp.includes("")) {
        onSubmitOtp?.(newOtp.join(""));
      }
    } else {
      e.target.value = "";
      triggerErrorAnimation();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    [...pasted].forEach((digit, i) => {
      navigationInputs.current[i].value = digit;
    });

    onChange?.(pasted);

    if (pasted.length === length) {
      onSubmitOtp?.(pasted);
    }

    const focusIndex = Math.min(pasted.length - 1, length - 1);
    navigationInputs.current[focusIndex].focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const inputs = navigationInputs.current;

      // If current input has value → clear it
      if (inputs[index].value) {
        inputs[index].value = "";

        const newOtp = inputs.map((input) => input?.value || "");
        onChange?.(newOtp.join(""));
        return;
      }

      // If empty → go back and clear previous
      if (index > 0) {
        inputs[index - 1].value = "";
        inputs[index - 1].focus();

        const newOtp = inputs.map((input) => input?.value || "");
        onChange?.(newOtp.join(""));
      }
    }
  };

  return (
    <div
      className={`grid grid-cols-6 gap-1.5 sm:gap-2.5 w-full transition-all ${
        error ? "otp-error" : ""
      }`}
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (navigationInputs.current[index] = el)}
          type="number"
          inputMode="numeric"
          maxLength={1}
          className="p-2 sm:p-3 text-center border border-primary rounded-md outline-none 
                     focus:border-[#3B9DF8] text-base sm:text-lg font-semibold
                     no-spinner"
          placeholder="-"
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          onWheel={(e) => e.target.blur()}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
};

export default OtpInput;
