import React, { useState } from "react";
import {
  activity,
  matchesOnPreference,
  mutualmatches,
  nearByMatches,
  profileDetails,
} from "./profileMatchOption";
import { useNavigate } from "react-router-dom";

const Options = () => {
  // const [setselected, setSetselected] = useState(false);
  const navigateTo = useNavigate();
  const openPage = (url) => {
    navigateTo(url);
  };
  return (
    <div className=" border-1 border-gray-300 rounded-sm w-80 ">
      <div className="">
        <p className="text-lg font-semibold p-3">All Matches</p>
        <div>
          <div
            onClick={() => {
              openPage("/matches/all-matches");
            }}
            className={`hover:bg-purple-200 `}
          >
            <div className="flex justify-between p-3 cursor-pointer">
              <div className="flex gap-2">
                <i class="ri-file-user-line text-black text-lg"></i>

                <div className="space-y-1">
                  <p className="font-semibold">Your matches</p>
                  <p className="text-xs">
                    {" "}
                    View all the profiles that match your preferences
                  </p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>
            <div className="bg-gray-200 h-[0.5px] ml-6 w-65 "></div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold px-3 py-1">Based on activity</p>
          <div className="">
            {activity.map((item, index) => (
              <div>
                {" "}
                <div
                  onClick={() => {
                    openPage(item.url);
                  }}
                  key={index}
                  className="flex justify-between p-3 hover:bg-purple-200 cursor-pointer"
                >
                  <div className="flex gap-2 ">
                    <i className={`${item.icon} text-black  text-lg`}></i>
                    <div className="space-y-1">
                      <p className="font-semibold ">{item.title}</p>
                      <p className="text-xs"> {item.subtitle}</p>
                    </div>
                  </div>

                  <i className="ri-arrow-right-s-line text-black text-lg"></i>
                </div>
                <div className="bg-gray-200 h-[0.5px] ml-6 w-65 "></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold px-3 py-1">
            Recently joined & nearby matches
          </p>
          <div className="">
            {nearByMatches.map((item, index) => (
              <div className="">
                <div
                  onClick={() => {
                    openPage(item.url);
                  }}
                  key={index}
                  className="flex justify-between p-3 hover:bg-purple-200 cursor-pointer"
                >
                  <div className="flex gap-2 ">
                    <i
                      className={`${item.icon} text-black text-lg not-only-of-type:`}
                    ></i>
                    <div className="space-y-1">
                      <p className="font-semibold ">{item.title}</p>
                      <p className="text-xs"> {item.subtitle}</p>
                    </div>
                  </div>

                  <i className="ri-arrow-right-s-line text-black text-lg"></i>
                </div>
                <div className="bg-gray-200 h-[0.5px] ml-6 w-65 "></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold px-3 py-1">
            Based on profile details
          </p>
          <div className="">
            {profileDetails.map((item, idx) => (
              <div className="">
                <div
                  onClick={() => {
                    openPage(item.url);
                  }}
                  key={idx}
                  className="flex justify-between cursor-pointer p-3 hover:bg-purple-200"
                >
                  <div className="flex gap-2">
                    <i className={`${item.icon} text-lg text-black`}></i>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-500 text-xs">{item.subtitle}</p>
                    </div>
                  </div>
                  <i className="ri-arrow-right-s-line text-xl text-gray-400"></i>
                </div>
                <div className="bg-gray-200 h-[0.5px] ml-6 w-65 "></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className=" font-semibold  px-3 py-1 text-lg">
            Members who are looking for <br /> someone like you
          </p>
          <div className="">
            {mutualmatches.map((item, index) => (
              <div className="">
                <div
                  onClick={() => {
                    openPage(item.url);
                  }}
                  key={index}
                  className="flex justify-between p-3 cursor-pointer hover:bg-purple-200"
                >
                  <div className="flex gap-2 ">
                    <i className={`${item.icon} text-black text-lg `}></i>
                    <div className="">
                      <p className="font-semibold ">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>{" "}
                  </div>
                  <i className="ri-arrow-right-s-line text-gray-400 text-xl "></i>
                </div>
                <div className="bg-gray-200 h-[0.5px] ml-6 w-65 "></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className=" font-semibold  px-3 py-1 text-lg">
            Matches based on preference
          </p>
          <div className="">
            {matchesOnPreference.map((item, index) => (
              <div className="">
                <div
                  onClick={() => {
                    openPage(item.url);
                  }}
                  key={index}
                  className="flex justify-between p-3 cursor-pointer hover:bg-purple-200"
                >
                  <div className="flex gap-2 ">
                    <i className={`${item.icon} text-black text-lg `}></i>
                    <div className="">
                      <p className="font-semibold ">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>{" "}
                  </div>
                  <i className="ri-arrow-right-s-line text-gray-400 text-xl "></i>
                </div>
                <div className="bg-gray-200 h-[0.5px] ml-6 w-65 "></div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold px-3 py-1">Others matches</p>
          <div className="">
            <div className="flex justify-between p-3 hover:bg-purple-200 cursor-pointer">
              <div className="flex gap-2">
                <i className="ri-graduation-cap-line text-black text-lg"></i>

                <div className="space-y-1">
                  <p className="font-semibold ">Assisted matches</p>
                  <p className="text-xs">
                    {" "}
                    Matches based on your preferred education
                  </p>
                </div>

                <i className="ri-arrow-right-s-line text-gray-400 text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
