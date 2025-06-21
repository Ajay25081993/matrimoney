import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header3";
import axiosInstance from "../../lib/axios";
import { API_URLS } from "../../constants/apiUrls";

const PartnerPreferences = () => {
  const [openPartnerPreferences, setOpenPartnerPreferences] = useState(true);
  const [userData, setUserData] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const fetchData = async () => {
    try {
      const dataResponse = await axiosInstance.get(
        `${API_URLS.GET_USER_BY_ID}/${user_id}`
      );

      setUserData(dataResponse.data[0]);
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  };
  
    useEffect(() => {
      fetchData();
    }, );
  return (
    <div className=" w-full bg-sky-300">
      <Header
        profilePic={userData.profilePic}
        userData={userData}
        openPartnerPreferences={openPartnerPreferences}
        setOpenPartnerPreferences={setOpenPartnerPreferences}
      />
    </div>
  );
};

export default PartnerPreferences;
