import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { userDataSchema } from "../../validation/formValidation"; // your Yup schema

const Form1 = ({ onNext, onBack, userData, setUserData }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // validate on every data change
    try {
      userDataSchema.validateSync(userData, { abortEarly: false });
      setErrors({});
      setIsValid(true);
    } catch (validationError) {
      const errorObj = {};
      validationError.inner.forEach((err) => {
        if (err.path) {
          errorObj[err.path] = err.message;
        }
      });
      setErrors(errorObj);
      setIsValid(false);
    }
  }, [userData]);
  // handle touched tracking
  const handleBlur = (fieldPath) => {
    setTouched((prev) => ({ ...prev, [fieldPath]: true }));
  };

  return (
    <div>
      <i
        onClick={onBack}
        className="ri-arrow-left-long-line text-3xl cursor-pointer text-gray-500"
      ></i>
      <div className="w-full flex justify-center">
        <i className="ri-user-3-fill text-purple-500 w-20 h-20 text-5xl text-shadow-md text-shadow-purple-400 flex justify-center items-center bg-purple-200 rounded-full"></i>
      </div>

      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div className="w-full p-10 flex flex-col justify-center items-center">
          <div className="w-xl flex flex-col gap-4 px-2 justify-center items-center">
            <p className="!w-120 text-2xl">
              {userData.gender == "FemaleMy Self" ||
              userData.gender == "MaleMy Self"
                ? "Your Name"
                : userData.gender == "FemaleMy Daughter" ||
                  userData.gender == "FemaleMy Friend" ||
                  userData.gender == "FemaleMy Relative" ||
                  userData.gender == "FemaleMy Sister"
                ? "Her Name"
                : "His Name"}
            </p>

            {/* First Name */}
            <TextField
              className="!w-120"
              error={touched.firstName && Boolean(errors.firstName)}
              onChange={(e) =>
                setUserData({ ...userData, firstName: e.target.value })
              }
              onBlur={() => handleBlur("firstName")}
              label="First Name"
              value={userData.firstName}
              helperText={touched.firstName && errors.firstName}
            />

            {/* Last Name */}
            <TextField
              className="!w-120"
              error={touched.lastName && Boolean(errors.lastName)}
              onChange={(e) =>
                setUserData({ ...userData, lastName: e.target.value })
              }
              onBlur={() => handleBlur("lastName")}
              label="Last Name"
              value={userData.lastName}
              helperText={touched.lastName && errors.lastName}
            />
            <p className="!w-120 text-2xl">
              {userData.gender == "Female"
                ? "Her Date of Birth"
                : "His Date of Birth"}
            </p>
            {/* Date of Birth */}
            <div className="w-123 p-0 flex gap-2">
              <TextField
                type="number"
                error={touched["dob.day"] && Boolean(errors["dob.day"])}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    dob: { ...userData.dob, day: e.target.value },
                  })
                }
                onBlur={() => handleBlur("dob.day")}
                label="Day"
                value={userData.dob.day}
                helperText={touched["dob.day"] && errors["dob.day"]}
              />
              <TextField
                type="number"
                error={touched["dob.month"] && Boolean(errors["dob.month"])}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    dob: { ...userData.dob, month: e.target.value },
                  })
                }
                onBlur={() => handleBlur("dob.month")}
                label="Month"
                value={userData.dob.month}
                helperText={touched["dob.month"] && errors["dob.month"]}
              />
              <TextField
                type="number"
                error={touched["dob.year"] && Boolean(errors["dob.year"])}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    dob: { ...userData.dob, year: e.target.value },
                  })
                }
                onBlur={() => handleBlur("dob.year")}
                label="Year"
                value={userData.dob.year}
                helperText={touched["dob.year"] && errors["dob.year"]}
              />
            </div>
          </div>
        </div>
      </Box>

      {/* Continue Button */}
      <div className="absolute w-full flex justify-center bottom-15 left-0 right-0">
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
  );
};

export default Form1;
