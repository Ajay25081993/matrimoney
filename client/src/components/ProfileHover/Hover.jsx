import React from "react";

const Hover = ({ className }) => {
  return (
    <div className={`absolute ${className} `}>
      <div className="text-center  h-6">
        <i class="ri-arrow-up-s-fill text-3xl text-white "></i>
      </div>
      <div
        className={`bg-white overflow-auto  w-60 h-90 shadow-md shadow-gray-400 rounded-lg px-4 py-6 flex flex-col gap-4`}
      >
        <div className="text-center">
          <p className="font-bold">Rudradeb Maji</p>
          <p>B6256693</p>
          <p>Free member</p>
        </div>
        <div className="space-y-1">
          <div className="py-2 cursor-pointer hover:bg-gray-100">
            <i class="ri-edit-box-line"></i>
            <span className="ml-2">Edit Profile</span>
          </div>
          <hr className="text-gray-300" />
          <div className="py-2 cursor-pointer hover:bg-gray-100">
            <i class="ri-edit-box-line"></i>
            <span className="ml-2">Edit Preferences</span>
          </div>{" "}
          <hr className="text-gray-300" />
          <div className="py-2 cursor-pointer hover:bg-gray-100" >
            <i class="ri-verified-badge-line"></i>
            <span className="ml-2">Verify Profile</span>
          </div>
          <hr className="text-gray-300 hover:bg-gray-100" />
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Support and Feedback</p>
          <div className="space-y-1">
            <div className="py-2 cursor-pointer hover:bg-gray-100">
              <i class="ri-settings-3-line"></i>
              <span className="ml-2">Settings</span>
            </div>
            <hr className="text-gray-300" />
            <div className="py-2 cursor-pointer hover:bg-gray-100">
              <i class="ri-question-line"></i>
              <span className="ml-2">Help</span>
            </div>{" "}
            <hr className="text-gray-300" />
            <div className="py-2 cursor-pointer hover:bg-gray-100">
              <i class="ri-group-2-line"></i>
              <span className="ml-2">Success Stories</span>
            </div>
            <hr className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;
