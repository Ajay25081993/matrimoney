// import React from "react";

// const ReligionInfo = ({ userData, userInfo }) => {
//   return (
//     <div className="profileComponent">
//       <div className="flex w-full justify-between items-center">
//         <p className="text-xl font-normal text-gray-400">
//           Religion Information{" "}
//         </p>
//         <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
//           <span>
//             <i class="ri-pencil-fill"></i>
//           </span>{" "}
//           Edit
//         </button>
//       </div>

//       <div className="flex w-full gap-20 ">
//         <div className="w-1/2 flex gap-15">
//           <div className="space-y-0.5">
//             <p className="py-1">Religion</p>
//             <p className="py-1">Caste/Sub Caste</p>
//             <p className="py-1">Gothra</p>
//             <p className="py-1">Star/Raasi</p>
//             <p className="py-1">Dosh</p>
//           </div>
//           <div className="space-y-0.5">
//             <p className="py-1">: {userData.religion}</p> <p className="py-1">:  {userInfo.subCommunity}</p>
//             <div className="py-1">
//               :
//               {userInfo.gothra ? (
//                 <span> {userInfo.gothra}</span>
//               ) : (
//                 <span className="text-blue-500 text-center text-sm cursor-pointer">
//                   <span> Add Gothra</span>{" "}
//                   <i className="ri-arrow-right-s-fill "></i>
//                 </span>
//               )}
//             </div>{" "}
//              <div className="py-1">
//               :
//               {userInfo.rassi ? (
//                 <span> {userInfo.rassi}</span>
//               ) : (
//                 <span className="text-blue-500 text-center text-sm cursor-pointer">
//                   <span> Add Rassi</span>{" "}
//                   <i className="ri-arrow-right-s-fill "></i>
//                 </span>
//               )}
//             </div>{" "}
//             <p className="">: Not Specified</p>
//           </div>
//         </div>

//         <div className="w-1/2 flex gap-20">
//           <div className="space-y-0.5">
//             <p className="py-1">Time of Birth</p>
//             <p className="py-1">Place of Birth</p>
//           </div>
//           <div className="space-y-0.5">
//              <div className="py-1">
//               :
//               {userInfo.birthTime ? (
//                 <span> {userInfo.birthTime}</span>
//               ) : (
//                 <span className="text-blue-500 text-center text-sm cursor-pointer">
//                   <span> Add Time</span>{" "}
//                   <i className="ri-arrow-right-s-fill "></i>
//                 </span>
//               )}
//             </div>{" "}
//              <div className="py-1">
//               :
//               {userInfo.birthPlace ? (
//                 <span> {userInfo.birthPlace}</span>
//               ) : (
//                 <span className="text-blue-500 text-center text-sm cursor-pointer">
//                   <span> Add Place</span>{" "}
//                   <i className="ri-arrow-right-s-fill "></i>
//                 </span>
//               )}
//             </div>{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReligionInfo;

import React, { useEffect, useState } from "react";
import EditReligionInfo from "./Edit/EditReligionInfo";

const ReligionInfo = ({ userData, userInfo }) => {
  const [isEditing, setIsEditing] = useState(false);

  // Local form state
  const [formData, setFormData] = useState({
    religion: "",
    subCommunity: "",
    gothra: "",
    rassi: "",
    birthTime: {
      hour: "",
      min: "",
      period: "",
    },
    birthPlace: {
      birthState: "",
      birthCity: "",
    },
    dosh: "",
  });

  useEffect(() => {
    setFormData({
      religion: userData.religion || "",
      subCommunity: userInfo.subCommunity || "",
      gothra: userInfo.gothra || "",
      rassi: userInfo.rassi || "",
      birthTime: userInfo.birthTime || "",
      birthPlace: userInfo.birthPlace || "",
      dosh: "",
    });
  }, [userData, userInfo]);

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profileComponent !gap-2">
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">
          Religion Information
        </p>
        <button
          className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? (
            <span>
              {" "}
              <i className="ri-close-line"></i> Close
            </span>
          ) : (
            <span>
              <i className="ri-pencil-fill"></i> Edit
            </span>
          )}
        </button>
      </div>

      <div
        className={` transition-all duration-1000 overflow-hidden ${
          isEditing ? "opacity-0 translate-y-20" : "opacity-100 translate-y-0"
        }`}
      >
        {!isEditing && (
          <div className="flex w-full gap-20 ">
            <div className="w-1/2 flex gap-15">
              <div className="space-y-0.5">
                <p className="py-1">Religion</p>
                <p className="py-1">Caste/Sub Caste</p>
                <p className="py-1">Gothra</p>
                <p className="py-1">Star/Raasi</p>
                <p className="py-1">Dosh</p>
              </div>
              <div className="space-y-0.5">
                <p className="py-1">: {userData.religion}</p>{" "}
                <p className="py-1">: {userInfo.subCommunity}</p>
                <div className="py-1">
                  :
                  {userInfo.gothra ? (
                    <span> {userInfo.gothra}</span>
                  ) : (
                    <span className="text-blue-500 text-center text-sm cursor-pointer">
                      <span> Add Gothra</span>{" "}
                      <i className="ri-arrow-right-s-fill "></i>
                    </span>
                  )}
                </div>{" "}
                <div className="py-1">
                  :
                  {userInfo.rassi ? (
                    <span> {userInfo.rassi}</span>
                  ) : (
                    <span className="text-blue-500 text-center text-sm cursor-pointer">
                      <span> Add Rassi</span>{" "}
                      <i className="ri-arrow-right-s-fill "></i>
                    </span>
                  )}
                </div>{" "}
                <p className="">: Not Specified</p>
              </div>
            </div>

            <div className="w-1/2 flex gap-20">
              <div className="space-y-0.5">
                <p className="py-1">Time of Birth</p>
                <p className="py-1">Place of Birth</p>
              </div>
              <div className="space-y-0.5">
                <div className="py-1">
                  :
                  {userInfo.birthTime ? (
                    <span> {userInfo.birthTime}</span>
                  ) : (
                    <span className="text-blue-500 text-center text-sm cursor-pointer">
                      <span> Add Time</span>{" "}
                      <i className="ri-arrow-right-s-fill "></i>
                    </span>
                  )}
                </div>{" "}
                <div className="py-1">
                  :
                  {userInfo.birthPlace ? (
                    <span> {userInfo.birthPlace}</span>
                  ) : (
                    <span className="text-blue-500 text-center text-sm cursor-pointer">
                      <span> Add Place</span>{" "}
                      <i className="ri-arrow-right-s-fill "></i>
                    </span>
                  )}
                </div>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Form Transition */}
      <EditReligionInfo
        handleCancel={handleCancel}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default ReligionInfo;
