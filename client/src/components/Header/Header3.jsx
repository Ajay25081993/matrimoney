import React from "react";
import Logo from "../../assets/ShadiLogo.png";
import dp from "../../assets/Dp.png";
import { useNavigate } from "react-router-dom";
import Hover from "../ProfileHover/Hover";
const Header = ({
  openDashboard,
  setOpenDashboard,
  openMyProfile,
  setOpenMyProfile,
  openMyPhotos,
  setOpenMyPhotos,
  openPartnerPreferences,
  setOpenPartnerPreferences,
  openSettings,
  setOpenSettings,
  openMore,
  setOpenMore,
}) => {
  const navigate = useNavigate();
  const openInbox = () => {
    navigate("/inbox");
  };
  return (
    <div className="w-full fixed top-0 left-0 z-50 ">
      <div className="w-full px-50 py-2 bg-red-400 flex justify-between items-center">
        <div>
          <img src={Logo} alt="" className="w-20" />
        </div>

        <div className="flex items-center gap-8 text-white">
          <div
            onClick={() => {
              setOpenDashboard(true);
              setOpenMyProfile(false);
              setOpenMyPhotos(false);
              setOpenPartnerPreferences(false);
              setOpenSettings(false);
              setOpenMore(false);
            }}
            className="cursor-pointer"
          >
            <span>Home</span>
          </div>
          <span>
            Matches{" "}
            <sup className="bg-yellow-50 text-black text-[15px] px-1 rounded-full">
              100
            </sup>
          </span>
          <span>Search</span>
          <span
            onClick={() => {
              openInbox();
            }}
            className="cursor-pointer"
          >
            Inbox
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="border-1 border-white px-6 py-0.5 flex items-center gap-1 text-white cursor-pointer">
            <i class="ri-vip-crown-fill mt-1"></i>
            <p>Upgrade Now</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-white">
            <span>Help</span>
            <i class="ri-arrow-down-s-line mt-1"></i>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer text-white">
              <img src={dp} className="w-8 rounded-full" alt="" />
              <i class="ri-arrow-down-s-line mt-1"></i>
            </div>
            <Hover className="group-hover:block hidden top-5 -right-20"/>
          </div>
        </div>
      </div>
      <div className="bg-white w-full shadow-md shadow-gray-400 text-gray-500 flex gap-7 py-1 items-center justify-center">
        <span
          className={`cursor-pointer ${
            openDashboard ? "text-red-500 underline underline-offset-8" : ""
          }`}
          onClick={() => {
            setOpenDashboard(true);
            setOpenMyProfile(false);
            setOpenMyPhotos(false);
            setOpenPartnerPreferences(false);
            setOpenSettings(false);
            setOpenMore(false);
          }}
        >
          Dashboard
        </span>
        <span
          className={`cursor-pointer ${
            openMyProfile ? "text-red-500 underline underline-offset-8 " : ""
          }`}
          onClick={() => {
            setOpenMyProfile(true);
            setOpenDashboard(false);
            setOpenMyPhotos(false);
            setOpenPartnerPreferences(false);
            setOpenSettings(false);
            setOpenMore(false);
          }}
        >
          My Profile
        </span>
        <span
          className={`cursor-pointer ${
            openMyPhotos ? "text-red-500 underline underline-offset-8 " : ""
          }`}
          onClick={() => {
            setOpenMyPhotos(true);
            setOpenDashboard(false);
            setOpenMyProfile(false);
            setOpenPartnerPreferences(false);
            setOpenSettings(false);
            setOpenMore(false);
          }}
        >
          My Photos
        </span>
        <span
          className={`cursor-pointer ${
            openPartnerPreferences
              ? "text-red-500 underline underline-offset-8 "
              : ""
          }`}
          onClick={() => {
            setOpenPartnerPreferences(true);
            setOpenDashboard(false);
            setOpenMyProfile(false);
            setOpenMyPhotos(false);
            setOpenSettings(false);
            setOpenMore(false);
          }}
        >
          Partner Preferences
        </span>
        <span
          className={`cursor-pointer ${
            openSettings ? "text-red-500 underline underline-offset-8 " : ""
          }`}
          onClick={() => {
            setOpenSettings(true);
            setOpenDashboard(false);
            setOpenMyProfile(false);
            setOpenMyPhotos(false);
            setOpenPartnerPreferences(false);
            setOpenMore(false);
          }}
        >
          Settings
        </span>
        <span
          className={`cursor-pointer ${
            openMore ? "text-red-500 underline underline-offset-8 " : ""
          }`}
          onClick={() => {
            setOpenMore(true);
            setOpenDashboard(false);
            setOpenMyProfile(false);
            setOpenMyPhotos(false);
            setOpenPartnerPreferences(false);
            setOpenSettings(false);
          }}
        >
          More
        </span>
      </div>
    </div>
  );
};

export default Header;
