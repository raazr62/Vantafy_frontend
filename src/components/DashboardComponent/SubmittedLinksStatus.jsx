import React from "react";
import {
  DocumentIconSVG,
  LinkOpenIconSVG,
  StatusCompleteIconSVG,
  StatusFailedIconSVG,
} from "../SVG/DashboardLayoutSVG";
import { FaRegTrashAlt } from "react-icons/fa";

const SubmittedLinksStatus = ({ linksData, setLinksData }) => {
  const handleDeleteLinksData = (id) => {
    setLinksData((prev) => prev.filter((link) => link.id !== id));
  };

  return (
    <div className="flex flex-col min-h-0 flex-1">
      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-auto overflow-y-auto flex-1 flex flex-col min-h-0">
        <table className="min-w-full border-collapse">
          {/* Table Head - Sticky */}
          <thead className="text-xs font-semibold text-gray-600 border-b-2 border-gray-200 bg-white sticky top-0 z-20">
            <tr>
              <th className="py-2.5 px-3 text-left min-w-[300px] md:min-w-[400px]">
                Submitted Link
              </th>
              <th className="py-2.5 px-3 text-left min-w-[100px]">Platform</th>
              <th className="py-2.5 px-3 text-left min-w-[120px]">
                Detected Items
              </th>
              <th className="py-2.5 px-3 text-left min-w-[120px]">Status</th>
              <th className="py-2.5 px-3 text-left min-w-[100px]">Date</th>
              <th className="py-2.5 px-3 text-center min-w-[60px]">Action</th>
            </tr>
          </thead>

          {/* Table Body - Scrollable */}
          <tbody className="text-xs divide-y divide-gray-200">
            {linksData.map((linkData) => (
              <tr key={linkData.id} className="hover:bg-gray-50">
                {/* Link */}
                <td className="py-3 px-3 min-w-[300px] md:min-w-[400px]">
                  <a
                    href={linkData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group hover:bg-gray-50 p-1 rounded-md transition-colors"
                  >
                    <span className="p-1.5 bg-pink-100 rounded-md shrink-0">
                      <DocumentIconSVG />
                    </span>
                    <span className="truncate max-w-[150px] sm:max-w-[200px] lg:max-w-[300px] group-hover:underline">
                      {linkData.link}
                    </span>
                    <span className="shrink-0 text-gray-400 group-hover:text-pink-500 transition-colors">
                      <LinkOpenIconSVG />
                    </span>
                  </a>
                </td>

                {/* Platform */}
                <td className="py-3 px-3 min-w-[100px]">{linkData.platform}</td>

                {/* Detected Items */}
                <td className="py-3 px-3 min-w-[120px]">
                  <div className="flex gap-1 items-center">
                    <span className="bg-pink-100 px-2 py-1 font-bold text-pink-600 rounded-lg">
                      {linkData.detectedItem}
                    </span>
                    <span>items</span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-3 px-3 min-w-[120px]">
                  <span
                    className={`inline-flex items-center gap-1 font-medium py-1 px-3 rounded-md ${
                      linkData.status === "Removed"
                        ? "bg-green-100 text-green-600"
                        : linkData.status === "Failed"
                        ? "bg-red-100 text-red-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {linkData.status === "Removed" ? (
                      <StatusCompleteIconSVG />
                    ) : linkData.status === "Failed" ? (
                      <StatusFailedIconSVG />
                    ) : (
                      <span className="w-3 h-3 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>
                    )}
                    {linkData.status}
                  </span>
                </td>

                {/* Date */}
                <td className="py-3 px-3 min-w-[100px]">{linkData.date}</td>

                {/* Action */}
                <td className="py-3 px-3 min-w-[60px] text-center">
                  <button
                    onClick={() => handleDeleteLinksData(linkData.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <FaRegTrashAlt size={16} />
                  </button>
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
