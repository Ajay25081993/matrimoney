import React, { useState } from "react";
import EditAboutFamily from "./Edit/EditAboutFamily";

const AboutFamily = ({ aboutText = "Not Specified.", onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentAbout, setCurrentAbout] = useState(aboutText);

  const handleSave = (updatedAbout) => {
    setCurrentAbout(updatedAbout);
    if (onSave) onSave(updatedAbout);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profileComponent !gap-1">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">About My Family</p>
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
            <i className="ri-close-line"></i> Close
          </button>
        )}
      </div>

      {/* Static Text */}
      <div
        className={` transition-all duration-1000 overflow-hidden ${
          isEditing ? "opacity-0 translate-y-20" : "opacity-100 translate-y-0"
        }`}
      >
        <div
          className={`transition-all duration-1000 overflow-hidden ${
            isEditing ? "opacity-0 translate-y-20" : "opacity-100 translate-y-0"
          }`}
        >
          {!isEditing && (
            <p className="text-black text-sm mt-2 leading-relaxed">
              {currentAbout}
            </p>
          )}
        </div>
      </div>
      {/* Editable Textarea */}

      <EditAboutFamily
        isEditing={isEditing}
        initialValue={currentAbout}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default AboutFamily;
