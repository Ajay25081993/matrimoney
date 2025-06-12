import React, { useState } from "react";
import { options } from "./options";
import { genders } from "./gender";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form1 from "./Form1";

const Register = ({ showRegister, setShowRegister }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showGender, setShowGender] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);
  const initialUserData = {
    gender: "",
    firstName: "",
    lastName: "",
    dob: {
      day: "",
      month: "",
      year: "",
    },
    religion: "Other",
    community: "Others",
    state: "Delhi",
    email: "",
    phone: "",
  };
  const [userData, setUserData] = useState(initialUserData);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    let updateGender = userData.gender;
    updateGender = updateGender.startsWith("Male") ? "Male" : "Female";
    const updatedUserData = { ...userData, gender: updateGender };
    setUserData(updatedUserData);
    console.log(userData);

    // Do your submission logic here
  };

  const handleShowGender = (option) => {
    setSelectedOption(option);
    if (
      option === "My Self" ||
      option === "My Friend" ||
      option === "My Relative"
    ) {
      setShowGender(true);
    } else {
      setShowGender(false);
      if (option === "My Son") {
        setUserData({ ...userData, gender: "MaleMy Son" });
      } else if (option === "My Brother") {
        setUserData({ ...userData, gender: "MaleMy Brother" });
      } else if (option === "My Daughter") {
        setUserData({ ...userData, gender: "FemaleMy Daughter" });
      } else if (option === "My Sister") {
        setUserData({ ...userData, gender: "FemaleMy Sister" });
      }
      // reset gender if not needed
    }
  };

  const isButtonDisabled = () => {
    if (!selectedOption) return true;
    if (showGender && !userData.gender) return true;
    return false;
  };

  return (
    <div
      className={`fixed bg-[#00000076] top-0 bottom-0 w-full flex justify-center items-center ${
        showRegister ? "block" : "hidden"
      }`}
    >
      <div className="relative w-3xl border-1 shadow-md shadow-gray-800 border-gray-300 bg-gray-50 h-[700px] rounded-md p-10 space-y-8">
        {currentStep === 0 && (
          <>
            <div className="space-y-4">
              <i
                onClick={() => {
                  setShowRegister(false);
                  setUserData(initialUserData);
                  setSelectedGender(null);
                  setSelectedOption("");
                  setShowGender(false);
                }}
                className="cursor-pointer ri-arrow-left-long-line text-3xl absolute left-8 top-8 m-2 text-gray-500 "
              ></i>
              <div className="w-full flex justify-center">
                <i className="ri-user-3-fill text-amber-400 w-20 h-20 text-5xl flex justify-center items-center bg-amber-200 rounded-full"></i>
              </div>

              <div className="space-y-4">
                <p className="text-3xl">This Profile is for</p>
                <div className="flex flex-wrap gap-4">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleShowGender(option)}
                      className={`cursor-pointer flex justify-center items-center gap-2 border border-gray-400 rounded-full px-2 py-1 `}
                    >
                      <div className="w-10 h-10 border border-neutral-200 bg-gray-100 rounded-full flex justify-center items-center">
                        {selectedOption === option && (
                          <i className="ri-check-fill text-white text-3xl bg-green-500 rounded-full w-10 h-10 flex justify-center items-center"></i>
                        )}
                      </div>
                      <p className="text-2xl mr-1">{option}</p>
                    </div>
                  ))}
                </div>
              </div>

              {showGender && (
                <div className="space-y-4">
                  <p className="text-3xl">Gender</p>
                  <div className="flex flex-wrap gap-4">
                    {genders.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedGender(index);
                          setUserData({
                            ...userData,
                            gender: option + selectedOption,
                          });
                        }}
                        className={`cursor-pointer flex justify-center items-center gap-2 border border-gray-400 rounded-full px-2 py-1 `}
                      >
                        <div className="w-10 h-10 border border-neutral-300 rounded-full flex justify-center items-center">
                          {selectedGender === index && (
                            <i className="ri-check-fill text-white text-3xl bg-green-500 rounded-full w-10 h-10 flex justify-center items-center"></i>
                          )}
                        </div>
                        <p className="text-2xl mr-1">{option}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="absolute w-full flex justify-center bottom-15 left-0 right-0">
              <button
                onClick={() => {
                  handleNext();
                }}
                disabled={isButtonDisabled()}
                className={`cursor-pointer px-8 py-3 rounded-full w-1/3 text-2xl font-semibold text-shadow-xs  ${
                  isButtonDisabled()
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-400 text-white"
                }`}
              >
                Continue
              </button>
            </div>{" "}
          </>
        )}

        {currentStep === 1 && (
          <Form1
            onNext={handleNext}
            onBack={handleBack}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        {currentStep === 2 && (
          <Form2
            onNext={handleNext}
            onBack={handleBack}
            userData={userData}
            setUserData={setUserData}
          />
        )}
        {currentStep === 3 && (
          <Form3
            onSubmit={handleSubmit}
            onBack={handleBack}
            userData={userData}
            setUserData={setUserData}
          />
        )}
      </div>
    </div>
  );
};

export default Register;
