import React from "react";
import ProfileCreation from "../../components/CreateProfile/ProfileCreation";
import Header from "../../components/Header/Header2";
import Footer2 from "../../components/Footer/Footer2";
import ProfileCreation2 from "../../components/CreateProfile/ProfileCreation2";
import { useParams } from "react-router-dom";
const CreateProfile = () => {
  const { step } = useParams();

  return (
    <div className="bg-green-400 relative flex-col flex justify-center items-center">
      <Header />
      {step == 1 && <ProfileCreation />}
      {step == 2 && <ProfileCreation2 />}
      
      <Footer2 />
    </div>
  );
};

export default CreateProfile;
