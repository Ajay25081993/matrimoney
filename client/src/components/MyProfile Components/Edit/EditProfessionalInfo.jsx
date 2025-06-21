import React from "react";
import { professionCategoriesData } from "../../CreateProfile/proffesion";

const EditProfessionalInfo = ({
  formData,
  setIsEditing,
  isEditing,
  handleChange,
  handleCancel,
}) => {
  const handleSave = () => {
    console.log("Professional Info",formData);

    // if (onSave) onSave(formData);
    setIsEditing(false);
  };
  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[400px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col gap-4 mt-4">
        {/* Education */}
        <div className="flex items-center gap-4">
          <label className="w-51 text-gray-600 font-medium">
            Highest Education :
          </label>
          <select
            value={formData.qualification}
            onChange={(e) => handleChange("qualification", e.target.value)}
            className="border border-gray-300 outline-0 rounded-sm px-2 py-1 text-gray-800 w-full"
          >
            <option value="">Select</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Education Detail */}
        <div className="flex items-center gap-4">
          <label className="w-51 text-gray-600 font-medium">
            Education in Detail :
          </label>
          <input
            type="text"
            value={formData.educationDetail}
            onChange={(e) => handleChange("educationDetail", e.target.value)}
            className="border border-gray-300 outline-0 rounded-sm px-2 py-1 text-gray-800 w-full"
            placeholder="Mention specialization"
          />
        </div>

        {/* College */}
        <div className="flex items-center gap-4">
          <label className="w-51 text-gray-600 font-medium">
            College / Institution :
          </label>
          <input
            type="text"
            value={formData.college}
            onChange={(e) => handleChange("college", e.target.value)}
            className="border border-gray-300 outline-0 rounded-sm px-2 py-1 text-gray-800 w-full"
            placeholder="Enter College Name"
          />
        </div>

        {/* Employed In */}
        <div className="flex items-center gap-4">
          <label className="w-39 text-gray-600 font-medium">
            Employed in :
          </label>
          <div className="flex gap-4 text-xs">
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                value="Government/PSU"
                checked={formData.employedIn === "Government/PSU"}
                onChange={(e) => handleChange("employedIn", e.target.value)}
              />
              Government/PSU
            </label>
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                value="Private"
                checked={formData.employedIn === "Private"}
                onChange={(e) => handleChange("employedIn", e.target.value)}
              />
              Private
            </label>
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                value="Business"
                checked={formData.employedIn === "Business"}
                onChange={(e) => handleChange("employedIn", e.target.value)}
              />
              Business
            </label>
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                value="Defence"
                checked={formData.employedIn === "Defence"}
                onChange={(e) => handleChange("employedIn", e.target.value)}
              />
              Defence
            </label>
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                value="Self-working"
                checked={formData.employedIn === "Self-working"}
                onChange={(e) => handleChange("employedIn", e.target.value)}
              />
              Self-working
            </label>
            <label className="flex items-center gap-1 text-gray-700">
              <input
                type="radio"
                value="Not Working"
                checked={formData.employedIn === "Not Working"}
                onChange={(e) => handleChange("employedIn", e.target.value)}
              />
              Not Working
            </label>
          </div>
        </div>

        {/* Occupation */}
        <div className="flex items-center gap-4">
          <label className="w-51 text-gray-600 font-medium">Occupation :</label>
          <select
            value={formData.workAs}
            onChange={(e) => handleChange("workAs", e.target.value)}
            className="border border-gray-300 outline-0 rounded-sm px-2 py-1 text-gray-800 w-full"
          >
            <option value="">Select</option>

            {formData.employedIn === "Not Working" ? (
              <>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
                <option value="Not Working">Not Working</option>
              </>
            ) : (
              professionCategoriesData.map((categoryGroup) => (
                <optgroup
                  key={categoryGroup.category}
                  label={categoryGroup.category}
                >
                  {categoryGroup.professions.map((profession) => (
                    <option key={profession} value={profession}>
                      {profession}
                    </option>
                  ))}
                </optgroup>
              ))
            )}
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={handleSave}
          className="bg-amber-500 text-white px-4 py-1.5 rounded-sm text-sm cursor-pointer"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="border border-gray-300 text-gray-800 px-4 py-1.5 rounded-sm text-sm cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProfessionalInfo;
