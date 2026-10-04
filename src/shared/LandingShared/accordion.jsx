import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { PlusIconSVG } from "@/components/SVG/HomeLayoutSVG";

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "bg-[#FAF6FF] data-[state=open]:bg-[#e2f3fe] px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 first:rounded-t-2xl last:rounded-b-2xl overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-2 sm:gap-3 lg:gap-4 rounded-md py-2 lg:py-4 text-left text-lg sm:text-xl lg:text-2xl font-bold transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>div>svg]:rotate-135 [&[data-state=open]>div]:bg-primary [&>div]:border [&>div]:border-primary [&>div>svg]:text-primary [&[data-state=open]>div>svg]:text-white cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <div className="p-2 rounded-full flex items-center justify-center">
          <PlusIconSVG className="rounded-full pointer-events-none size-2 lg:size-4 shrink-0 transition-transform duration-400" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden px-2 sm:px-4 lg:px-5 text-left text-sm lg:text-base"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
