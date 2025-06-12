// import React from "react";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// const AboutUser = () => {
//   const [isValid, setIsValid] = useState(false);
//   const [formData, setFormData] = useState({
//     about: "",
//   });
//   const onNext = () => {
//     console.log("Profile Data Submitted:", formData);
//     // API call or navigation here
//   };
//   return (
//     <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
//       <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-10 flex-col p-5">
//         <p className="text-2xl">We have added a short description for you</p>
//         <div className="flex flex-col w-100">
//           <label htmlFor="" className="ml-2">
//             About yourself*
//           </label>
//           <Box
//             component="form"
//             sx={{ "& .MuiTextField-root": { m: 1, width: "44ch" } }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField
//             error
//               id="outlined-multiline-static"
//               multiline
//               rows={4}
//               value={formData.about}
//               onChange={(e) =>
//                 setFormData({ ...formData, about: e.target.value })
//               }
//               helperText
//             />
//           </Box>
//           <div className="flex w-100 justify-between">
//             <p className="text-sm italic ml-2">
//               Edit the text to make it more personal
//             </p>
//             <p className="text-sm mr-2">{formData.about.length}/4000</p>
//           </div>
//         </div>

//         <div className=" w-full flex justify-center ">
//         <button
//           disabled={!isValid}
//           onClick={() => {
//             onNext();
//           }}
//           className={`cursor-pointer px-8 py-3 rounded-full w-1/3 text-2xl text-white font-semibold text-shadow-xs text-shadow-black ${
//             isValid ? "bg-green-500" : "bg-gray-400 cursor-not-allowed"
//           }`}
//         >
//           Continue
//         </button>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default AboutUser;

import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AboutUser = () => {
  const [formData, setFormData] = useState({
    about: "Hi! It feels good to introduce myself. I have a flexible, open-minded and progressive mindset. I am looking forward to settling down with a partner who shares my values and interests, someone with whom I can always be myself. Thank you for your valued time!",
  });
  const [touched, setTouched] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Validation Logic
  useEffect(() => {
    const aboutText = formData.about.trim();
    setIsValid(aboutText.length > 0 && aboutText.length <= 4000);
  }, [formData.about]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Restrict input to 4000 characters
    if (value.length <= 4000) {
      setFormData({ ...formData, about: value });
    }
  };

  const onNext = () => {
    console.log("Profile Data Submitted:", formData);
    // API call or navigation logic here
  };

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-10 flex-col p-5">
        <p className="text-2xl">We have added a short description for you</p>

        <div className="flex flex-col w-100">
          <label htmlFor="about" className="ml-2">
            About yourself*
          </label>

          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "44ch" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              placeholder="Describe yourself"
              id="outlined-multiline-static"
              multiline
              rows={6}
              value={formData.about}
              onChange={handleChange}
              onBlur={() => setTouched(true)}
              error={
                (touched && formData.about.trim().length === 0) ||
                formData.about.length > 4000
              }
              helperText={
                touched && formData.about.trim().length === 0
                  ? "This field is required"
                  : formData.about.length > 4000
                  ? "Maximum 4000 characters allowed"
                  : ""
              }
            />
          </Box>

          <div className="flex w-100 justify-between">
            <p className="text-sm italic ml-2">
              Edit the text to make it more personal
            </p>
            <p className={`text-sm mr-2 `}>
              <span className="text-sky-400">{formData.about.length}</span>/4000
            </p>
          </div>
        </div>

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

export default AboutUser;
