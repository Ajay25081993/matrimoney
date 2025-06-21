import React, { useRef, useState } from "react";
import girlAvatar from "../../assets/AiGirl.png";
import camera from "../../assets/camera.png";
import { images } from "./images";
import { useAuthStore } from "../../store/useAuthStore";

const PhotoUpload = () => {
  // const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const fileInputRef = useRef(null);
const [selectedImg, setSelectedImg] = useState(null);
  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-10 flex-col p-5">
        <p className="text-2xl">
          Congrats Your Profile has been created. <br />
          Upload Photo and get better Matches
        </p>
        <div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleImageUpload}
          />

          <div
            onClick={handleDivClick}
            className="w-30 bg-gray-300 h-30 rounded-full shadow-md  hover:shadow-xl shadow-gray-600 relative cursor-pointer "
          >
            <img
              className="w-30 h-30 rounded-full border-1 border-gray-400 "
              src={selectedImg || girlAvatar}
              alt=""
            />
            <img src={camera} className="w-8 absolute top-23 right-2" alt="" />
          </div>
          <p
            onClick={handleDivClick}
            className="border-1 border-green-200
           hover:bg-green-400 hover:border-white hover:shadow-xs shadow-green-400 transition-colors   mt-10 p-1 text-center font-semibold text-gray-600 cursor-pointer bg-green-200 "
          >
            Choose Image{" "}
          </p>
        </div>
        <div className="w-xl bg-gray-400 h-[2px]"></div>

        <div className=" w-2xl p-2 space-y-4">
          <p>Photo guidelines</p>
          <div className="flex gap-2">
            {images.map((image, index) => {
              return (
                <div key={index} className="space-y-1 w-30">
                  <div className="flex items-center gap-2">
                    <i
                      className={`${image.icon} ${
                        image.icon === "ri-check-line"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    ></i>
                    <p>{image.title}</p>
                  </div>
                  <img src={image.image} className=" w-30" alt="" />
                </div>
              );
            })}
          </div>

          <div className="space-y-4 ">
            <p>Know more</p>
            <div className=" flex gap-2 text-sm font-semibold">
              <i className={`ri-check-line text-green-500`}></i>
              <p>Do's</p>
            </div>

            <ul className="list-disc pl-8 ml-10 text-gray-400 text-sm font-semibold">
              <li>
                Your Photo should be front facing and your entire face should be
                visible.
              </li>
              <li>Ensure that your Photo is recent and not with a group.</li>
              <li>You can upload up to 20 Photos to your Profile.</li>
              <li>
                Each Photo must be less than 15 MB in size and must be in one of
                the following formats: jpg, gif, png, bmp or tiff.
              </li>
            </ul>

            <div className=" flex gap-2 text-sm font-semibold">
              <i className={`ri-close-line text-red-500`}></i>
              <p>Don'ts</p>
            </div>
            <ul className="list-disc pl-8 ml-10 text-gray-400 text-sm font-semibold tracking-tighter">
              <li>
                Watermarked, digitally enhanced, morphed Photos or Photos with
                your personal information will be rejected.
              </li>
              <li>
                Irrelevant Photographs will lead to deactivation of your Profile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
