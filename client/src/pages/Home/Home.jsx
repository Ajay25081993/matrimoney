import React, { useState } from "react";
import Header from "../../components/Header/Header3";
import Dashboard from "../../components/Dashboard/Dashboard";
import MyProfile from "../../components/My Profile/MyProfile";

const Home = () => {
  const [openDashboard, setOpenDashboard] = useState(true);
  const [openMyProfile, setOpenMyProfile] = useState(false);
  const [openMyPhotos, setOpenMyPhotos] = useState(false);
  const [openPartnerPreferences, setOpenPartnerPreferences] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [openMore, setOpenMore] = useState(false);
  return (
    <div className="bg-gray-100  w-full ">
      <Header
        openDashboard={openDashboard}
        setOpenDashboard={setOpenDashboard}
        openMyProfile={openMyProfile}
        setOpenMyProfile={setOpenMyProfile}
        openMyPhotos={openMyPhotos}
        setOpenMyPhotos={setOpenMyPhotos}
        openPartnerPreferences={openPartnerPreferences}
        setOpenPartnerPreferences={setOpenPartnerPreferences}
        openSettings={openSettings}
        setOpenSettings={setOpenSettings}
        openMore={openMore}
        setOpenMore={setOpenMore}
      />
      <div className="pt-20 ">
        {openDashboard && <Dashboard />}
        {openMyProfile && <MyProfile />}
        {openMyPhotos && <div>My Photos Content</div>}
        {openPartnerPreferences && <div>Partner Preferences Content</div>}
        {openSettings && <div>Settings Content</div>}
        {openMore && <div>More Content</div>}
      </div>
    </div>
  );
};

export default Home;
