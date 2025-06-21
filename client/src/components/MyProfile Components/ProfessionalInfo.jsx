// import React from "react";

// const ProfessionalInfo = ({userInfo }) => {
//   return (
//     <div className="profileComponent">
//       <div className="flex w-full justify-between items-center">
//         <p className="text-xl font-normal text-gray-400">
//           Professional Information{" "}
//         </p>
//         <button className="bg-blue-500 text-white px-1 text-sm rounded-sm cursor-pointer">
//           <span>
//             <i class="ri-pencil-fill"></i>
//           </span>{" "}
//           Edit
//         </button>
//       </div>

//       <div className="flex w-full gap-10 ">
//         <div className="space-y-0.5">
//           <p className="py-1">Education</p>
//           <p className="py-1">Education in detail</p>
//           <p className="py-1">College / Institution</p>
//           <p className="py-1">Employed in</p>
//           <p className="py-1">Occupation</p>
//         </div>
//         <div className="space-y-0.5">
//           <p className="py-1">: {userInfo.qualification}</p>
//           <p className="py-1">: Not Specified</p>
//           <p className="py-1">: {userInfo.college}</p>
//           <p className="py-1">: {userInfo.company}</p>
//           <p className="py-1">: {userInfo.workAs}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalInfo;

import React, { useState } from "react";
import EditProfessionalInfo from "./Edit/EditProfessionalInfo";

const ProfessionalInfo = ({ userInfo, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    qualification: userInfo.qualification || "",
    educationDetail: userInfo.educationDetail || "",
    college: userInfo.college || "",
    company: userInfo.company || "",
    workAs: userInfo.workAs || "",
    employedIn: userInfo.company ? "Yes" : "No",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    setFormData({
      qualification: userInfo.qualification || "",
      educationDetail: userInfo.educationDetail || "",
      college: userInfo.college || "",
      company: userInfo.company || "",
      workAs: userInfo.workAs || "",
      employedIn: userInfo.company ? "Yes" : "No",
    });
    setIsEditing(false);
  };

  return (
    <div className="profileComponent !gap-1">
      {/* Static View */}
      <div className="flex w-full justify-between items-center">
        <p className="text-xl font-normal text-gray-400">
          Professional Information
        </p>
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
      
      <div
        className={` transition-all duration-1000 overflow-hidden ${
          isEditing ? "opacity-0 translate-y-20" : "opacity-100 translate-y-0"
        }`}
      >
        {!isEditing && (
          <>
            <div className="flex w-full gap-10 mt-2">
              <div className="space-y-0.5">
                <p className="py-1">Education</p>
                <p className="py-1">Education in detail</p>
                <p className="py-1">College / Institution</p>
                <p className="py-1">Employed in</p>
                <p className="py-1">Occupation</p>
              </div>
              <div className="space-y-0.5">
                <p className="py-1">: {userInfo.qualification}</p>
                <p className="py-1">
                  : {userInfo.educationDetail || "Not Specified"}
                </p>
                <p className="py-1">: {userInfo.college}</p>
                <p className="py-1">: {userInfo.workWith}</p>
                <p className="py-1">: {userInfo.workAs}</p>
              </div>
            </div>
          </>
        )}
      </div>
      {/* Editable Form View */}
      <EditProfessionalInfo
        handleChange={handleChange}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        formData={formData}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ProfessionalInfo;
