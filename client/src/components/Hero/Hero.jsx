import React from "react";
import Banner from "../../assets/Banner.png";
import Register from "../../pages/Register/Register";

const Hero = () => {
  return (
    <div className=" w-full flex mb-4">
      <div className="py-14 w-1/2 flex flex-col justify-center items-center">
        <p className="text-3xl ml-30 mb-4">
          The <span className="text-green-500">biggest and most trusted</span>{" "}
          <br />
          matrimony service for Bengalis!
        </p>
        <img className="ml-30"  src={Banner} alt="" />
      </div>

      <div className="w-1/2 flex justify-center py-14">
        <Register/>
      </div>
    </div>
  );
};

export default Hero;
