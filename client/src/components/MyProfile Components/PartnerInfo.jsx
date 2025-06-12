import React from "react";

const PartnerInfo = () => {
  return (
    <div className="
    profileComponent">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">Partner Preferences</p>
        <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
          <span>
            <i class="ri-pencil-fill"></i>
          </span>{" "}
          Edit
        </button>
      </div>

      <p>Not Specified.</p>

      <button className="bg-amber-500 text-white py-1 rounded-sm cursor-pointer w-45" >
                Edit Partner Preferences
                
              </button>
    </div>
  );
};

export default PartnerInfo;
