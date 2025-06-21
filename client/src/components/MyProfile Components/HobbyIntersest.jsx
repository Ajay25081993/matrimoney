import React from "react";
import { useNavigate } from "react-router-dom";

const HobbyIntersest = () => {
  const navigateTo = useNavigate();
  const openHobbyPage = () => {
    navigateTo("/hobby-interest");
  };
  return (
    <div className="profileComponent">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">
          Hobbies and Interests
        </p>
        <button
          onClick={() => {
            openHobbyPage();
          }}
          className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer"
        >
          <span>
            <i class="ri-pencil-fill"></i>
          </span>{" "}
          Edit
        </button>
      </div>

      <p>Not Specified.</p>
    </div>
  );
};

export default HobbyIntersest;
