import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateProfile from "./pages/Profile Creation/CreateProfile";
import AboutMe from "./pages/About Me/AboutMe";
import UploadPhoto from "./pages/Upload Photo/UploadPhoto";
import Hobby from "./pages/Hobbies&Interests/Hobby";
import Inbox from "./pages/Inbox/Inbox";
import FamilyDetails from "./pages/FamilyDetails/FamilyDetails";
import Home from "./pages/Home/Home";
import ProfilePreview from "./pages/Profile Preview/ProfilePreview";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/family-details" element={<FamilyDetails />} />
        <Route path="/upload-photo" element={<UploadPhoto />} />
        <Route path="/hobby-interest" element={<Hobby />} />
        <Route path="/profile-preview" element={<ProfilePreview />} />
        <Route path="/inbox" element={<Inbox />} />

        <Route
          path="/profile-creation/step/:step"
          element={<CreateProfile />}
        />
      </Routes>
    </div>
  );
};

export default App;
