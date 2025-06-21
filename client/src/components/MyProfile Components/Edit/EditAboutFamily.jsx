import React, { useState } from "react";

const EditAboutFamily = ({ initialValue, onSave, onCancel,isEditing }) => {
  const [about, setAbout] = useState(initialValue);

  const handleSave = () => {
    onSave(about);
  };

  const handleCancel = () => {
    setAbout(initialValue); // Reset to original value on cancel
    onCancel();
  };

  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[200px]  opacity-100 translate-y-0"
          : "max-h-0 opacity-0 translate-y-20"
      }`}
    >
      <div
        className={`transition-all duration-1000 overflow-hidden max-h-[500px] opacity-100 translate-y-0`}
      >
        <div className="mt-4 flex flex-col gap-3">
          <textarea
            rows="5"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="border border-gray-300 rounded-sm resize-none p-2 w-full outline-0 text-sm"
            placeholder="Write about your family..."
          ></textarea>

          <div className="flex justify-end gap-2">
            <button
              onClick={handleSave}
              className="bg-amber-500 text-white px-4 py-1 rounded-sm text-sm cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="border border-gray-300 text-gray-800 px-4 py-1 rounded-sm text-sm cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAboutFamily;
