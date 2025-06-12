import React, { useState } from "react";
import couple from "../../assets/kiss.png";
import photo from "../../assets/photo.png";
import astrology from "../../assets/astrology.png";
import { Link, NavLink } from "react-router-dom";
import Profile from "../MyProfile Components/Profile";
import About from "../MyProfile Components/About";
import BasicDetails from "../MyProfile Components/BasicDetails";
import ReligionInfo from "../MyProfile Components/ReligionInfo";
import LocationInfo from "../MyProfile Components/LocationInfo";
import ProfessionalInfo from "../MyProfile Components/ProfessionalInfo";
import Family from "../MyProfile Components/Family";
import HobbyIntersest from "../MyProfile Components/HobbyIntersest";
import FamilyInfo from "../MyProfile Components/FamilyInfo";
import PartnerInfo from "../MyProfile Components/PartnerInfo";
const MyProfile = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
    <div className="w-full py-8  flex  justify-center font-semibold gap-5">
      {/* Left Side */}
      <div className="w-3xl flex flex-col gap-4 ">
        {/* Profile Picture */}
        <Profile />

        <div>
          <p className="text-2xl text-green-400">Personal Information</p>
          <div className="w-3xl h-[1px] bg-gray-400"></div>
        </div>

        {/* About Me */}
        <About />

        {/* Basic Details */}
        <BasicDetails />

        {/*Religion Information */}
        <ReligionInfo />

        {/* Location Information */}
        <LocationInfo />

        {/* Professional Information */}
        <ProfessionalInfo />

        {/* Family Details */}
        <FamilyInfo />

        {/* About My Family */}
        <Family />

        {/* Hobbies and Interests */}
        <HobbyIntersest />

        {/* Partner Preferences */}
        <PartnerInfo />
      </div>

      {/* Right Side */}
      <div className=" space-y-5">
        <div className="w-full border-l-4 border-t-4 border-r-1 border-b-1 border-gray-300 rounded-xl bg-gray-100 flex flex-col gap-5 px-2 py-3 ">
          <div className="w-70 flex items-center gap-4">
            <img src={couple} className="w-15" alt="" />
            <p>
              <span className="text-xl font-normal">
                {" "}
                Add Partner <br /> Preferences
              </span>
              <br />
              To find your perfect match
            </p>
          </div>

          <button className="hover:bg-amber-500 hover:text-white text-sky-500 text-xl border-1 border-red-200 bg-white font-normal py-1 rounded-sm cursor-pointer flex items-center justify-center">
            Add Partner Preferences{" "}
            <i className="ri-arrow-right-s-fill text-xl mt-1"></i>
          </button>
        </div>

        {viewMore && (
          <div className="w-full border-l-4 border-t-4 border-r-1 border-b-1 border-gray-300 rounded-xl bg-gray-100 flex flex-col gap-5 px-2 py-3 ">
            <div className="w-70 flex items-center gap-4">
              <img src={astrology} className="w-15" alt="" />
              <p>
                <span className="text-xl font-normal"> Add Horoscope</span>
                <br />
                It is simple and absolutely FREE!
              </p>
            </div>

            <button className="hover:bg-amber-500 hover:text-white text-sky-500 text-xl border-1 border-red-200 bg-white font-normal py-1 rounded-sm cursor-pointer flex items-center justify-center">
              Add Horoscope{" "}
              <i className="ri-arrow-right-s-fill text-xl mt-1"></i>
            </button>
          </div>
        )}

        <div className="w-full border-l-4 border-t-4 border-r-1 border-b-1 border-gray-300 rounded-xl bg-gray-100 flex flex-col gap-5 px-2 py-3 ">
          <div className="w-70 flex items-center gap-4">
            <img src={photo} className="w-15" alt="" />
            <p>
              <span className="text-xl font-normal"> Add More Photos</span>
              <br />
              Adding three or more photos might increase your chances of getting
              more responses.
            </p>
          </div>

          <button className="hover:bg-amber-500 hover:text-white text-sky-500 text-xl border-1 border-red-200 bg-white font-normal py-1 rounded-sm cursor-pointer flex items-center justify-center">
            Add More Photos{" "}
            <i className="ri-arrow-right-s-fill text-xl mt-1"></i>
          </button>
        </div>

        <div className="w-full  border-1 border-gray-300  bg-gray-100 flex flex-col gap-5 px-2 py-3 ">
          <button
            onClick={() => setViewMore(!viewMore)}
            className="hover:bg-amber-500 hover:text-white text-sky-500 text-xl border-1 border-red-200 bg-white font-normal py-1 rounded-sm cursor-pointer flex items-center justify-center"
          >
           {" "}
            {viewMore ? (
              <>
                <span>View Less</span>
                <i className="ri-arrow-up-s-fill "></i>
              </>
            ) : (
              <>
                <span>View More</span>
                <i className="ri-arrow-down-s-fill "></i>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
