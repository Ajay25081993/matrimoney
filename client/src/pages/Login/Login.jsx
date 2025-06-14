import React, { useState } from "react";
import Logo from "../../assets/loginLogo.png";

const Login = ({ showLogin, setShowLogin,setShowRegister }) => {
  // 👇 State for inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    stayLoggedIn: false,
  });

  // 👇 Handler for text inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const openRegister = () => {
    setShowRegister(true)
    setShowLogin(false)
  };

  // 👇 Handle login button click
  const handleLogin = () => {
    console.log("Login data submitted:", formData);
    // Add your login API call logic here
  };

  return (
    <div
      className={`fixed bg-[#00000076] top-0 bottom-0 w-full flex justify-center items-center ${
        showLogin ? "block" : "hidden"
      }`}
    >
      <div className="bg-white shadow-md shadow-gray-800 w-95 py-9 px-6 rounded-md flex flex-col gap-8 border-1 border-gray-200 relative">
        <i
          onClick={() => setShowLogin(false)}
          className="cursor-pointer ri-close-line text-xl absolute right-0 top-0 m-2 text-gray-300 hover:text-gray-400"
        ></i>

        <div className="w-full flex flex-col justify-center items-center gap-2">
          <img src={Logo} alt="" className="w-10" />
          <p>Welcome back! Please Login</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="mb-1">Email ID.</label>
            <input
              name="identifier"
              value={formData.email}
              onChange={handleChange}
              className="outline-sky-400 w-full p-2 border-1 border-gray-400 rounded-sm"
              type="text"
              placeholder="Enter Mobile No. / Email ID"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1">Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="outline-sky-400 w-full p-2 border-1 border-gray-400 rounded-sm"
              type="password"
              placeholder="Enter Password"
            />
          </div>

          <div className="w-full flex justify-between items-center">
            <div>
              <input
                type="checkbox"
                id="login"
                name="stayLoggedIn"
                checked={formData.stayLoggedIn}
                onChange={handleChange}
              />
              <label htmlFor="login" className="ml-1">
                Stay Logged in
              </label>
            </div>
            <p className="text-sky-400 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <button
            onClick={handleLogin}
            className="w-full bg-sky-400 rounded-md p-2 hover:bg-sky-500"
          >
            Login
          </button>

          <p className="text-center text-gray-400 text-xs font-bold">OR</p>

          <button className="w-full bg-sky-400 rounded-md p-2 hover:bg-sky-500">
            Login With OTP
          </button>
        </div>

        <div className="flex justify-center items-center">
          <p>New to Shaadi?</p>
          <div
            onClick={() => openRegister()}
            className="px-1 font-semibold text-sm text-gray-500 flex text-center justify-center items-center hover:rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <p>Sign Up Free</p>
            <i className="ri-arrow-right-s-line text-xl mt-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
