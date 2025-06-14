import React from "react";
import Header from "../../components/Header/Header2";
import Footer2 from "../../components/Footer/Footer2";
import Family from "../../components/Family/Family";
// import { useState } from "react";
import FamilyIncome from "../../components/Family/familyIncome";
const FamilyDetails = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="bg-green-400 relative flex-col flex justify-center items-center">
      <Header />

  

      {/* {currentStep == 2 && (
        <FamilyIncome currentStep={currentStep} setCurrentStep={setCurrentStep} />
      )} */}
      <Footer2 />
    </div>
  );
};

export default FamilyDetails;
