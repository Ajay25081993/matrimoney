import React from "react";
import { Link } from "react-router-dom";

const Hover = ({ className ,userData}) => {
  return (
    <div className={`absolute ${className} `}>
      <div className="text-center  h-6 py-5">
        <i class="ri-arrow-up-s-fill text-3xl text-white "></i>
      </div>
      <div
        className={`bg-white overflow-auto  w-60 h-90 shadow-md shadow-gray-400 rounded-lg px-4 py-2 flex flex-col gap-4`}
      >
        <div className="text-center">
          <p className="font-bold">{userData.firstName+" "+userData.lastName}</p>
          {/* <p>B6256693</p> */}
          <p>Free member</p>
        </div>
        <div className="space-y-1">
          <div className="py-2 cursor-pointer hover:bg-gray-100">
            <i class="ri-file-edit-fill"></i>
            <Link to="/my-profile">
              <span className="ml-2">Edit Profile</span>
            </Link>
          </div>
          <hr className="text-gray-300" />
          <div className="py-2 cursor-pointer hover:bg-gray-100">
            <i class="ri-edit-box-line"></i>
            <Link to="/partner-preferences">
             <span className="ml-2">Edit Preferences</span>
            </Link>
            
          </div>{" "}
          <hr className="text-gray-300" />
          <div className="py-2 cursor-pointer hover:bg-gray-100">
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
              <Link to='/settings'>
              <span className="ml-2">Settings</span>
              </Link>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hover;
