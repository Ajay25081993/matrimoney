import axios from "axios";
import React, { useEffect, useState } from "react";

const EditFamilyInfo = ({ userInfo, onSave, onCancel, isEditing }) => {
  const [formData, setFormData] = useState({
    familyType: "",
    familyValue: "",
    familyStatus: "",
    fatherOccupation: "",
    motherOccupation: "",
    noOfBrother: userInfo.noOfBrother || 0,
    brothersMarried: "",
    noOfSister: userInfo.noOfSister || 0,
    sistersMarried: "",
    familyLocation: "Same as Candidate",
    state: "",
    city: "",
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // Fetch states for India on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/states",
          { country: "India" }
        );
        setStates(response.data.data.states.map((s) => s.name));
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) {
        setCities([]);
        return;
      }
      try {
        const response = await axios.post(
          "https://countriesnow.space/api/v0.1/countries/state/cities",
          {
            country: "India",
            state: formData.state,
          }
        );
        setCities(response.data.data);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, [formData.state]);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
   console.log("Family info",formData);
  };

  return (
    <div
      className={`transition-all duration-1000 overflow-hidden ${
        isEditing
          ? "max-h-[1000px] opacity-100 translate-y-0"
          : "max-h-0 opacity-0 translate-y-20"
      }`}
    >
      <div className="flex flex-col gap-3 mt-4">
        {/* Family Type */}
        <div className="flex items-center gap-2">
          <label className="w-41 text-gray-500">Family Type :</label>
          <div className="flex gap-4">
            {["Joint", "Nuclear"].map((type) => (
              <label key={type}>
                <input
                  type="radio"
                  name="familyType"
                  value={type}
                  checked={formData.familyType === type}
                  onChange={() => handleChange("familyType", type)}
                />{" "}
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Family Value */}
        <div className="flex items-center gap-2">
          <label className="w-41 text-gray-500">Family Value :</label>
          <div className="flex gap-4">
            {["Traditional", "Moderate"].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="familyValue"
                  value={value}
                  checked={formData.familyValue === value}
                  onChange={() => handleChange("familyValue", value)}
                />{" "}
                {value}
              </label>
            ))}
          </div>
        </div>

        {/* Family Status */}
        <div className="flex items-center gap-2">
          <label className="w-41 text-gray-500">Family Status :</label>
          <div className="flex gap-4">
            {["Middle Class", "Upper Middle"].map((status) => (
              <label key={status}>
                <input
                  type="radio"
                  name="familyStatus"
                  value={status}
                  checked={formData.familyStatus === status}
                  onChange={() => handleChange("familyStatus", status)}
                />{" "}
                {status}
              </label>
            ))}
          </div>
        </div>

        {/* Father's Occupation */}
        <div className="flex items-center gap-2">
          <label className="w-55 text-gray-500">Father's Occupation :</label>
          <select
            value={formData.fatherOccupation}
            onChange={(e) => handleChange("fatherOccupation", e.target.value)}
            className="border border-gray-300 p-1 rounded-sm w-full outline-0"
          >
            <option value="">Select</option>
            <option value="Business">Business</option>
            <option value="Service">Service</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        {/* Mother's Occupation */}
        <div className="flex items-center gap-2">
          <label className="w-55 text-gray-500">Mother's Occupation :</label>
          <select
            value={formData.motherOccupation}
            onChange={(e) => handleChange("motherOccupation", e.target.value)}
            className="border border-gray-300 p-1 rounded-sm w-full outline-0"
          >
            <option value="">Select</option>
            <option value="Homemaker">Homemaker</option>
            <option value="Service">Service</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="flex  space-x-8">
          {/* No. of Brothers */}
          <div className=" w-40">
            <label className=" text-gray-500">No. of Brothers :</label>
            <input
              type="number"
              value={formData.noOfBrother}
              onChange={( e) => handleChange("noOfBrother", e.target.value)}
              className="mt-1 border border-gray-300 p-1 w-40 rounded-sm  outline-0"
            />
          </div>

          {/* Brothers Married */}
          <div className=" w-40">
            <label className=" text-gray-500">Brothers Married :</label>
            <select
              value={formData.brothersMarried}
              onChange={(e) => handleChange("brothersMarried", e.target.value)}
              className="mt-1  border border-gray-300 p-1 rounded-sm w-40 outline-0"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* No. of Sisters */}
          <div className=" w-40">
            <label className=" text-gray-500">No. of Sisters :</label>
            <input
              type="number"
              value={formData.noOfSister}
              onChange={(e) => handleChange("noOfSister", e.target.value)}
              className="mt-1  border border-gray-300 p-1 rounded-sm w-40 outline-0"
            />
          </div>

          {/* Sisters Married */}
          <div className=" w-40">
            <label className=" text-gray-500">Sisters Married :</label>
            <select
              value={formData.sistersMarried}
              onChange={(e) => handleChange("sistersMarried", e.target.value)}
              className="mt-1  border border-gray-300 p-1 rounded-sm w-40 outline-0"
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        {/* Family Location */}
    
        <div className="flex items-center gap-2">
          <label className="w-48 text-gray-500">Family Location :</label>
          <div className="flex gap-4">
            {["Same as Candidate", "Different Location"].map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  name="familyLocation"
                  value={option}
                  checked={formData.familyLocation === option}
                  onChange={(e) =>
                    handleChange("familyLocation", e.target.value)
                  }
                />{" "}
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* If Different Location — show State & City */}
        {formData.familyLocation === "Different Location" && (
          <>
            <div className="flex items-center gap-2">
              <label className="w-48 text-gray-500">State :</label>
              <select
                value={formData.state}
                onChange={(e) => {
                  handleChange("state", e.target.value);
                  handleChange("city", ""); // Reset city on state change
                }}
                className="border border-gray-300 p-1 rounded-sm w-full outline-0"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="w-48 text-gray-500">City :</label>
              <select
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                className="border border-gray-300 p-1 rounded-sm w-full outline-0"
                disabled={!formData.state}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {/* Save / Cancel */}
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

export default EditFamilyInfo;
