import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Building2, User } from "lucide-react";

/**
 * Role Selection Modal for Google OAuth
 * Appears when backend returns "Invalid role specified" error
 * Allows user to select between Agency Owner or Individual
 */
const RoleSelectionModal = ({ isOpen, onClose, onRoleSelect, isPending }) => {
  const [selectedRole, setSelectedRole] = useState("");

  const roleOptions = [
    {
      value: "agency",
      label: "Agency Owner",
      icon: Building2,
      description: "Manage multiple clients and team members",
    },
    {
      value: "individual",
      label: "Individual",
      icon: User,
      description: "Personal account for individual use",
    },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole);
    }
  };

  const handleClose = () => {
    setSelectedRole("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="border-b border-b-[#E5E7EB] pb-3">
            Select Your Role
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          <p className="text-sm text-[#425583]">
            Please select your account type to continue with Google Sign-in
          </p>

          {/* Role Selection */}
          <div className="space-y-3">
            {roleOptions.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`
                    border rounded-xl p-4 cursor-pointer transition-all
                    ${
                      selectedRole === role.value
                        ? "border-sky-500 bg-sky-50"
                        : "border-gray-200 hover:border-sky-300"
                    }
                  `}
                >
                  <div className="flex items-start gap-3">
                    {/* Radio Button */}
                    <div className="mt-1 w-4 h-4 rounded-full border border-sky-500 flex items-center justify-center shrink-0">
                      {selectedRole === role.value && (
                        <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                      )}
                    </div>

                    {/* Icon */}
                    <div
                      className={`
                      p-2 rounded-lg
                      ${
                        selectedRole === role.value
                          ? "bg-sky-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }
                    `}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="font-medium text-sm sm:text-base">
                        {role.label}
                      </p>
                      <p className="text-xs sm:text-sm text-[#425583] mt-0.5">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-4">
            <Button
              onClick={handleClose}
              variant="outline"
              className="flex-1"
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              onClick={handleContinue}
              variant="formSubmit"
              className="flex-1"
              disabled={!selectedRole || isPending}
            >
              {isPending ? "Signing in..." : "Continue"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RoleSelectionModal;
