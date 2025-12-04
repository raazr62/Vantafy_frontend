import { WeServedMockData } from "@/lib/HomeMockData";
import CommonContainer from "@/shared/LandingShared/CommonContainer";
import CommonTitle from "@/shared/LandingShared/CommonTitle";
import React from "react";
import CountUp from "react-countup";

const WeServed = () => {
  return (
    <CommonContainer id="we-served">
      <CommonTitle title={"We Served"} />
      <div
        className="bg-[linear-gradient(90deg,rgba(78,120,253,0.08)_0%,rgba(255,27,228,0.08)_100%)]
 flex w-9/10 justify-between items-center py-4 px-6 rounded-[30px] mt-8 border border-[#AD46FF]"
      >
        <p className="font-bold">
          Numbers
          <br />
          matters
        </p>
        {WeServedMockData.map((item) => {
          const number = parseFloat(item.value);
          const unit = item.value.replace(number, "");
          return (
            <div key={item.id} className="text-center space-y-3">
              <p className="text-5xl font-bold">
                +<CountUp end={number} duration={5} />
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
