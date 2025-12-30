import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";

const AccountToConnect = ({ account, isOpen, onOpen, onClose }) => {
  const [isConnected, setIsConnected] = useState(false);
  const { name, logo } = account;

  const handleAccountClick = () => {
    if (!isConnected) {
      onOpen();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    if (!userName) {
      toast.error("Please provide your account username");
      return;
    }
    toast.success(`Your account connected ${e.target.name.value}`);
    setIsConnected(true);
    onClose();
  };

  return (
    <div
      onClick={handleAccountClick}
      className="border border-[#EFE6FD] px-3 sm:px-4 py-2 sm:py-3 rounded-[12px] cursor-pointer flex items-center justify-between"
    >
      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt={name} className="w-8 sm:w-10 lg:w-12" />
          <div>
            <p className="text-base sm:text-lg">{name}</p>
            <p
              className={`text-sm sm:text-base ${
                isConnected ? "text-green-400" : "text-[#90A1B9]"
              }`}
            >
              {isConnected ? "connected" : "Not connected"}
            </p>
          </div>
        </div>
        {isOpen && !isConnected && (
          <form
            onSubmit={handleSubmit}
            className="space-y-2 sm:space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              name="name"
              placeholder="Your user name"
              className="bg-gray-100 w-full max-w-[415px] py-1.5 sm:py-2.5 px-3 sm:px-4 rounded-xl outline-none border border-transparent focus:border-sky-500"
            />
            <br />
            <div className="flex items-center max-w-[415px] gap-3">
              <button
                type="submit"
                className="py-1 sm:py-2 bg-sky-500 text-white rounded-xl w-3/6 sm:w-4/6 cursor-pointer text-sm sm:text-base"
              >
                Save
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="border border-[#EFE6FD] py-1 sm:py-2 rounded-xl w-3/6 sm:w-2/6 cursor-pointer text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
      {!!isConnected && <FaCheck className="text-green-400" size={18} />}
    </div>
  );
};

export default AccountToConnect;
