import React from "react";
import {
  DocumentIconSVG,
  LinkOpenIconSVG,
  StatusCompleteIconSVG,
  StatusFailedIconSVG,
} from "../SVG/DashboardLayoutSVG";
import { Link } from "react-router";
import { FaRegTrashAlt } from "react-icons/fa";

const SubmittedLinksStatus = () => {
  const linksMockData = [
    {
      id: 1,
      link: "https://example-leak-site.com/content/user123/album-5",
      platform: "Image",
      detectedItem: 12,
      status: "Removed",
      date: "Nov 15, 2025",
    },
    {
      id: 2,
      link: "https://example-leak-site.com/content/user123/album-5",
      platform: "Video",
      detectedItem: 8,
      status: "Failed",
      date: "Nov 13, 2025",
    },
    {
      id: 3,
      link: "https://example-leak-site.com/content/user123/album-5",
      platform: "Image",
      detectedItem: 24,
      status: "Processing",
      date: "Nov 10, 2025",
    },
    {
      id: 4,
      link: "https://example-leak-site.com/content/user123/album-5",
      platform: "Image",
      detectedItem: 24,
      status: "Processing",
      date: "Nov 10, 2025",
    },
    {
      id: 5,
      link: "https://example-leak-site.com/content/user123/album-5",
      platform: "Image",
      detectedItem: 24,
      status: "Processing",
      date: "Nov 10, 2025",
    },
    {
      id: 6,
      link: "https://example-leak-site.com/content/user123/album-5",
      platform: "Image",
      detectedItem: 24,
      status: "Processing",
      date: "Nov 10, 2025",
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col grow min-h-0">
      <p className="font-semibold mb-4">Submitted Links</p>

      <div className="grow min-h-0 flex flex-col">
        <table className="min-w-full border-collapse">
          {/* Table Head */}
          <thead className="text-xs font-semibold text-[#4A4A4A] border-b-2 border-b-[#eeedf0]">
            <tr>
              <th className="py-2.5 px-3 text-left">Submitted Link</th>
              <th className="py-2.5 px-3 text-left">Platform</th>
              <th className="py-2.5 px-3 text-left">Detected Items</th>
              <th className="py-2.5 px-3 text-left">Status</th>
              <th className="py-2.5 px-3 text-left">Date</th>
              <th className="py-2.5 px-3 text-left">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-xs divide-y divide-[#eeedf0] overflow-hidden">
            {linksMockData.map((linkData) => (
              <tr key={linkData.id} className="hover:bg-gray-50">
                {/* Link */}
                <td className="py-3 px-3 flex items-center gap-2">
                  <span className="p-1.5 bg-[#FF1BE41A] rounded-[6px]">
                    <DocumentIconSVG />
                  </span>
                  <span className="truncate max-w-[200px]">
                    {linkData.link}
                  </span>
                  <Link to={linkData.link} target="_blank">
                    <LinkOpenIconSVG />
                  </Link>
                </td>

                {/* Platform */}
                <td className="py-3 px-3">{linkData.platform}</td>

                {/* Detected Items */}
                <td className="py-3 px-3 flex gap-1 items-center">
                  <span className="bg-[#FF1BE41A] px-2 py-1 font-bold text-primary rounded-lg">
                    {linkData.detectedItem}
                  </span>{" "}
                  items
                </td>

                {/* Status */}
                <td className="py-3 px-3">
                  <span
                    className={`flex items-center gap-1 font-medium py-1 px-3 rounded-[6px] w-fit ${
                      linkData.status === "Removed"
                        ? "bg-[#10B9811A] text-[#10B981]"
                        : linkData.status === "Failed"
                        ? "bg-[#EF44441A] text-[#EF4444]"
                        : linkData.status === "Processing" &&
                          "bg-[#4E78FD1A] text-[#4E78FD]"
                    }`}
                  >
                    {linkData.status === "Removed" ? (
                      <StatusCompleteIconSVG />
                    ) : linkData.status === "Failed" ? (
                      <StatusFailedIconSVG />
                    ) : (
                      linkData.status === "Processing" && (
                        <span className="loader w-3 h-3 border border-[#4E78FD]"></span>
                      )
                    )}
                    {linkData.status}
                  </span>
                </td>

                {/* Date */}
                <td className="py-3 px-3">{linkData.date}</td>

                {/* Action */}
                <td className="py-3 px-3">
                  <FaRegTrashAlt
                    // onClick={() => handleDelete(site.id)}
                    color="red"
                    className="cursor-pointer"
                    size={18}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmittedLinksStatus;
