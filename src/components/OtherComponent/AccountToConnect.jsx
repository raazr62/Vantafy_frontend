import React, { useState } from "react";
import toast from "react-hot-toast";

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
      className="border border-[#EFE6FD] p-4 rounded-[12px] space-y-6 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <img src={logo} alt={name} />
        <div>
          <p className="text-lg">{name}</p>
          <p className={`${isConnected ? "text-green-400" : "text-[#90A1B9]"}`}>
            {isConnected ? "connected" : "Not connected"}
          </p>
        </div>
      </div>
      {isOpen && !isConnected && (
        <form
          onSubmit={handleSubmit}
          className="space-y-3"
          onClick={(e) => e.stopPropagation()}
        >
          <input
            type="text"
            name="name"
            placeholder="Your user name"
            className="bg-gray-100 w-full max-w-[415px] py-2.5 px-4 rounded-xl outline-none border border-transparent focus:border-sky-500"
          />
          <br />
          <div className="flex items-center max-w-[415px] gap-3">
            <button
              type="submit"
              className="py-2 bg-sky-500 text-white rounded-xl w-4/6 cursor-pointer"
            >
              Save
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="border border-[#EFE6FD] py-2 rounded-xl w-2/6 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AccountToConnect;
