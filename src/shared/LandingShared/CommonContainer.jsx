import { cn } from "@/lib/utils";
import React from "react";

const CommonContainer = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-center mt-10 sm:mt-12 lg:mt-15 w-11/12 container mx-auto px-4 sm:px-6",
        className
      )}
    >
      {children}
    </section>
  );
};

export default CommonContainer;
