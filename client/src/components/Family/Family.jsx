import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { motherOption, fatherOption, number } from "./option";

const Family = ({currentStep ,setCurrentStep}) => {
  const [familyDetails, setFamilyDetails] = useState({
    mother: "",
    father: "",
    sister: "",
    brother: "",
  });

  const [touched, setTouched] = useState({
    mother: false,
    father: false,
    sister: false,
    brother: false,
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (field) => (event) => {
    const newValue = event.target.value;
    const updatedDetails = { ...familyDetails, [field]: newValue };
    setFamilyDetails(updatedDetails);

    const isAllFilled = Object.values(updatedDetails).every(
      (val) => val !== ""
    );
    setIsValid(isAllFilled);
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const onNext = () => {
    setCurrentStep((prev)=>prev+1)
    console.log("Family Details:", familyDetails);
  };

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-4 flex-col p-5">
        <div className="w-full flex justify-center">
          <i className="ri-group-3-line text-purple-500 w-20 h-20 text-5xl text-shadow-md text-shadow-purple-400 flex justify-center items-center bg-purple-200 rounded-full"></i>
        </div>
        <p className="text-2xl font-semibold">Add family details</p>
        {/* Mother's Details */}
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 300 }}
          error={touched.mother && familyDetails.mother === ""}
        >
          <InputLabel
            sx={{ fontSize: "15px", fontWeight: 600 }}
            id="mother-detail-label"
          >
            Mother's Details
          </InputLabel>
          <Select
            labelId="mother-detail-label"
            value={familyDetails.mother}
            onChange={handleChange("mother")}
            onBlur={() => handleBlur("mother")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {motherOption.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {touched.mother && familyDetails.mother === "" && (
            <FormHelperText>Please select Mother's detail</FormHelperText>
          )}
        </FormControl>

        {/* Father's Details */}
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 300 }}
          error={touched.father && familyDetails.father === ""}
        >
          <InputLabel
            sx={{ fontSize: "15px", fontWeight: 600 }}
            id="father-detail-label"
          >
            Father's Details
          </InputLabel>
          <Select
            labelId="father-detail-label"
            value={familyDetails.father}
            onChange={handleChange("father")}
            onBlur={() => handleBlur("father")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {fatherOption.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {touched.father && familyDetails.father === "" && (
            <FormHelperText>Please select Father's detail</FormHelperText>
          )}
        </FormControl>

        {/* No of Sisters */}
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 300 }}
          error={touched.sister && familyDetails.sister === ""}
        >
          <InputLabel
            sx={{ fontSize: "15px", fontWeight: 600 }}
            id="sister-detail-label"
          >
            No. of Sisters
          </InputLabel>
          <Select
            labelId="sister-detail-label"
            value={familyDetails.sister}
            onChange={handleChange("sister")}
            onBlur={() => handleBlur("sister")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {number.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {touched.sister && familyDetails.sister === "" && (
            <FormHelperText>Please select number of sisters</FormHelperText>
          )}
        </FormControl>

        {/* No of Brothers */}
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 300 }}
          error={touched.brother && familyDetails.brother === ""}
        >
          <InputLabel
            sx={{ fontSize: "15px", fontWeight: 600 }}
            id="brother-detail-label"
          >
            No. of Brothers
          </InputLabel>
          <Select
            labelId="brother-detail-label"
            value={familyDetails.brother}
            onChange={handleChange("brother")}
            onBlur={() => handleBlur("brother")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {number.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          {touched.brother && familyDetails.brother === "" && (
            <FormHelperText>Please select number of brothers</FormHelperText>
          )}
        </FormControl>

        {/* Continue Button */}
        <div className="w-full flex justify-center">
          <button
            disabled={!isValid}
            onClick={onNext}
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

export default Family;
