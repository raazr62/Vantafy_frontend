import React from "react";
import { DashboardLocalImages } from "../AllPhotos/DashboardLocalImages";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "../ui/select";
import { formatNumberUS } from "@/lib/utils";

const AccountOverviewDetails = ({
  memberData,
  setSelectedMemberId,
  selectedMemberID,
  user,
  dashboardData,
}) => {
  const getAvatarUrl = () => {
    const avatar = dashboardData?.avatar;
    const name = dashboardData?.name || user?.full_name || "User";
    if (!avatar) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=100&background=random`;
    }
    if (avatar.startsWith("http://") || avatar.startsWith("https://")) {
      return avatar;
    }
    const baseUrl = import.meta.env.VITE_IMAGE_URL || "";
    return baseUrl.endsWith("/") && avatar.startsWith("/")
      ? `${baseUrl.slice(0, -1)}${avatar}`
      : `${baseUrl}${avatar.startsWith("/") ? "" : "/"}${avatar}`;
  };

  return (
    <div className="bg-[#F2F5F7] p-3 rounded-[12px]">
      <div className="flex justify-between gap-3 w-full flex-col sm:flex-row sm:items-center mb-2">
        <div className="flex items-center gap-3.5">
          <img
            src={getAvatarUrl()}
            className="w-14 h-14 object-cover rounded-full"
            alt="Your Avatar"
            onError={(e) => {
              const name = dashboardData?.name || user?.full_name || "User";
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=100&background=random`;
            }}
          />
          <div>
            <p className="font-bold">Welcome {dashboardData?.name || user?.full_name || "User"}</p>
            <p className="text-[#707070] text-sm">{dashboardData?.name || user?.full_name || "User"}</p>
          </div>
        </div>

        {/* Select User */}
        {user.role === "agency" && (
          <Select
            value={selectedMemberID?.toString()}
            onValueChange={(value) => setSelectedMemberId(value)}
          >
            <SelectTrigger className="border-none w-full max-w-[250px] sm:w-auto bg-white">
              <SelectValue placeholder="Select Creator Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Creator Name</SelectLabel>
                {memberData?.data?.map((member) => (
                  <SelectItem key={member.id} value={member.id.toString()}>
                    {member.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="flex items-center gap-1.5 sm:gap-3.5">
        {/* Chart */}
        <div className="relative w-fit mt-4">
          <img
            src={
        DashboardLocalImages.overviewChart
  }
  //           src={
  //   DashboardLocalImages.overviewChart?.startsWith("http")
  //     ? DashboardLocalImages.overviewChart
  //     : import.meta.env.VITE_IMAGE_URL +
  //       DashboardLocalImages.overviewChart
  // }
            className="w-40"
            alt="Overview"
          />
          <p className="text-center absolute top-1/2 left-1/2 -translate-1/2">
            <span className="text-xs md:text-[15px] text-white">Total</span>
            <br />
            <span className="text-2xl md:text-3xl font-semibold md:font-bold text-white">
              {formatNumberUS(dashboardData?.total_media) ?? 0}
            </span>
          </p>
        </div>

        {/* Photo and Video Found */}
        <div className="w-full flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-center justify-between py-2 px-5 lg:px-3 bg-white rounded-xl w-full">
            <div>
              <p className="font-medium flex items-center gap-1.5">
                <img  
                src={
   DashboardLocalImages.camera
  }
  //               src={
  //   DashboardLocalImages.camera?.startsWith("http")
  //     ? DashboardLocalImages.camera
  //     : import.meta.env.VITE_IMAGE_URL + DashboardLocalImages.camera
  // }
   alt="Camera" /> Photos
              </p>
              <p className="text-sm">
                {formatNumberUS(dashboardData?.total_photo) ?? 0} item
              </p>
            </div>
            <p className="font-medium">{dashboardData?.photo_percentage}%</p>
          </div>

          {/* Video */}
          <div className="flex items-center justify-between py-2 px-3 bg-white rounded-xl w-full">
            <div>
              <p className="font-medium flex items-center gap-1.5">
                <img 
                src={
    DashboardLocalImages.camera
  } 
  //               src={
  //   DashboardLocalImages.camera?.startsWith("http")
  //     ? DashboardLocalImages.camera
  //     : import.meta.env.VITE_IMAGE_URL + DashboardLocalImages.camera
  // } 
  alt="Camera" /> Videos
              </p>
              <p className="text-sm">
                {formatNumberUS(dashboardData?.total_video) ?? 0} item
              </p>
            </div>
            <p className="font-medium">{dashboardData?.video_percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountOverviewDetails;
