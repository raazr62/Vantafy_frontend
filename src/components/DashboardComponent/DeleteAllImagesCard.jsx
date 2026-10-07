import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDeleteAllUserImages } from "@/hooks/useDeleteAllUserImages";

const DeleteAllImagesCard = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const { mutate: deleteAllImages, isPending } = useDeleteAllUserImages();

  const handleDeleteConfirm = () => {
    deleteAllImages(null, {
      onSettled: () => {
        setShowConfirmModal(false);
      },
    });
  };

  return (
    <div className="p-4 sm:p-6 bg-white border border-red-200 rounded-xl mt-4 sm:mt-6 space-y-3 sm:space-y-4">
      <div className="flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-red-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            <h3 className="text-sm sm:text-base font-bold text-red-900">
              Delete All Images from Server
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-red-700 max-w-2xl">
            Permanently remove scan result images and media files from the server.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowConfirmModal(true)}
          disabled={isPending}
          className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full cursor-pointer shadow-xs border-none shrink-0 transition-colors disabled:opacity-50"
        >
          Delete
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full p-5 sm:p-6 space-y-4 shadow-2xl border border-gray-100">
            <div className="flex items-center gap-3 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  Delete All Images?
                </h4>
                <p className="text-xs text-gray-500">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Are you sure you want to delete all your scan images from the server? This will permanently delete all your scan result images and media files from AWS S3 cloud storage (profile avatar is excluded).
            </p>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                disabled={isPending}
                onClick={() => setShowConfirmModal(false)}
                className="text-xs sm:text-sm px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Cancel
              </Button>

              <button
                type="button"
                onClick={handleDeleteConfirm}
                disabled={isPending}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-xl cursor-pointer border-none flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Deleting...
                  </>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAllImagesCard;
