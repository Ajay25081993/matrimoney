import React, { useEffect, useState } from "react";
import axios from "axios";

const EditLocationInfo = ({ userData, userInfo, onSave, onCancel, isEditing }) => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [locationInfo, setLocationInfo] = useState({
    state: userData.state || "",
    city: userInfo.city || "",
    ancestralOrigin: "",
  });

  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    if (locationInfo.state) fetchCities(locationInfo.state);
  }, [locationInfo.state]);

  const fetchStates = async () => {
    try {
      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/states",
        { country: "India" }
      );
      setStates(res.data.data.states.map((state) => state.name));
    } catch (error) {
      console.error("Failed to fetch states:", error);
    }
  };

  const fetchCities = async (stateName) => {
    try {
      const res = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/state/cities",
        { country: "India", state: stateName }
      );
      setCities(res.data.data);
    } catch (error) {
      console.error("Failed to fetch cities:", error);
    }
  };

  const handleSave = () => {
    console.log("Location Info",locationInfo);
  };

  const handleChange = (field, value) => {
    setLocationInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[400px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 translate-y-10"
      }`}
    >
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex items-center gap-2">
          <label className="w-37 text-gray-500">Country :</label>
          <p className="text-gray-800">India</p>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-48 text-gray-500">State :</label>
          <select
            value={locationInfo.state}
            onChange={(e) => handleChange("state", e.target.value)}
            className="border border-gray-300 p-1 rounded-sm w-full"
          >
            <option value="">Select State</option>
            {states.map((state, idx) => (
              <option key={idx} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-48 text-gray-500">City :</label>
          <select
            value={locationInfo.city}
            onChange={(e) => handleChange("city", e.target.value)}
            className="border border-gray-300 p-1 rounded-sm w-full"
          >
            <option value="">Select City</option>
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="w-48 text-gray-500">Ancestral Origin :</label>
          <input
            type="text"
            value={locationInfo.ancestralOrigin}
            onChange={(e) =>
              handleChange("ancestralOrigin", e.target.value)
            }
            className="border border-gray-300 p-1 rounded-sm w-full"
            placeholder="Enter Ancestral Origin"
          />
        </div>

        <div className="flex items-center gap-2">
          <label className="w-37 text-gray-500">Citizenship :</label>
          <p className="text-gray-800">Indian</p>
        </div>

        {/* Bottom-right Save & Cancel */}
        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={handleSave}
            className="bg-amber-500 text-white px-3 py-1 rounded-sm text-sm cursor-pointer"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="border border-gray-300 text-gray-800 px-3 py-1 rounded-sm text-sm cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditLocationInfo;
