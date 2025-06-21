import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { educationCategories } from "./degrees";
import { workWith } from "./workWith";
import Options from "./Options";
import { professionCategoriesData } from "./proffesion";
import { monthlyIncome, yearlyIncome } from "./income";
import { useNavigate } from "react-router-dom";
const ProfileCreation2 = ({ formData, setFormData }) => {
  const navigateTo = useNavigate();
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [showDegrees, setShowDegrees] = useState(false);
  const [showWorkWith, setShowWorkWith] = useState(false);
  const [showProffesion, setShowProffesion] = useState(false);
  const [showIncome, setShowIncome] = useState(false);
  const [selectIncome, setSelectIncome] = useState({
    monthly: true,
    yearly: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const {
      highestQualification,
      college,
      workWith,
      workAs,
      monthlyIncome,
      yearlyIncome,
    } = formData;
    if (
      highestQualification &&
      (workWith === "Not Working" || workAs) &&
      college &&
      selectIncome.monthly
        ? monthlyIncome
        : yearlyIncome
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const filteredDegrees = educationCategories
    .map((degreeCategory) => ({
      ...degreeCategory,
      degrees: degreeCategory.degrees.filter((deg) =>
        deg.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.degrees.length > 0);
  const filteredJobPost = professionCategoriesData
    .map((professionCategory) => ({
      ...professionCategory,
      professions: professionCategory.professions.filter((prof) =>
        prof.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((cat) => cat.professions.length > 0);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const onNext = () => {
    navigateTo(`/profile-creation/about-me`);
    // API call or navigation here
  };

  const showError = (field) => !formData[field] && touched[field];

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-4 flex-col p-5">
        <p className="text-2xl">
          Just a few questions about your education & career
        </p>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
            "& .MuiInputLabel-root": { fontSize: "18px" },
          }}
          noValidate
          autoComplete="off"
        >
          <div className="flex justify-center items-center flex-col gap-4">
            {/* Qualification */}
            <div>
              <TextField
                error={showError("highestQualification")}
                required
                label="Your highest qualification"
                value={formData.highestQualification}
                onChange={(e) => {
                  handleChange("highestQualification", e.target.value);
                  setSearchTerm(e.target.value);
                  setShowDegrees(true);
                }}
                onBlur={() =>
                  setTouched((prev) => ({
                    ...prev,
                    highestQualification: true,
                  }))
                }
                variant="standard"
                helperText={
                  showError("highestQualification")
                    ? "Please select your qualification"
                    : ""
                }
              />

              {/* {showDegrees && (
                <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto h-50 ml-2 p-1">
                  {educationCategories.map((degree) => {
                    return (
                      <Options
                        category={degree.category}
                        proffesion={degree.degrees}
                        handleChange={handleChange}
                        field={"highestQualification"}
                        setShowDegrees={setShowDegrees}
                      />
                    );
                  })}
                </div>
              )} */}
              {showDegrees && (
                <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto h-50 ml-2 p-1">
                  {filteredDegrees.map((degree, index) => (
                    <Options
                      key={index}
                      category={degree.category}
                      proffesion={degree.degrees}
                      handleChange={handleChange}
                      field={"highestQualification"}
                      setShowDegrees={setShowDegrees}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* College Name */}
            {formData.highestQualification && (
              <TextField
                error={showError("college") || formData.college.length < 10&&formData.college.length!=0}
                required
                label="Your college name(Highest degree)"
                placeholder="Enter your college name"
                value={formData.college}
                onChange={(e) => handleChange("college", e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, college: true }))
                }
                variant="standard"
                helperText={
                  showError("city")
                    ? "Please enter your city"
                    : formData.college.length < 10&&formData.college.length!=0
                    ? "College name must be at least 10 characters"
                    : ""
                }
                className=""
              />
            )}
            {/* Work With */}
            <div>
              <TextField
                onFocus={() => setShowWorkWith(true)}
                error={showError("workWith")}
                required
                label="You work with"
                value={formData.workWith}
                onChange={(e) => handleChange("workWith", e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, workWith: true }))
                }
                variant="standard"
                helperText={showError("workWith") ? "Please select one" : ""}
              />

              {showWorkWith && (
                <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto  ml-2 px-1 py-2">
                  <div className="space-y-2">
                    {workWith.map((type, index) => {
                      return (
                        <p
                          onMouseDown={() => {
                            handleChange("workWith", type);
                            setShowWorkWith(false);
                          }}
                          key={index}
                          className="px-2 py-1 bg-gray-200 border-1 border-gray-300 rounded-md hover:bg-sky-400 cursor-pointer"
                        >
                          {type}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Work As */}

            {formData.workWith && formData.workWith !== "Not Working"&&formData.workWith !== "Business / Self Employed" && (
              <div>
                <TextField
                  error={showError("workAs")}
                  required
                  label="As"
                  value={formData.workAs}
                  onChange={(e) => {
                    handleChange("workAs", e.target.value);
                    setSearchTerm(e.target.value);
                    setShowProffesion(true);
                  }}
                  onBlur={() =>
                    setTouched((prev) => ({ ...prev, workAs: true }))
                  }
                  variant="standard"
                  helperText={showError("workAs") ? "Please select one" : ""}
                />

                {/* {showProffesion && (
                <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto h-50 ml-2 px-1">
                  {professionCategoriesData.map((profession) => {
                    return (
                      <Options
                        category={profession.category}
                        proffesion={profession.professions}
                        handleChange={handleChange}
                        field={"workAs"}
                        setShowDegrees={setShowProffesion}
                      />
                    );
                  })}
                </div>
              )} */}
                {showProffesion && (
                  <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto h-50 ml-2 p-1">
                    {filteredJobPost.map((profession, index) => (
                      <Options
                        key={index}
                        category={profession.category}
                        proffesion={profession.professions}
                        handleChange={handleChange}
                        field={"workAs"}
                        setShowDegrees={setShowProffesion}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Company Name */}
            {formData.workAs && (
              <TextField
                error={showError("company")}
                required
                label="Your company name(current)"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, company: true }))
                }
                variant="standard"
                helperText={
                  showError("company") ? "Please enter your company name" : ""
                }
                
              />
            )}

            <div className=" w-full">
              <div className="ml-2  flex w-full items-center justify-between">
                <p className="text-xl text-gray-700">Your income*</p>
                <div className="flex items-center w-35 justify-between bg-gray-200 rounded-full">
                  <div className="flex w-35 items-center justify-center">
                    <div
                      onClick={() =>
                        setSelectIncome({ yearly: true, monthly: false })
                      }
                      className={`relative overflow-hidden rounded-full px-4 py-2 cursor-pointer text-center  transition-all duration-300 `}
                    >
                      <span
                        className={`relative z-10 ${
                          selectIncome.yearly ? "text-sky-400" : ""
                        } `}
                      >
                        Yearly
                      </span>
                      <div
                        className={`absolute top-0 left-0 h-full w-full transition-all duration-300 ${
                          selectIncome.yearly ? "translate-x-0 bg-white" : ""
                        }`}
                      ></div>
                    </div>

                    <div
                      onClick={() =>
                        setSelectIncome({ yearly: false, monthly: true })
                      }
                      className={`relative overflow-hidden rounded-full px-4 py-2 cursor-pointer text-center  transition-all duration-300 ${
                        selectIncome.monthly ? "" : ""
                      }`}
                    >
                      <span
                        className={`relative z-10 ${
                          selectIncome.monthly ? "text-sky-400" : ""
                        } `}
                      >
                        Monthly
                      </span>
                      <div
                        className={`absolute top-0 left-0 h-full w-full  transition-all duration-300 ${
                          selectIncome.monthly ? "translate-x-0 bg-white" : ""
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <TextField
                  onFocus={() => setShowIncome(true)}
                  error={
                    selectIncome.yearly
                      ? showError("yearlyIncome")
                      : showError("monthlyIncome")
                  }
                  required
                  placeholder={
                    selectIncome.yearly
                      ? `Select yearly income`
                      : `Select monthly income`
                  }
                  value={
                    selectIncome.yearly
                      ? formData.yearlyIncome
                      : formData.monthlyIncome
                  }
                  onChange={(e) => {
                    selectIncome.monthly
                      ? handleChange("monthlyIncome", e.target.value)
                      : handleChange("yearlyIncome", e.target.value);
                  }}
                  onBlur={() =>
                    setTouched((prev) => ({
                      ...prev,
                      [selectIncome.yearly
                        ? "yearlyIncome"
                        : "monthlyIncome"]: true,
                    }))
                  }
                  variant="standard"
                  helperText={
                    selectIncome.yearly
                      ? showError("yearlyIncome")
                        ? "Please enter your income"
                        : ""
                      : showError("monthlyIncome")
                      ? "Please enter your income"
                      : ""
                  }
                  className=""
                />
                {showIncome && selectIncome.monthly && (
                  <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto h-50 ml-2 px-1 py-2">
                    <Options
                      category={""}
                      proffesion={monthlyIncome}
                      handleChange={handleChange}
                      field={"monthlyIncome"}
                      setShowDegrees={setShowIncome}
                    />
                  </div>
                )}
                {showIncome && selectIncome.yearly && (
                  <div className="bg-gray-200 shadow-md shadow-gray-500 rounded-md w-full overflow-auto h-50 ml-2 px-1 py-2">
                    <Options
                      category={""}
                      proffesion={yearlyIncome}
                      handleChange={handleChange}
                      field={"yearlyIncome"}
                      setShowDegrees={setShowIncome}
                    />
                  </div>
                )}

                <p className="ml-2 text-sm">
                  Income details will help us find you relevant Matches. You may
                  <br /> choose NOT to show this to others.
                </p>
              </div>
            </div>
          </div>
        </Box>

        <div className="w-full flex justify-center">
          <button
            disabled={!isValid}
            onClick={(e) => onNext(e)}
            className={`cursor-pointer px-8 py-3 rounded-full w-1/3 text-2xl  font-semibold  ${
              isValid
                ? "bg-sky-300 text-sky-700"
                : "bg-gray-200 text-white cursor-not-allowed"
            }`}
          >
            Create Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation2;
