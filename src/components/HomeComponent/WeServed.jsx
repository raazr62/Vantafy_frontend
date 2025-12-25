import { WeServedMockData } from "@/lib/HomeMockData";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import CountUp from "react-countup";

const WeServed = () => {
  return (
    <CommonContainer id="we-served">
      <CommonTitle title={"We Served"} />
      <div className="bg-[linear-gradient(90deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)] xl:w-9/10 py-4 px-6 rounded-[30px] mt-8 border border-[#AD46FF] grid grid-cols-2 sm:grid-cols-6 items-center gap-3 xl:gap-6">
        <p className="text-sm lg:text-base font-bold text-center col-span-2 sm:col-span-1">
          Numbers
          <br className="hidden sm:block" /> Matters
        </p>
        {WeServedMockData.map((item) => {
          const number = parseFloat(item.value);
          const unit = item.value.replace(number, "");
          return (
            <div
              key={item.id}
              className="text-center xl:space-y-3 last:col-span-2 sm:last:col-span-1"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                +<CountUp end={number} duration={5} enableScrollSpy={true} />
                {unit}
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
