import React from "react";
import assistedlogo from "../../assets/assistedlogo.svg";
import assisted1 from "../../assets/assisted1.svg";
import assisted2 from "../../assets/assisted2.svg";
import assisted3 from "../../assets/assisted3.svg";
import assistedrightsideimg from "../../assets/assistedrightsideimg.avif";
const Hero2 = () => {
  return (
    <div className="bg-green-50 w-full p-10 flex">
      <div className="w-1/2 flex flex-col justify-center items-center gap-8">
        <div className="flex justify-center items-center gap-4">
          <img src={assistedlogo} alt="" />
          <div>
            <h1 className="text-3xl font-semibold">Assisted Service</h1>
            <p className="text-2xl">Personalised matchmaking service</p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Find your match <span className="text-green-500">10x faster</span></h1>
          <p className="text-2xl">
            Personalized matchmaking service through <br /> expert Relationship
            Manager
          </p>
        </div>
        <div className="flex gap-15 ml-10">
          <div className="flex flex-col items-center justify-center w-30">
            <img  src={assisted1} alt="" />
            <p  className="text-center text-xl">Guaranteed matches</p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center w-30">
            <img src={assisted2} alt="" />
            <p className="text-center text-xl">Better response</p>
          </div>{" "}
          <div className="flex flex-col items-center justify-center w-30">
            <img src={assisted3} alt="" />
            <p className="text-center text-xl">Save time & effort</p>
          </div>
        </div>
        <div className="text-white w-120 flex bg-amber-500 items-center justify-center gap-2 p-2 rounded-full">
          <button className="text-xl font-semibold">Know More</button>
          <i className="ri-arrow-right-up-long-line rotate-45 text-xl mt-2"></i>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img src={assistedrightsideimg} alt="" />
      </div>
    </div>
  );
};

export default Hero2;
