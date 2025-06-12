import React from "react";
import records1 from "../../assets/records1.svg";
import records2 from "../../assets/records2.svg";
import records3 from "../../assets/records3.svg";
const Message = () => {
  return (
    <div className="mt-8 px-50 py-7 w-full flex items-center justify-between gap-2">
      <div className="flex items-center justify-center gap-6">
        <img src={records1} alt="" />
        <p className="text-black text-xl">
          {" "}
          <span className="text-2xl font-bold">100%</span> <br />{" "}
          Mobile-verified profiles
        </p>
      </div>
      <div className="bg-gray-400 h-33 w-[1px]"></div>
      <div className="flex items-center justify-center gap-6">
        <img src={records2} alt="" />
        <p className="text-black text-xl">
          {" "}
          <span className="text-2xl font-bold">4 Crore+</span> <br /> Customers
          served
        </p>
      </div>
       <div className="bg-gray-400 h-33 w-[1px]"></div>
      <div className="flex items-center justify-center gap-6">
        <img src={records3} alt="" />
        <p className="text-black text-xl">
          {" "}
          <span className="text-2xl font-bold">25 Years</span> <br /> of
          successful matchmaking
        </p>
      </div>
    </div>
  );
};

export default Message;
