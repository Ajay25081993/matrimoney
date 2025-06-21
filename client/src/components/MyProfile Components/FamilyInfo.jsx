import React, { useState } from "react";
import EditFamilyInfo from "./Edit/EditFamilyInfo";


const FamilyInfo = ({ userInfo, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = (updatedData) => {
    onSave(updatedData);
    setIsEditing(false);
  };

  return (
    <div className="profileComponent !gap-0">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">Family Details</p>
        {!isEditing ? (
          <button
            className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <i className="ri-pencil-fill"></i> Edit
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer"
            onClick={handleCancel}
          >
            <i className="ri-close-line"></i> Cancel
          </button>
        )}
      </div>

      {/* Static Display */}
      <div
        className={` transition-all duration-1000 overflow-hidden ${
          isEditing ? "opacity-0 translate-y-20" : "opacity-100 translate-y-0"
        }`}
      >
        {!isEditing && (
          <div className="flex flex-col gap-2 mt-2 text-gray-700">
            <div className="flex  gap-4">
              <div className="flex gap-4 w-1/2">
                <div>
                  <p className="py-1">Family Values :</p>
                  <p className="py-1">Family Type :</p>
                  <p className="py-1">Family Status :</p>
                  <p className="py-1">No. of Sisters :</p>
                </div>
                <div>
                  <p className="py-1">Not Specified</p>
                  <p className="py-1">Not Specified</p>
                  <p className="py-1">Not Specified</p>
                  <p className="py-1">{userInfo.noOfSister}</p>
                </div>
              </div>

              <div className="flex gap-4 w-1/2">
                <div>
                  <p className="py-1">No. of Brothers :</p>
                  <p className="py-1">Father's Occupation :</p>
                  <p className="py-1">Mother's Occupation :</p>
                  <p className="py-1">Family Location :</p>
                </div>
                <div>
                  <p className="py-1">{userInfo.noOfBrother}</p>
                  <p className="py-1">{userInfo.father}</p>
                  <p className="py-1">{userInfo.mother}</p>
                  <p className="py-1">Not Specified</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Slide-up Edit Section */}
      <EditFamilyInfo
        isEditing={isEditing}
        userInfo={userInfo}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default FamilyInfo;
