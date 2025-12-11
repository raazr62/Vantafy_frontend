import React, { useState } from "react";
import ProfilePhoto from "./ProfilePhoto";
import AdvancedTimezoneDropdown from "@/shared/DashboardShared/AdvancedTimezoneDropdown";
import CountryDropdown from "@/shared/DashboardShared/CountryDropdown";

const ProfileDetails = () => {
  // Add state for form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    timezone: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle country change from CountryDropdown
  const handleCountryChange = (countryCode) => {
    setFormData((prev) => ({
      ...prev,
      country: countryCode,
      // Optionally clear timezone when country changes
      timezone: "",
    }));
  };

  // Handle timezone change
  const handleTimezoneChange = (timezone) => {
    setFormData((prev) => ({
      ...prev,
      timezone,
    }));
  };

  return (
    <div className="px-4 pt-4 bg-white pb-6 rounded-b-[12px]">
      <ProfilePhoto />

      {/* All Input Fields */}
      <div className="space-y-4 mt-4">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Country */}
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Country
          </label>
          <CountryDropdown
            value={formData.country}
            onChange={handleCountryChange}
            placeholder="Select your country"
          />
        </div>

        {/* Timezone */}
        <div>
          <AdvancedTimezoneDropdown
            value={formData.timezone}
            onChange={handleTimezoneChange}
            country={formData.country}
            placeholder="Select your timezone"
          />
        </div>

        {/* Display selected time info */}
        {formData.timezone && (
          <div className="p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Selected Timezone:</strong> {formData.timezone}
            </p>
            <p className="text-xs text-blue-600 mt-1">
              Current time:{" "}
              {new Date().toLocaleTimeString("en-US", {
                timeZone: formData.timezone,
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
