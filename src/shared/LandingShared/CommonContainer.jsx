import React from "react";

const CommonContainer = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-30 mb-20 container mx-auto">
      {children}
    </div>
  );
};

export default CommonContainer;
