import { WeServedMockData } from "@/lib/HomeMockData";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import CountUp from "react-countup";

const WeServed = ({ our_metrics }) => {
  // Determine metrics list to display (fallback to WeServedMockData if API hasn't loaded or returned data)
  const metricsList = our_metrics?.metrics_list
    ? our_metrics.metrics_list.map((m, idx) => ({
        id: idx + 1,
        value: m.value,
        label: m.label,
      }))
    : WeServedMockData;

  const sectionTitle = our_metrics?.section_title || "Our Metrics";
  const headerTitle = our_metrics?.header_title || "Numbers Matters";

  return (
    <CommonContainer id="we-served">
      <CommonTitle title={sectionTitle} />
      <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] xl:w-9/10 py-4 px-6 rounded-[30px] mt-10 sm:mt-12 lg:mt-15 border border-[#AD46FF] grid grid-cols-2 sm:grid-cols-6 items-center gap-3 xl:gap-6">
        <p className="text-sm lg:text-base font-bold text-center col-span-2 sm:col-span-1">
          {headerTitle.includes(" ") ? (
            <>
              {headerTitle.split(" ")[0]}
              <br className="hidden sm:block" />{" "}
              {headerTitle.split(" ").slice(1).join(" ")}
            </>
          ) : (
            headerTitle
          )}
        </p>
        {metricsList.map((item, idx) => {
          const valStr = String(item.value || "").trim();
          const hasExplicitPlus = valStr.startsWith("+");
          const prefix = hasExplicitPlus ? "+" : "+"; // Always display + sign prefix for metric values
          const number = parseFloat(valStr.replace(/[^0-9.]/g, "")) || 0;
          const unit = valStr.replace(/^[+0-9.]*/, "") || "";

          return (
            <div
              key={item.id || idx}
              className="text-center xl:space-y-3 last:col-span-2 sm:last:col-span-1"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                <CountUp
                  prefix={prefix}
                  end={number}
                  suffix={unit}
                  duration={5}
                  enableScrollSpy={true}
                />
              </p>
              <p className="text-xs font-medium">{item.label}</p>
            </div>
          );
        })}
      </div>
    </CommonContainer>
  );
};

export default WeServed;
