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
    <div className="bg-white rounded-2xl p-6 flex flex-col grow min-h-0 max-h-screen">
      <p className="font-semibold">Submitted Links</p>

      <div className="overflow-auto grow min-h-0">
        <table className="min-w-full border-collapse">
          {/* Table Head */}
          <thead className="text-xs font-semibold text-gray-600 border-b-2 border-gray-200 bg-white sticky top-0 z-10">
            <tr>
              <th className="py-2.5 px-3 text-left w-80">Submitted Link</th>
              <th className="py-2.5 px-3 text-left w-24">Platform</th>
              <th className="py-2.5 px-3 text-left w-32">Detected Items</th>
              <th className="py-2.5 px-3 text-left w-32">Status</th>
              <th className="py-2.5 px-3 text-left w-28">Date</th>
              <th className="py-2.5 px-3 text-center w-20">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-xs divide-y divide-gray-200">
            {linksData.map((linkData) => (
              <tr key={linkData.id} className="hover:bg-gray-50">
                {/* Link */}
                <td className="py-3 px-3">
                  <a
                    href={linkData.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group hover:bg-gray-50 p-1 rounded-md transition-colors group"
                  >
                    <span className="p-1.5 bg-pink-100 rounded-md shrink-0">
                      <DocumentIconSVG />
                    </span>
                    <span className="truncate max-w-[200px] lg:max-w-full text-ellipsis group-hover:underline">
                      {linkData.link}
                    </span>
                    <span className="shrink-0 text-gray-400 group-hover:text-pink-500 transition-colors">
                      <LinkOpenIconSVG />
                    </span>
                  </a>
                </td>

                {/* Platform */}
                <td className="py-3 px-3">{linkData.platform}</td>

                {/* Detected Items */}
                <td className="py-3 px-3">
                  <div className="flex gap-1 items-center">
                    <span className="bg-pink-100 px-2 py-1 font-bold text-pink-600 rounded-lg">
                      {linkData.detectedItem}
                    </span>
                    <span>items</span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-3 px-3">
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
                <td className="py-3 px-3">{linkData.date}</td>

                {/* Action */}
                <td className="py-3 px-3 text-center">
                  <button
                    onClick={() => handleDeleteLinksData(linkData.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    <FaRegTrashAlt size={18} />
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
