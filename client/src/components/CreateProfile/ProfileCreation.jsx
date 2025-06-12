import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { heights } from "./heights";
import { subCommunity } from "./subCommunity";
import { diet } from "./diet";
import { maritalStatus } from "./maritalStatus";
import { children } from "./Children";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileCreation = () => {
  const [formData, setFormData] = useState({
    city: "",
    liveWithFamily: "",
    maritalStatus: "",
    hasChildren: "",
    diet: "",
    height: "",
    subCommunity: "",
    casteNoBar: false,
  });
  const navigateTo = useNavigate();
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const { city, liveWithFamily, maritalStatus, diet, height, subCommunity } =
      formData;
    if (
      city &&
      liveWithFamily &&
      maritalStatus &&
      diet &&
      height &&
      subCommunity
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const onNext = () => {
    console.log("Profile Data Submitted:", formData);

    navigateTo(`/profile-creation/step/2`);
    // API call or navigation here
  };

  const showError = (field) => !formData[field] && touched[field];

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-4 flex-col p-5">
        <p className="text-2xl">Let's create your profile now</p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
            "& .MuiInputLabel-root": { fontSize: "16px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex justify-center items-center flex-col gap-5">
            {/* City */}
            <TextField
              error={showError("city")}
              required
              label="City you live in?"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, city: true }))}
              variant="standard"
              helperText={showError("city") ? "Please enter your city" : ""}
            />

            {/* Live with Family */}
            <div className="w-full flex flex-col gap-1 px-2">
              <p>You live with your family?*</p>
              <div className="flex flex-wrap gap-2 w-1/2">
                {["Yes", "No"].map((option) => (
                  <div
                    key={option}
                    onClick={() => handleChange("liveWithFamily", option)}
                    className={`hover:bg-gray-200 cursor-pointer px-2 py-1 flex justify-center items-center h-8 border-1 rounded-full border-gray-300 ${
                      formData.liveWithFamily === option ? "bg-gray-400" : ""
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
              {showError("liveWithFamily") && (
                <p className="text-red-500 text-sm">Please select an option</p>
              )}
            </div>

            {/* Marital Status */}
            <TextField
              error={showError("maritalStatus")}
              select
              required
              label="Your marital status"
              value={formData.maritalStatus}
              onChange={(e) => handleChange("maritalStatus", e.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, maritalStatus: true }))
              }
              slotProps={{ select: { native: true } }}
              variant="standard"
              helperText={
                showError("maritalStatus") ? "Please select an option" : ""
              }
            >
              {maritalStatus.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            {/* Children if applicable */}
            {formData.maritalStatus !== "Never married" &&
              formData.maritalStatus !== "Select" &&
              formData.maritalStatus && (
                <div className="flex flex-col w-full px-2 gap-1">
                  <p>Do you have any children?*</p>
                  <div className="flex flex-wrap gap-2 w-80">
                    {children.map((type, index) => (
                      <div
                        key={index}
                        onClick={() => handleChange("hasChildren", type)}
                        className={`hover:bg-gray-200 cursor-pointer px-2 py-1 flex justify-center items-center h-8 border-1 rounded-full border-gray-300 ${
                          formData.hasChildren === type ? "bg-gray-400" : ""
                        }`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                  {showError("hasChildren") && (
                    <p className="text-red-500 text-sm">
                      Please select an option
                    </p>
                  )}
                </div>
              )}

            {/* Diet */}
            <div className="flex flex-col w-full px-2 gap-1">
              <p>Your diet*</p>
              <div className="flex flex-wrap gap-2 w-80">
                {diet.map((type, index) => (
                  <div
                    key={index}
                    onClick={() => handleChange("diet", type)}
                    className={`hover:bg-gray-200 cursor-pointer px-2 py-1 flex justify-center items-center h-8 border-1 rounded-full border-gray-300 ${
                      formData.diet === type ? "bg-gray-400" : ""
                    }`}
                  >
                    {type}
                  </div>
                ))}
              </div>
              {showError("diet") && (
                <p className="text-red-500 text-sm">Please select an option</p>
              )}
            </div>

            {/* Height */}
            <TextField
              error={showError("height")}
              select
              required
              label="Your height"
              value={formData.height}
              onChange={(e) => handleChange("height", e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, height: true }))}
              slotProps={{ select: { native: true } }}
              variant="standard"
              helperText={
                showError("height") ? "Please select your height" : ""
              }
            >
              {heights.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>

            {/* Sub-Community */}
            <TextField
              error={showError("subCommunity")}
              select
              required
              label="Your sub-community"
              value={formData.subCommunity}
              onChange={(e) => handleChange("subCommunity", e.target.value)}
              onBlur={() =>
                setTouched((prev) => ({ ...prev, subCommunity: true }))
              }
              slotProps={{ select: { native: true } }}
              variant="standard"
              helperText={
                showError("subCommunity") ? "Please select a sub-community" : ""
              }
            >
              {subCommunity.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
            {formData.subCommunity !== "Select" && (
              <div className="flex items-center justify-center gap-2 ml-2">
                <input
                  id="community"
                  type="checkbox"
                  className="w-4 h-4 mt-1"
                  onClick={() => (formData.casteNoBar = true)}
                />
                <label htmlFor="community">
                  Not particular about my Partner's Community (Caste No Bar)
                </label>
              </div>
            )}
          </div>
        </Box>

        <div className=" w-full flex justify-center ">
          <button
            disabled={!isValid}
            onClick={() => {
              onNext();
            }}
            className={`cursor-pointer px-8 py-3 rounded-full w-1/3 text-2xl text-white font-semibold text-shadow-xs text-shadow-black ${
              isValid ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
