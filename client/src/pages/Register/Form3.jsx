import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { contact } from "../../validation/email&phoneValidation";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Form3 = ({ onSubmit, onBack, userData, setUserData }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);
  const navigateTo = useNavigate();
  useEffect(() => {
    try {
      contact.validateSync(userData, { abortEarly: false });
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

  const handleBlur = (fieldPath) => {
    setTouched((prev) => ({ ...prev, [fieldPath]: true }));
  };
  const onNext = () => {
    // console.log("Profile Data Submitted:", formData);

    navigateTo(`/profile-creation/step/1`);
    // API call or navigation here
  };

  return (
    <div>
      <i
        onClick={onBack}
        className="ri-arrow-left-long-line text-3xl cursor-pointer text-gray-500"
      ></i>

      <div className="w-full flex justify-center mb-4">
        <i className="ri-shield-check-line text-amber-500 w-20 h-20 text-5xl text-shadow-md text-shadow-amber-400 flex justify-center items-center bg-amber-200 rounded-full"></i>
      </div>
      <p className="w-full text-center text-2xl text-gray-600">
        An active email ID & phone no. <br />
        are required to secure your Profile
      </p>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <div className="w-full px-10 py-5 flex flex-col justify-center items-center">
          <div className="w-xl flex flex-col gap-4 px-2 justify-center items-center">
            {/* Email */}
            <p className="!w-120 text-3xl">Email ID.</p>
            <TextField
              className="!w-120"
              error={touched.email && Boolean(errors.email)}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              onBlur={() => handleBlur("email")}
              label="Email"
              value={userData.email}
              helperText={touched.email && errors.email}
            />

            {/* Phone Number */}
            <p className="!w-120 text-3xl">Mobile no.</p>
            <TextField
              className="!w-120"
              error={touched.phone && Boolean(errors.phone)}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              onBlur={() => handleBlur("phone")}
              label="Phone Number"
              value={userData.phone}
              helperText={touched.phone && errors.phone}
            />
          </div>
        </div>
      </Box>

      {/* Continue Button */}
      <div className="absolute w-full flex justify-center bottom-15 left-0 right-0">
        <button
          onClick={() => {
            onNext();
          }}
          disabled={!isValid}
          className={`cursor-pointer px-8 py-3 rounded-full w-1/3 text-2xl text-white font-semibold text-shadow-xs text-shadow-black ${
            isValid ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
      <p className="text-center mt-30 text-gray-500">
        By creating account, you agree to our{" "}
        <span className="underline text-sky-500">Privacy Policy</span> and{" "}
        <span className="underline text-sky-500">T&C</span>
      </p>
    </div>
  );
};

export default Form3;
