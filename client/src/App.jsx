import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Loader } from "lucide-react";

// import { useAuthStore } from "./store/useAuthStore";
import PrivateRoute from "./components/Private Route/PrivateRoute";
import { privateRoutes } from "./components/Private Route/privateRoutes";

const Landing = lazy(() => import("./pages/Landing"));
const MyProfile = lazy(() => import("./pages/My Profile/MyProfile"));
const More = lazy(() => import("./pages/More/More"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const MyPhotos = lazy(() => import("./pages/MyPhotos/MyPhotos"));
const PartnerPreferences = lazy(() =>
  import("./pages/PartnerPreferences/PartnerPreferences")
);
const Home = lazy(() => import("./pages/Home/Home"));
const Matches = lazy(() => import("./pages/Matches/Matches"));
const FamilyDetails = lazy(() => import("./pages/FamilyDetails/FamilyDetails"));
const UploadPhoto = lazy(() => import("./pages/Upload Photo/UploadPhoto"));
const Hobby = lazy(() => import("./pages/Hobbies&Interests/Hobby"));
const ProfilePreview = lazy(() =>
  import("./pages/Profile Preview/ProfilePreview")
);
const CreateProfile = lazy(() =>
  import("./pages/Profile Creation/CreateProfile")
);
const Inbox = lazy(() => import("./pages/Inbox/Inbox"));
const App = () => {
  // const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  const componentsMap = {
    Home,
    Matches,
    More,
    Settings,
    MyPhotos,
    FamilyDetails,
    UploadPhoto,
    Hobby,
    ProfilePreview,
    CreateProfile,
    Inbox,
    MyProfile,
    PartnerPreferences,
  };
  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // if (isCheckingAuth && !authUser)
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="size-10 animate-spin" />
  //     </div>
  //   );
  return (
    <div>
      <ToastContainer />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          {privateRoutes.map(({ path, component }) => {
            const Component = componentsMap[component];
            if (path === "/profile-creation/about-me")
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PrivateRoute>
                      <Component steps={"about-me"} />
                    </PrivateRoute>
                  }
                />
              );
            if (path === "/profile-creation/family-details")
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PrivateRoute>
                      <Component steps={"family-details"} />
                    </PrivateRoute>
                  }
                />
              );
            return (
              <Route
                key={path}
                path={path}
                element={
                  <PrivateRoute>
                    <Component />
                  </PrivateRoute>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
