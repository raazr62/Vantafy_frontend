import { cn } from "@/lib/utils";
import React from "react";

const CommonContainer = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={cn(
        "flex flex-col items-center mt-10 sm:mt-20 lg:mt-30 w-11/12 container mx-auto",
        className
      )}
    >
      {children}
    </section>
  );
};

export default CommonContainer;
