import React from "react";
import { DashboardLocalImages } from "../AllPhotos/DashboardLocalImages";

const AccountOverviewDetails = () => {
  return (
    <div className="bg-[#F2F5F7] p-3 rounded-[12px]">
      <div className="flex items-center gap-3.5">
        <img
          src="https://i.pravatar.cc/"
          className="w-14 h-14 rounded-full"
          alt="Your Avatar"
        />
        <div>
          <p className="font-bold">Welcome to Jacob Jones</p>
          <p className="text-[#707070] text-sm">Jacob Jones</p>
        </div>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-3.5">
        {/* Chart */}
        <div className="relative w-fit mt-4">
          <img
            src={DashboardLocalImages.overviewChart}
            className="w-40"
            alt="Overview"
          />
          <p className="text-center absolute top-1/2 left-1/2 -translate-1/2">
            <span className="text-xs md:text-[15px] text-white">Total</span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold md:font-bold text-white">
              1.1k
            </span>
          </p>
        </div>

        {/* Photo and Video Found */}
        <div className="w-full flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-center justify-between py-2 px-5 lg:px-3 bg-white rounded-xl w-full">
            <div>
              <p className="font-medium flex items-center gap-1.5">
                <img src={DashboardLocalImages.camera} alt="Camera" /> Photos
              </p>
              <p className="text-sm">1.9k item</p>
            </div>
            <p className="font-medium">67%</p>
          </div>

          {/* Video */}
          <div className="flex items-center justify-between py-2 px-3 bg-white rounded-xl w-full">
            <div>
              <p className="font-medium flex items-center gap-1.5">
                <img src={DashboardLocalImages.camera} alt="Camera" /> Videos
              </p>
              <p className="text-sm">927 item</p>
            </div>
            <p className="font-medium">67%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverviewDetails;
