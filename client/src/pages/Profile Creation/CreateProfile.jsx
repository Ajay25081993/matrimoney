import React from "react";
import ProfileCreation from "../../components/CreateProfile/ProfileCreation";
import Header from "../../components/Header/Header2";
import Footer2 from "../../components/Footer/Footer2";
import ProfileCreation2 from "../../components/CreateProfile/ProfileCreation2";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import axiosInstance from "../../lib/axios";
import { API_URLS } from "../../constants/apiUrls";
import { Bounce, toast } from "react-toastify";
import FamilyDetails from "../FamilyDetails/FamilyDetails";
import Family from "../../components/Family/Family";

const CreateProfile = ({ steps }) => {
  const navigateTo = useNavigate();
  const { step } = useParams();
  const [formData, setFormData] = useState({
    language: [],
    languageKnown: "",
    highestQualification: "",
    college: "",
    workWith: "",
    workAs: "",
    company: "",
    monthlyIncome: "",
    yearlyIncome: "",
    city: "",
    liveWithFamily: "",
    maritalStatus: "",
    hasChildren: "",
    diet: "",
    height: "",
    weight: "",
    subCommunity: "",
    casteNoBar: false,
    about:
      "Hi! It feels good to introduce myself. I have a flexible, open-minded and progressive mindset. I am looking forward to settling down with a partner who shares my values and interests, someone with whom I can always be myself. Thank you for your valued time!",
    mother: "",
    father: "",
    sister: "",
    brother: "",
  });
  const handleSubmit = async () => {
    try {
      const updatedUserInfo = {
        ...formData,
        languageKnown: formData.language
          .map((lang, i) =>
            i === 0 ? `${lang.title} (Mother Tongue)` : lang.title
          )
          .join(", "),
      };
      setFormData(updatedUserInfo);
      console.log(updatedUserInfo);

      const response = await axiosInstance.post(
        API_URLS.ADD_INFO,
        updatedUserInfo 
      );
      console.log("Res", response);

      if (response.data[0].length) {
        toast.success(response.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          onClose: () => {
            navigateTo("/home");
          },
        });
      } else {
        toast.success(response.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Profile creation error:", error);
      toast.error("Profile creation error. Please try again.");
    }
  };
  return (
    <div className="bg-sky-400 relative flex-col flex justify-center items-center">
      <Header />
      {step == 1 && (
        <ProfileCreation formData={formData} setFormData={setFormData} />
      )}
      {step == 2 && (
        <ProfileCreation2 formData={formData} setFormData={setFormData} />
      )}
      {steps === "about-me" && (
        <AboutMe formData={formData} setFormData={setFormData} />
      )}
      {steps === "family-details" && (
        <Family
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      )}
      <Footer2 />
    </div>
  );
};

export default CreateProfile;
