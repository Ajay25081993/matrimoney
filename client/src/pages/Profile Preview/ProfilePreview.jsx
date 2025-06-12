import React from "react";
import Header from "../../components/Header/Header4";
import dp from "../../assets/Dp.png";
import user from "../../assets/user.png";
import phone from "../../assets/phone.png";
import family from "../../assets/familyIcon.png";
import lifestyle from "../../assets/lifestyle.png";
import design from "../../assets/design.svg";
const ProfilePreview = () => {
  return (
    <div className="bg-gray-100  w-full ">
      <Header />

      <div className="flex flex-col gap-10 px-65 pt-25 w-full">
        <div className="w-5xl p-5 rounded-xl shadow-md shadow-gray-400 flex gap-5">
          <img src={dp} alt="" className="w-80 h-80 rounded-xl" />

          <div className="space-y-6 mt-12">
            <div className="flex flex-col gap-1">
              <p className="text-lg font-semibold">Rudradeb Maji</p>
              <div className="flex items-center  gap-2">
                <p>B6256693</p>
                <span>|</span>
                <div className="flex items-center gap-1">
                  <span className="text-green-400 text-xl">●</span>
                  <span>Online</span>
                </div>
              </div>
            </div>

            <ul className="flex flex-wrap gap-2 ">
              <li>Never Married</li>
              <span className="text-gray-300">■</span>
              <li>Profile created by self</li>{" "}
              <span className="text-gray-300">■</span>
              <li>22 yrs</li> <span className="text-gray-300">■</span>
              <li>5'8"</li> <span className="text-gray-300">■</span>
              <li>Mahishya</li> <span className="text-gray-300">■</span>
              <li>BCA</li> <span className="text-gray-300">■</span>
              <li>Not Working</li> <span className="text-gray-300">■</span>
              <li>Kolkata</li>
            </ul>
          </div>
        </div>

        <div className="w-4xl border-1 border-gray-300 rounded-xl p-5 space-y-4">
          {/* Personal Information */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <img src={user} alt="" className="w-10" />
            <p>Personal Information</p>
          </div>
          <div className="flex gap-15 px-4">
            <div className="font-light">
              <div>Age</div>
              <div> Height</div>
              <div>Spoken Languages </div>
              <div>Profile Created By</div>
              <div>Marital Status</div>
              <div>Lives In</div>
              <div>Religion</div>
              <div>Caste</div>
              <div>Date Of Birth</div>
              <div>Horoscope</div>
              <div>Employment</div>
              <div>Education</div>
              <div>Occupation</div>
            </div>

            <div className="font-semibold">
              <div>: 22 Years</div>
              <div>: 5'8"</div>
              <div>: Bengali (Mother Tongue)</div>
              <div>: Self</div>
              <div>: Never Married</div>
              <div>: Kolkata, West Bengal</div>
              <div>: Hindu</div>
              <div>: Mahishya</div>
              <div>: 19 May 2003</div>
              <div>: Send Request</div>
              <div>: Currently Not Working</div>
              <div>: BCA</div>
              <div>: Not Working</div>
            </div>
          </div>
          {/* Family Information */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <img src={family} alt="" className="w-10" />
            <p>Family Information</p>
          </div>{" "}
          <div className="flex gap-20 px-4">
            <div className="font-light">
              <div>Parents</div>
              <div>Ancestral Origin</div>
            </div>

            <div className="font-semibold">
              <div>: Father is a Bussiness Man, Mother is a Home Maker</div>
              <div>: Not specified</div>
            </div>
          </div>
          {/* Contact Information */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <img src={phone} alt="" className="w-10" />
            <p>Contact Information</p>
          </div>
          <div className="flex gap-20 px-4">
            <div className="font-light">
              <div>Mobile Number</div>
            </div>

            <div className="font-semibold">
              <div>: 9876543210</div>
            </div>
          </div>
          {/* About Myself */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <img src={user} alt="" className="w-10" />
            <p>About Myself</p>
          </div>
          <div className="flex flex-col gap-2 px-4">
            <h2 className="text-xl font-semibold">About Poulami Mondal</h2>
            <p>
              I have done my bachelor's degree and am searching for a suitable
              job. I come from a middle class, joint family with traditional
              values, currently settled in Kolkata.
            </p>
          </div>
          {/* Lifestyle */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <img src={lifestyle} alt="" className="w-10" />
            <p>Lifestyle</p>
          </div>
          <div className="flex gap-20 px-4">
            <div className="font-light">
              <div>Smoking Habits</div>
              <div>Drinking Habits</div>
            </div>
            <div className="font-semibold">
              <div>: Doesn't Smoke</div>
              <div>: Doesn't Drink</div>
            </div>
          </div>
          {/* Partner Preferences */}
          {/* Basic Preferences */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <p>Basic Preferences</p>
          </div>
          <div className="flex gap-10 px-4">
            <div className="font-light">
              <div>Preferred Bride's Age</div>
              <div>Preferred Height</div>
              <div>Preferred Marital Status</div>
              <div>Preferred Mother Tongue</div>
              <div>Preferred Physical Status</div>
              <div>Preferred Eating Habits</div>
              <div>Preferred Smoking Habits</div>
              <div>Preferred Drinking Habits</div>
            </div>
            <div className="font-semibold">
              <div>: 18-22 yrs</div>
              <div>: 4'8" - 5'8"</div>
              <div>: Never Married</div>
              <div>: Bengali</div>
              <div>: Normal </div>
              <div>: Doesn't Matter</div>
              <div>: Doesn't Matter</div>
              <div>: Doesn't Matter</div>
            </div>
          </div>
          {/* Religious Preferences */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <p>Religious Preferences</p>
          </div>
          <div className="flex gap-15 px-4">
            <div className="font-light">
              <div>Preferred Religion</div>
              <div>Preferred Caste</div>
              <div>Preferred Star</div>
              <div>Preferred Dosham</div>
            </div>
            <div className="font-semibold">
              <div>: Hindu</div>
              <div>: Mahishya</div>
              <div>: Any</div>
              <div>: Doesn't Matter</div>
            </div>
          </div>
          {/* Professional Preferences */}
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <p>Professional Preferences</p>
          </div>
          <div className="flex gap-10 px-4">
            <div className="font-light">
              <div>Preferred Education</div>
              <div>Preferred Employment Type</div>
              <div>Preferred Occupation</div>
              <div>Preferred Annual Income</div>
            </div>
            <div className="font-semibold">
              <div>
                : Bachelors - Engineering / Computers / Others,Masters -
                Engin... more
              </div>
              <div>: Any</div>
              <div>: Any</div>
              <div>: Any</div>
            </div>
          </div>
          <div className="flex items-center  gap-2 bg-sky-100 rounded-md px-3 py-2">
            <p>Location Preferences</p>
          </div>
          <div className="flex gap-15 px-4">
            <div className="font-light">
              <div>Preferred Country</div>
              <div>Preferred Residing State</div>
              <div>Preferred Residing City</div>
            </div>
            <div className="font-semibold">
              <div>: India</div>
              <div>: West Bengal</div>
              <div>: Any</div>
            </div>
          </div>
          <div className="flex items-center justify-center  px-3 py-4">
            <img src={design} className="w-500" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePreview;
