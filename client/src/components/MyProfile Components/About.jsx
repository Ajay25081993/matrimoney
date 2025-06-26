import React, { useEffect, useState } from "react";
import EditAbout from "./Edit/EditAbout";

const About = ({ userInfo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [aboutText, setAboutText] = useState(userInfo.aboutMe || "");

  useEffect(() => {
    setAboutText(userInfo.aboutMe || "");
  }, [userInfo.aboutMe]);
  const handleCancel = () => {
    setAboutText(userInfo.aboutMe);
    setIsEditing(false);
  };
  return (
    <div className="profileComponent !gap-2 ">
      <div className="flex w-full justify-between items-center mb-2 ">
        <p className="text-xl font-normal text-gray-400 ">In my own words</p>
        {!isEditing ? (
          <button
            className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            <i className="ri-pencil-fill"></i> <span>Edit</span>
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer"
            onClick={handleCancel}
          >
            <i className="ri-close-line"></i> <span>Close</span>
          </button>
        )}
      </div>

      {/* Animated Editor Section */}

      <EditAbout
        userInfo={userInfo}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        aboutText={aboutText}
        setAboutText={setAboutText}
      />

      {/* Static Text */}
      {!isEditing && (
        <p className="text-gray-600 transition-opacity duration-1000 ">
          {aboutText}
        </p>
      )}
    </div>
  );
};

export default About;
