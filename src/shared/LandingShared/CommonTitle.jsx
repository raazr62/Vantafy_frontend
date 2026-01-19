import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

const CommonTitle = ({ title, className = "border-primary" }) => {
  return (
    <div className="flex items-center gap-1.5 sm:gap-4 cursor-default w-full lg:max-w-5xl">
      <div className="flex-1 flex items-center">
        <span className="h-0.5 bg-linear-to-r from-transparent to-purple-400 w-full" />
        <motion.span
          animate={{
            rotate: 360,
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500"
        ></motion.span>
      </div>
      <div
        className={cn(
          "md:text-lg font-semibold sm:font-bold py-1.5 sm:py-2.5 px-2 md:px-4.5 border-[0.5px] sm:border rounded-[70px] text-center",
          className,
        )}
      >
        {title}
      </div>
      <div className="flex-1 flex items-center">
        <motion.span
          animate={{
            rotate: 360,
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500"
        ></motion.span>
        <span className="h-0.5 bg-linear-to-l from-transparent to-purple-400 w-full" />
      </div>
    </div>
  );
};

export default CommonTitle;
