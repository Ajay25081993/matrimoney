import React, { useEffect, useState } from "react";
import Options from "../../components/Matches/Options";
import MatchedPerson from "../../components/Matches/MatchedPerson";
import Header from "../../components/Header/Header4";
import axiosInstance from "../../lib/axios";
import { API_URLS } from "../../constants/apiUrls";

const Matches = () => {
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
  });
  return (
    <div className="  w-full h-screen ">
      <Header profilePic={userData.profilePic} userData={userData} />
      <div className="flex  justify-center gap-5 py-30">
        <Options />
      <MatchedPerson />
      </div>
      
    </div>
  );
};

export default Matches;
