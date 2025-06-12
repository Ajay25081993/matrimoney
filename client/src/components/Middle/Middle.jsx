import React from "react";

const Middle = ({showRegister,setShowRegister}) => {
  return (
    <div className="w-full bg-zinc-200 flex flex-col items-center justify-center">
      <p className="text-center text-red-500 text-4xl my-20">
        Find your Special Someone
      </p>

      <div className="flex w-6xl justify-around p-6">
        <div onClick={()=>setShowRegister(true)} className="hover:bg-sky-500 cursor-pointer relative h-32 w-32 rounded-full bg-sky-400 transition-colors duration-300 flex flex-col items-center justify-center">
          <i className="ri-login-box-line text-5xl text-white"></i>
          <div className="absolute h-10 w-10 -bottom-5 left-12 rounded-full bg-white text-red-600 text-xl font-bold flex items-center justify-center">
            1
          </div>
        </div>
        <div onClick={()=>setShowRegister(true)} className="hover:bg-sky-500 cursor-pointer relative h-32 w-32 rounded-full bg-sky-400 transition-colors duration-300 flex flex-col items-center justify-center">
          <i className="ri-user-add-line text-5xl text-white"></i>
          <div className="absolute h-10 w-10 -bottom-5 left-12 rounded-full bg-white text-red-600 text-xl font-bold flex items-center justify-center">
            2
          </div>
        </div>
        <div onClick={()=>setShowRegister(true)} className="hover:bg-sky-500 cursor-pointer relative h-32 w-32 rounded-full bg-sky-400 transition-colors duration-300 flex flex-col items-center justify-center">
          <i className="ri-video-chat-line text-5xl text-white"></i>
          <div className="absolute h-10 w-10 -bottom-5 left-12 rounded-full bg-white text-red-600 text-xl font-bold flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <div className="flex w-6xl items-center justify-around px-6 py-6 text-center">
        
        <div  className="w-1/3 flex flex-col items-center justify-center">
          <h3 onClick={()=>setShowRegister(true)} className="text-sky-400 text-2xl font-semibold cursor-pointer hover:underline">
            Sign Up
          </h3>
          <p className="text-gray-500">
            Register for free & put up your Matrimony Profile
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center justify-center">
          <h3 onClick={()=>setShowRegister(true)} className="text-sky-400 text-2xl font-semibold cursor-pointer hover:underline">
            Connect
          </h3>
          <p className="text-gray-500">
           Select & Connect with Matches you like
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center justify-center">
          <h3 onClick={()=>setShowRegister(true)} className="text-sky-400 text-2xl font-semibold cursor-pointer hover:underline">
            Interact
          </h3>
          <p className="text-gray-500">
            Become a Premium Member & Start a conversation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
