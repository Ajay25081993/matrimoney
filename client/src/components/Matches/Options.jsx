import React from "react";
import { profileMatchOptions } from "./profileMatchOption";

const Options = () => {
  return (
    <div className=" border-1 border-gray-300 rounded-sm w-80 p-3">
      <div className="space-y-5">
        <p className="text-lg font-semibold">All Matches</p>

        <div>
          <div className="flex justify-between">
            <div className="flex gap-2 ">
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
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Based on activity</p>
          <div className="space-y-5">
            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i className="ri-star-s-fill text-black text-lg"></i>
                <div className="space-y-1">
                  <p className="font-semibold ">Shortlisted by you</p>
                  <p className="text-xs"> Matches you have shortlisted</p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i class="ri-eye-line text-black text-lg "></i>

                <div className="space-y-1">
                  <p className="font-semibold ">Viewed you</p>
                  <p className="text-xs">
                    Matches who have viewed your profile
                  </p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i className="ri-user-star-line text-black text-lg"></i>
                <div className="space-y-1">
                  <p className="font-semibold ">Shortlisted you</p>
                  <p className="text-xs">
                    {" "}
                    Matches who have shortlisted your profile
                  </p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i class="ri-user-heart-line text-black text-lg "></i>

                <div className="space-y-1">
                  <p className="font-semibold ">Viewed by you</p>
                  <p className="text-xs"> Matches you have viewed</p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">
            Recently joined & nearby matches
          </p>
          <div className="space-y-5">
            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i className="ri-star-s-fill text-black text-lg"></i>
                <div className="space-y-1">
                  <p className="font-semibold ">Newly Joined</p>
                  <p className="text-xs">
                    {" "}
                    Matches who joined within the last 30 days
                  </p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i class="ri-eye-line text-black text-lg "></i>

                <div className="space-y-1">
                  <p className="font-semibold ">Nearby matches</p>
                  <p className="text-xs">Matches near your location</p>
                </div>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">Based on profile details</p>
          <div className="space-y-3">
            {profileMatchOptions.map((item, idx) => (
              <div className="space-y-2">
                <div key={idx} className="flex justify-between cursor-pointer">
                  <div className="flex gap-2">
                    <i className={`${item.icon} text-lg text-black`}></i>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-gray-500 text-sm">{item.subtitle}</p>
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
          <p className=" font-semibold mb-2 text-lg">
            Members who are looking for <br /> someone like you
          </p>
          <div className="space-y-5">
            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i className="ri-heart-2-fill text-black text-lg"></i>
                <div className="space-y-1">
                  <p className="font-semibold ">Mutual matches</p>
                  <p className="text-xs">
                    {" "}
                    Matches choose profiles that match your preference and vice
                    versa
                  </p>
                </div>{" "}
                <i className="ri-arrow-right-s-line text-black text-lg"></i>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2 ">
                <i class="ri-equalizer-line text-black text-lg "></i>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Looking for you</p>
                  <p className="text-xs">
                    {" "}
                    Matches whose preference matches your profile
                  </p>
                </div>{" "}
                <i className="ri-arrow-right-s-line text-black text-lg"></i>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg font-semibold mb-2">
            Matches based on preference
          </p>
          <div className="space-y-5">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <i className="ri-graduation-cap-line text-black text-lg"></i>
                <div className="space-y-1">
                  <p className="font-semibold text-sm">
                    Educational preference
                  </p>
                  <p className="text-xs">
                    {" "}
                    Matches based on your preferred education
                  </p>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>

            <div className="flex justify-between">
              <div className="flex gap-2">
                <i className="ri-briefcase-line text-black text-lg"></i>{" "}
                <div className="space-y-1">
                  <p className="font-semibold text-sm">Profession preference</p>
                  <p className="text-xs">
                    {" "}
                    Matches based on your preferred profession
                  </p>
                </div>
              </div>
              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>

            <div className="flex gap-2">
              <i className="ri-map-pin-line text-black text-lg"></i>

              <div className="space-y-2">
                <p className="font-semibold text-sm">
                  City/Location preference
                </p>
                <p className="text-xs">
                  {" "}
                  Matches based on your preferred city/location
                </p>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold mb-2">Others matches</p>
          <div className="space-y-5">
            <div className="flex gap-2">
              <i className="ri-graduation-cap-line text-black text-lg"></i>

              <div className="space-y-2">
                <p className="font-semibold text-sm">Assisted matches</p>
                <p className="text-xs">
                  {" "}
                  Matches based on your preferred education
                </p>
              </div>

              <i className="ri-arrow-right-s-line text-black text-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
