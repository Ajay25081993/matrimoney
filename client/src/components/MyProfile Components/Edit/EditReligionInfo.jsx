import React, { useEffect, useState } from "react";
import TimePicker from "./TimePicker";
import { subCommunity } from "../../CreateProfile/subCommunity";
import axios from "axios";

const EditReligionInfo = ({
  handleCancel,
  isEditing,
  formData,
  setFormData,
  setIsEditing,
}) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/states",
          {
            country: "India",
          }
        );
        const stateNames = res.data.data.states.map((s) => s.name);
        setStates(stateNames);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    const fetchCities = async () => {
      try {
        if (formData.birthPlace.birthState) {
          const res = await axios.post(
            "https://countriesnow.space/api/v0.1/countries/state/cities",
            {
              country: "India",
              state: formData.birthPlace.birthState,
            }
          );
          setCities(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [formData.birthPlace.birthState]);

  const handlePlaceChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      birthPlace: {
        ...prev.birthPlace, // ← always spread birthPlace object
        [field]: value,
      },
    }));

    // Optionally reset cities if birthState changes
    if (field === "birthState") {
      setCities([]); // if you have a cities state to reset
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Religional info:", formData);
    setIsEditing(false);
  };

  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[1000px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 translate-y-20"
      }`}
    >
      <div className="space-y-4 ">
        {/* Religion */}
        <div className="flex items-center gap-4">
          <label className="w-40 text-gray-600">Religion :</label>
          <select
            value={formData.religion}
            onChange={(e) => handleChange("religion", e.target.value)}
            className="border outline-0 border-gray-300 p-2 rounded-sm w-full"
          >
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Caste */}
        <div className="flex items-center gap-4 mb-3">
          <label className="w-40 text-gray-600">Caste :</label>
          <select
            value={formData.subCommunity}
            onChange={(e) => handleChange("subCommunity", e.target.value)}
            className="border border-gray-300 outline-none p-2 rounded-sm w-full"
          >
            <option value="">Select Caste</option>
            {subCommunity.slice(1).map((option) => {
              return <option value={option}>{option}</option>;
            })}
          </select>
        </div>

        {/* Gothra */}
        <div className="flex items-center gap-4">
          <label className="w-40 text-gray-600">Gothra :</label>
          <input
            type="text"
            value={formData.gothra}
            onChange={(e) => handleChange("gothra", e.target.value)}
            className="border outline-0 border-gray-300 p-2 rounded-sm w-full"
          />
        </div>

        {/* Star / Rassi */}
        <div className="flex items-center gap-4">
          <label className="w-40 text-gray-600">Star / Rassi :</label>
          <select
            value={formData.rassi}
            onChange={(e) => handleChange("rassi", e.target.value)}
            className="border outline-0 border-gray-300 p-2 rounded-sm w-full"
          >
            <option value="">Select Rassi</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            {/* Add other options */}
          </select>
        </div>

        {/* Dosh */}
        <div className="flex items-center gap-4">
          <label className="w-32 text-gray-600">Dosh :</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="dosh"
                value="Yes"
                checked={formData.dosh === "Yes"}
                onChange={(e) => handleChange("dosh", e.target.value)}
              />
              Yes
            </label>
            <label className="flex items-center gap-1">
              <input
                type="radio"
                name="dosh"
                value="No"
                checked={formData.dosh === "No"}
                onChange={(e) => handleChange("dosh", e.target.value)}
              />
              No
            </label>
          </div>
        </div>

        {/* Time of Birth */}
        {/* <div className="flex items-center gap-4">
          <label className="w-40 text-gray-600">Time of Birth :</label>
          <input
            type="text"
            placeholder="HH:MM AM/PM"
            value={formData.birthTime}
            onChange={(e) => handleChange("birthTime", e.target.value)}
            className="border border-gray-300 p-2 rounded-sm w-full"
          />
        </div> */}
        <div className="flex items-center gap-4">
          <label className="text-gray-600 w-32">Time: </label>
          <TimePicker
            birthTime={formData.birthTime}
            setFormData={setFormData}
          />
        </div>

        {/* Place of Birth */}
        <div className="flex items-center gap-4 mb-3">
          <label className="w-40 text-gray-600">Place of Birth :</label>

          <div className="flex gap-2 w-full">
            <select
              value={formData.birthPlace.birthState}
              onChange={(e) => handlePlaceChange("birthState", e.target.value)}
              className="border border-gray-300 outline-none p-2 rounded-sm w-1/2"
            >
              <option value="">Select State</option>
              {states.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
              {/* add other states dynamically if needed */}
            </select>

            <select
              value={formData.birthPlace.birthCity}
              onChange={(e) => handlePlaceChange("birthCity", e.target.value)}
              className="border border-gray-300 outline-none p-2 rounded-sm w-1/2"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
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
  );
};

export default EditReligionInfo;
