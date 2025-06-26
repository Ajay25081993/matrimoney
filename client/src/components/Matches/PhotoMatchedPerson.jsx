import React from "react";
import { Link } from "react-router-dom";

const PhotoMatchedPerson = () => {
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

      <div className="mt-5 h-50 border-1   border-gray-300 rounded flex flex-wrap  ">
        <div className="w-45 h-45 rounded-xl border-1 border-gray-300  mt-2 ml-2 mr-2">
          <img className="" src="" alt="" />
        </div>
        <div className="  ">
          <div>
            <p className="font-bold">sulogna das</p>{" "}
            <p className="text-gray-400">B5856041 | Last seen Few hours ago </p>
            <div className="flex flex-wrap">
              <div>18yrs</div>
              <div>●5'3"</div>
              <div>●Mahisya</div>
              <div>●LL.B</div>
              <div>●Not Working</div>
              <div>●kolkata</div>
            </div>
            <div className="mt-20 ">
              <button className="border-1  border-gray-300 rounded hover:bg-amber-600 cursor-pointer ml-2 mr-2">
                X Don't Show
              </button>
              <button className="border-1  border-gray-300 rounded hover:bg-amber-600 cursor-pointer">
                ❤️Send interset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoMatchedPerson;
