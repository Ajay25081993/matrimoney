import React from "react";
import limcarecords from "../../assets/limcarecords.svg";
import recordscorner from "../../assets/recordscorner.svg";
const Record = () => {
  return (
    <div className="w-full mt-8 flex justify-center items-center mb-15">
      <div className="w-6xl rounded-2xl border-1 border-gray-200 bg-[#fffbfb] flex justify-center items-center gap-10 h-40">
        <div className="relative mt-6">
          <img className="absolute -top-10 -left-6 w-10" src={recordscorner} alt="" />
          <img className=" w-30" src={limcarecords} alt="" />
        </div>
        <div>
          <p className="text-2xl font-semibold">Lakhs of Happy Marriages!</p>
          <p className="text-xl">
            Featured in the Limca Book of Records for highest number of <br />
            documented marriages online
          </p>
        </div>
      </div>
    </div>
  );
};

export default Record;
