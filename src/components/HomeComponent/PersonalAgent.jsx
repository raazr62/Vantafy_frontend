import { personalAgentMockData } from "@/lib/HomeMockData";
import React from "react";
import {
  BrowserIconSVG,
  SearchIconSVG,
  ShareIconSVG,
} from "../SVG/HomeLayoutSVG";
import { VideoIconSVG } from "../SVG/DashboardLayoutSVG";

const PersonalAgent = () => {
  return (
    <div className="bg-[#AD46FF0A] py-11 w-full mt-6">
      <div className="max-w-2xl mx-auto space-y-4">
        <p className="text-center bg-linear-to-r from-[#4E78FD] to-[#FF1BE4] bg-clip-text text-transparent font-semibold text-[32px]">
          Social Expertise
        </p>
        <p className="text-center text-[#333333] font-medium">
          The majority of our clients are OnlyFans models. We understand the
          unique challenges you face and have developed specialized solutions.
        </p>

        <div className="py-6 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)]">
          <p className="text-xl font-semibold text-primary text-center">
            Manual Monitoring
          </p>

          <div className="space-y-5 mt-6">
            <p className="flex items-center gap-2 text-sm font-medium">
              <SearchIconSVG /> Google Images deep search
            </p>
            <p className="flex items-center gap-2 text-sm font-medium">
              <BrowserIconSVG /> 100% remove from google
            </p>
            <p className="flex items-center gap-2 text-sm font-medium">
              <ShareIconSVG /> Social media platforms
            </p>
            <p className="flex items-center gap-2 text-sm font-medium">
              <VideoIconSVG /> Video Streaming Sites
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {personalAgentMockData.map((data) => (
            <div
              key={data.id}
              className="py-6 px-4 rounded-2xl bg-[linear-gradient(90deg,rgba(78,120,253,0.04)_0%,rgba(255,27,228,0.04)_100%)] flex items-center gap-2"
            >
              <p className="bg-linear-to-r from-[#EC70DA] to-[#51AEFA] p-2.5 rounded-xl">
                {data.icon}
              </p>
              <div>
                <p className="text-[#333333] font-semibold">{data.title}</p>
                <p className="text-[#333333]">{data.description}</p>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAgent;
