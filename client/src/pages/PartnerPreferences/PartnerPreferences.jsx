import React, { useEffect, useState, useMemo } from "react";
import Header from "../../components/Header/Header3";
import axiosInstance from "../../lib/axios";
import { API_URLS } from "../../constants/apiUrls";
import Sidebar from "../../components/PartnerPreferences/Sidebar";
import Editingsides from "../../components/PartnerPreferences/Editingsides";
import { allFields } from "../../components/PartnerPreferences/field";

const PartnerPreferences = () => {
  const [openPartnerPreferences, setOpenPartnerPreferences] = useState(true);
  const [userData, setUserData] = useState([]);
  const user_id = localStorage.getItem("user_id");

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `${API_URLS.GET_USER_BY_ID}/${user_id}`
      );
      setUserData(data[0]);
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollTargets = useMemo(() => {
    const refs = {};
    allFields.forEach((field) => {
      refs[field.mainHeading] = React.createRef();
    });
    return refs;
  }, []);

  const scrollToSection = (sectionName) => {
    scrollTargets[sectionName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="w-full pt-10">
      <Header
        profilePic={userData.profilePic}
        userData={userData}
        openPartnerPreferences={openPartnerPreferences}
        setOpenPartnerPreferences={setOpenPartnerPreferences}
      />
      <div className="pt-[110px] relative flex justify-center gap-8 py-17 ">
        <Sidebar onOptionClick={scrollToSection} />
        <Editingsides scrollTargets={scrollTargets} />
      </div>
    </div>
  );
};

export default PartnerPreferences;
