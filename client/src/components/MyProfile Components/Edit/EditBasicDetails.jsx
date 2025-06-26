import React, { useEffect, useState } from "react";
import { calculateAge } from "../ageCalculate";
import { options } from "../../../pages/Register/options";
import { heights } from "../../CreateProfile/heights";
import { weights } from "../../CreateProfile/weights";
import { maritalStatus } from "../../CreateProfile/maritalStatus";
import { languages } from "../../CreateProfile/language";

const EditBasicDetails = ({ userData, userInfo, isEditing, setIsEditing }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    createdFor: "",
    height: "",
    weight: "",
    maritalStatus: "",
    bodyType: "",
    diet: "",
    drinkingHabit: "",
    smokingHabit: "",
    motherTongue: "",
    physicalStatus: "",
  });

  useEffect(() => {
    if (userData && userInfo) {
      setFormData({
        name: `${userData.firstName} ${userData.lastName}`,
        age: calculateAge(userData.dob),
        createdFor: userData.createdFor || "",
        height: userInfo.height || "",
        weight: userInfo.weight || "",
        maritalStatus: userInfo.maritalStatus || "",
        bodyType: userInfo.bodyType || "",
        diet: "",
        drinkingHabit: "",
        smokingHabit: "",
        motherTongue: "",
        physicalStatus: "",
      });
    }
  }, [userData, userInfo]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Basic Details:", formData);

    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const FieldRow = ({ label, children }) => (
    <div className="flex items-center mb-3">
      <label className="w-48 text-gray-700 font-medium">{label}</label>
      <div className="flex-1">{children}</div>
    </div>
  );

  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[1000px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 translate-y-20"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <p className="text-xl font-normal text-gray-500">Basic Details</p>
        <button
          className="bg-blue-500 text-white px-2 py-0.5 text-sm rounded-sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          <i className="ri-close-line"></i> Close
        </button>
      </div>

      <div className="mt-4">
        <FieldRow label="Profile Created For :">
          <select
            value={formData.createdFor}
            onChange={(e) => handleChange("createdFor", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          >
            {" "}
            <option value="">Select</option>
            {options.map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </FieldRow>

        <FieldRow label="Name :">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          />
        </FieldRow>

        <FieldRow label="Age :">
          <input
            type="number"
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          />
        </FieldRow>

        <FieldRow label="Height :">
          <select
            value={formData.height}
            onChange={(e) => handleChange("height", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          >
            <option value="">Select</option>
            {heights.slice(1).map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </FieldRow>

        <FieldRow label="Weight (kg) :">
          <select
            value={formData.weight}
            onChange={(e) => handleChange("weight", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          >
            <option value="">Select</option>
            {weights.slice(1).map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </FieldRow>

        <FieldRow label="Marital Status :">
          <select
            value={formData.maritalStatus}
            onChange={(e) => handleChange("maritalStatus", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          >
            <option value="">Select</option>
            {maritalStatus.slice(1).map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </FieldRow>

        <FieldRow label="Body Type :">
          <div className="flex space-x-4">
            {["Slim", "Athletic", "Average", "Heavy"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="bodyType"
                  value={type}
                  checked={formData.bodyType === type}
                  onChange={() => handleChange("bodyType", type)}
                />{" "}
                {type}
              </label>
            ))}
          </div>
        </FieldRow>

        <FieldRow label="Physical Status :">
          <div className="flex space-x-4">
            {["Normal", "Physically Challenged"].map((status) => (
              <label key={status}>
                <input
                  type="radio"
                  name="physicalStatus"
                  value={status}
                  checked={formData.physicalStatus === status}
                  onChange={() => handleChange("physicalStatus", status)}
                />{" "}
                {status}
              </label>
            ))}
          </div>
        </FieldRow>

        <FieldRow label="Mother Tongue :">
          <select
            value={formData.motherTongue}
            onChange={(e) => handleChange("motherTongue", e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-sm outline-none"
          >
            <option value="">Select</option>
            {languages.map((option) => {
              return <option value={option.title}>{option.title}</option>;
            })}
          </select>
        </FieldRow>

        <FieldRow label="Eating Habits :">
          <div className="flex space-x-4">
            {["Vegetarian", "Non-Vegetarian", "Occasionally Non-Veg"].map(
              (habit) => (
                <label key={habit}>
                  <input
                    type="radio"
                    name="diet"
                    value={habit}
                    checked={formData.diet === habit}
                    onChange={() => handleChange("diet", habit)}
                  />{" "}
                  {habit}
                </label>
              )
            )}
          </div>
        </FieldRow>

        <FieldRow label="Drinking Habits :">
          <div className="flex space-x-4">
            {["Yes", "No", "Occasionally"].map((habit) => (
              <label key={habit}>
                <input
                  type="radio"
                  name="drinkingHabit"
                  value={habit}
                  checked={formData.drinkingHabit === habit}
                  onChange={() => handleChange("drinkingHabit", habit)}
                />{" "}
                {habit}
              </label>
            ))}
          </div>
        </FieldRow>

        <FieldRow label="Smoking Habits :">
          <div className="flex space-x-4">
            {["Yes", "No", "Occasionally"].map((habit) => (
              <label key={habit}>
                <input
                  type="radio"
                  name="smokingHabit"
                  value={habit}
                  checked={formData.smokingHabit === habit}
                  onChange={() => handleChange("smokingHabit", habit)}
                />{" "}
                {habit}
              </label>
            ))}
          </div>
        </FieldRow>

        {/* Save & Cancel Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handleSave}
            className="bg-amber-500 text-white px-4 py-1 rounded-sm cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="border border-gray-300 text-gray-800 px-4 py-1 rounded-sm cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBasicDetails;
