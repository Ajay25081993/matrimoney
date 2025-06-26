import React from "react";
import { Link, useNavigate } from "react-router-dom";
import boyAvatar from "../../assets/Dp.png";

const MatchedPerson = () => {
  const navigateTo = useNavigate();
  const openProfile = () => {
    navigateTo("/matches/all-matches/1");
  };
  return (
    <div className="w-2xl ">
      <p className="mb-2">
        {" "}
        For 90 matches based on your{" "}
        <Link
          to="/partner-preferences"
          className="text-orange-400 underline"
          href=""
        >
          Preferences
        </Link>{" "}
      </p>
      <div className="flex flex-wrap gap-2">
        <div className="p-1 border-1 text-sm  border-gray-300 rounded-4xl ">
          Profiles with photo
        </div>
        <div className="p-1 border-1 text-sm  border-gray-300 rounded-4xl ">
          Profile with horoscope
        </div>
        <div className="p-1 border-1  border-gray-300  text-sm rounded-4xl ">
          Location
        </div>
        <div className="p-1 border-1  border-gray-300  text-sm rounded-4xl ">
          Mutual matches
        </div>
      </div>

      <div className="mt-5  border-1   border-gray-300 rounded-lg p-4 flex w-full gap-6">
        <div
          onClick={() => openProfile()}
          className="relative w-60 h-55 overflow-hidden rounded-xl border-1 cursor-pointer "
        >
          <img className="object-cover w-full" src={boyAvatar} alt="" />
          <div
            onClick={() => openProfile()}
            className="absolute right-0 px-1  rounded-tr-xl rounded-l-xs top-0 bg-[#000000] text-sm text-white"
          >
            <i class="ri-heart-add-line"></i> Shortlist
          </div>
        </div>

        <div className="space-y-1">
          <div onClick={() => openProfile()} className="cursor-pointer">
            <p className="font-bold">sulogna das</p>{" "}
            <p className="text-gray-500">Last seen Few hours ago </p>
            <div className="flex space-x-2 flex-wrap">
              <div>18yrs</div>
              <div className="text-purple-400">●</div>
              <div> 5'3"</div>
              <div className="text-purple-400">●</div>
              <div>Mahisya</div>
              <div className="text-purple-400">●</div>
              <div>LL.B</div>
              <div className="text-purple-400">●</div>
              <div>Not Working</div>
              <div className="text-purple-400">●</div>
              <div>kolkata</div>
            </div>
          </div>

          <div className="mt-20 flex gap-2">
            <button className="border-1 px-3 text-gray-700 border-gray-300 rounded-full cursor-pointer flex gap-2 items-center">
              <i className="ri-close-line text-2xl mt-1 text-gray-500"></i>
              <span>Don't Show</span>
            </button>
            <button className=" px-6 rounded-full text-white bg-violet-500 cursor-pointer flex gap-2 items-center">
              <i className="ri-heart-line text-2xl mt-1 text-white"></i>
              <span>Send interset</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchedPerson;
