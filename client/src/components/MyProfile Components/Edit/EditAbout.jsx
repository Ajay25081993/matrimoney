import React from "react";

const EditAbout = ({ userInfo, isEditing, setIsEditing ,onSave,aboutText, setAboutText}) => {

  const handleSave = () => {
    console.log("About:",aboutText);
    
    setIsEditing(false);
  };

  const handleCancel = () => {
    setAboutText(userInfo.aboutMe);
    setIsEditing(false);
  };
  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[300px] opacity-100 translate-y-0 "
          : "max-h-0 opacity-0 translate-y-20 "
      }`}
    >
      <textarea
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
        className="w-full resize-none border border-gray-300 outline-0 p-2 rounded-sm text-gray-800 mt-2"
        rows="5"
      ></textarea>

      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={handleSave}
          className="bg-amber-500 text-white px-3 py-1 rounded-sm text-sm cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="border border-gray-300 text-gray-800 px-3 py-1 rounded-sm text-sm cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditAbout;
