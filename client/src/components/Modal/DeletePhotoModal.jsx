import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import warning from "../../assets/warning.png";
import axiosInstance from "../../lib/axios";
import { API_URLS } from "../../constants/apiUrls";
import { showErrorToast, showSuccessToast } from "../../lib/toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const DeletePhotoModal = ({
  isOpen,
  setIsOpen,
  name,
  publicId,
  deleted,
}) => {
  const [deleting, setDeleting] = useState(false);
  const navigateTo = useNavigate();
  const deletePhoto = async () => {
    try {
      setDeleting(true);
      const deleteResponse = await axiosInstance.put(API_URLS.DELETE_PHOTO, {
        name: name,
        publicId: publicId,
      });
      if (!deleteResponse.data.length) {
        showSuccessToast(deleteResponse.message, navigateTo);
        setIsOpen(false);
        deleted();
      } else {
        showErrorToast(deleteResponse.message);
      }
    } catch (error) {
      console.error("Error deleting photo:", error);
      showErrorToast("Failed to delete photo. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => {}} className="relative ">
        <div className="fixed  inset-0 flex h-screen w-screen backdrop-blur-sm bg-[#462eb365] items-center justify-center  p-4">
          <DialogPanel className="max-w-lg space-y-4 border-1 border-white rounded-md bg-white p-12">
            <DialogTitle className="font-bold text-xl text-violet-600">
              Delete Photo
            </DialogTitle>
            <Description className="text-md font-mono text-red-500 flex items-center gap-2">
              <img src={warning} className="w-5" alt="" /> This will permanently
              delete your photo
            </Description>
            <p className="text-gray-700 text-xl font-bold">
              Are you sure you want to delete this photo?
            </p>
            <div className="flex gap-4">
              {deleting ? (
                <div className="cursor-not-allowed bg-violet-500 rounded-xl text-white px-4 py-2 text-xl font-semibold flex items-center justify-center gap-2 opacity-70">
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  Deleting...
                </div>
              ) : (
                <>
                  <button
                    onClick={() => {
                      deletePhoto();
                    }}
                    className="cursor-pointer bg-violet-500 rounded-xl text-white px-4 py-2 text-xl font-semibold"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-pointer bg-violet-200 rounded-xl text-gray-500 px-4 py-2 text-xl font-semibold"
                  >
                    No
                  </button>
                </>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
