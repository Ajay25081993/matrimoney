import React from "react";
import Logo from "../../assets/logo2.png";

const Header = () => {
  return (
    <div className="absolute top-0 w-full px-50 py-5 bg-white shadow-md shadow-gray-500">
      <div>
        <img src={Logo} alt="" />
      </div>

      {/* <div className="flex items-center gap-3 text-white">
        <div onClick={()=>{setShowLogin(true)}} className="flex gap-1 cursor-pointer items-center justify-center">
          <span className="hover:underline">Login</span>
          <i className="ri-arrow-down-s-line mt-1"></i>
        </div>
        <p className="cursor-pointer">Help</p>
      </div> */}
    </div>
  );
};

export default Header;
