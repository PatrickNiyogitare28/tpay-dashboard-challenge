"use client";
import { AccordionContent } from "@/components/ui/accordion";
import useAccordionTabs from "./hooks/useAccordionTabs";

export default function AnalyticsAccordionTabs() {
  const { onHandleAnalyticsTab, accordionTabs, activeAccordionIndex } = useAccordionTabs();

  return (
    <div>
      {accordionTabs.map((acc, index) => (
        <AccordionContent
          onClick={() => onHandleAnalyticsTab(index)}
          className={`${
            index === activeAccordionIndex ? "bg-primary-100" : ""
          } flex flex-col justify-center h-10 rounded-md cursor-pointer`}
          key={index}
        >
          <div className="flex gap-2 items-center ml-8 mt-4">
            <div className={`w-2 h-2 bg-${acc.color} rounded-full`} />
            <label
              className={`text-white ${
                index === activeAccordionIndex ? "opacity-100" : "opacity-50"
              } text-[13px] hover:opacity-100`}
            >
              {acc.label}
            </label>
          </div>
        </AccordionContent>
      ))}
    </div>
  );
}
