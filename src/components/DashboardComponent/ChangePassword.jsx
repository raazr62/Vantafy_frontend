import React, { useState } from "react";
import { Button } from "../ui/button";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPass: "",
    confirmPass: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="px-4 pt-4 bg-white pb-6 rounded-[12px] space-y-4">
      {/* Current Password */}
      <div>
        <label
          htmlFor="currentPass"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Current Password
        </label>
        <input
          type="password"
          id="currentPass"
          name="currentPass"
          value={formData.currentPassword}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your current password"
        />
      </div>

      {/* New Password */}
      <div>
        <label
          htmlFor="newPass"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPass"
          name="newPass"
          value={formData.newPass}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your new password"
        />
      </div>

      {/* Confirm Password */}
      <div>
        <label
          htmlFor="confirmPass"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPass"
          name="confirmPass"
          value={formData.confirmPass}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your confirm password"
        />
      </div>

      <Button type={"submit"} variant={"secondary"}>
        Save
      </Button>
    </div>
  );
};

export default ChangePassword;
