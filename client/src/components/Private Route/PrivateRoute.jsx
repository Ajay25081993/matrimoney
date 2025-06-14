import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";

const PrivateRoute = ({ children }) => {
  const { checkAuth, authUser } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // if (!authUser) {
  //   return <Navigate to="/" />;
  // }

  return children;
};

export default PrivateRoute;
