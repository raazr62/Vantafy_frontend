import React from "react";

const CommonContainer = ({ children, id }) => {
  return (
    <section
      id={id}
      className="flex flex-col items-center mt-40 container mx-auto"
    >
      {children}
    </section>
  );
};

export default CommonContainer;
