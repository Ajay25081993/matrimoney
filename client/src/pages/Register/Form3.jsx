import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { contact } from "../../validation/email&phone&PasswordValidation";
import { Link } from "react-router-dom";
const Form3 = ({ onBack, userData, setUserData, onSubmit, registered }) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
  const onNext = (e) => {
    // console.log("Profile Data Submitted:", formData);
    onSubmit(e);
    //
    // API call or navigation here
  };

  return (
    <div>
      <div className="flex">
        <i
        onClick={onBack}
        className="ri-arrow-left-long-line text-2xl cursor-pointer text-gray-500"
      ></i>

      <div className="w-full flex justify-center mb-2 mr-5">
        <i className="ri-shield-check-line text-amber-500 w-18 h-18 text-5xl text-shadow-md text-shadow-amber-400 flex justify-center items-center bg-amber-200 rounded-full"></i>
      </div>
      </div>
      
      <p className="w-full text-center text-xl text-gray-600">
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
          <div className="w-xl flex flex-col  px-2 justify-center items-center">
            {/* Email */}
            <p className="!w-120 text-2xl">Email ID.</p>
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
            <p className="!w-120 text-2xl">Mobile no.</p>
            <TextField
              className="!w-120"
              error={touched.phoneNo && Boolean(errors.phoneNo)}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 10 && /^\d*$/.test(value)) {
                  // allow only digits and max 10
                  setUserData({ ...userData, phoneNo: value });
                }
              }}
              onBlur={() => handleBlur("phoneNo")}
              label="Phone Number"
              value={userData.phoneNo}
              helperText={touched.phoneNo && errors.phoneNo}
            />

            {/* Password */}
            <p className="!w-120 text-2xl">Password</p>
            <TextField
              className="!w-120"
              error={touched.password && Boolean(errors.password)}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
              onBlur={() => handleBlur("password")}
              label="Password"
              type={showPassword ? "text" : "password"}
              value={userData.password.trim()}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </div>
      </Box>

      {/* Continue Button */}
      <div className="absolute w-full flex justify-center bottom-15 left-0 right-0">
        <button
          onClick={(e) => {
            onNext(e);
          }}
          disabled={!isValid}
          className={`cursor-pointer  rounded-full ${
            registered ? "w-15 h-15" : "w-1/3 px-8 py-3"
          } text-2xl  font-semibold  ${
            isValid
              ? "bg-amber-200 text-amber-500"
              : "bg-gray-200 text-white cursor-not-allowed"
          }`}
        >
          {registered ? (
            <i className="ri-check-line text-2xl text-amber-500"></i>
          ) : (
            "Continue"
          )}
        </button>
      </div>
      <p className="text-center text-gray-500 absolute left-0 right-0 bottom-6">
        By creating account, you agree to our
        <span className="underline text-sky-500">Privacy Policy</span> and
        <span className="underline text-sky-500">T&C</span>
      </p>
    </div>
  );
};

export default Form3;
