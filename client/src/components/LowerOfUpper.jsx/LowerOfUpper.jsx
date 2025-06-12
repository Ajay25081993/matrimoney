import React, { useState } from "react";
import CustomSelect from "./CustomSelect";

const LowerOfUpper = ({showRegister,setShowRegister}) => {
  const numbers = Array.from({ length: 74 - 21 + 1 }, (_, i) => i + 21);
  const religions = ["Hindu", "Muslim", "Christian", "Sikh"];
  const languages = ["Hindi", "English", "Bengali", "Tamil"];

  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedValues, setSelectedValues] = useState({
    gender: "Man",
    ageFrom: 21,
    ageTo: 21,
    religion: "Hindu",
    language: "Hindi",
  });

  const handleToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleSelect = (id, value) => {
    setSelectedValues((prev) => ({ ...prev, [id]: value }));
    setOpenDropdown(null);
  };
console.log(selectedValues);

  return (
    <div className="text-white py-6">
      <p className="text-4xl text-center mb-8">
        Trusted Matrimony & Matchmaking Service
      </p>
      <div className="options bg-[#83838369] flex items-center flex-wrap gap-3 p-4 rounded-md  z-10">
        <CustomSelect
          label="I'm looking for a"
          id="gender"
          options={["Man", "Woman"]}
          isOpen={openDropdown === "gender"}
          onToggle={handleToggle}
          selected={selectedValues.gender}
          onSelect={handleSelect}
        />

        <CustomSelect
          label="aged"
          id="ageFrom"
          options={numbers}
          width="w-24"
          isOpen={openDropdown === "ageFrom"}
          onToggle={handleToggle}
          selected={selectedValues.ageFrom}
          onSelect={handleSelect}
        />

        <p className="mt-7">to</p>

        <CustomSelect
          id="ageTo"
          options={numbers}
          width="w-24 mt-7"
          isOpen={openDropdown === "ageTo"}
          onToggle={handleToggle}
          selected={selectedValues.ageTo}
          onSelect={handleSelect}
        />

        <CustomSelect
          label="of religion"
          id="religion"
          options={religions}
          isOpen={openDropdown === "religion"}
          onToggle={handleToggle}
          selected={selectedValues.religion}
          onSelect={handleSelect}
        />

        <CustomSelect
          label="and mother tongue"
          id="language"
          options={languages}
          width="w-60"
          isOpen={openDropdown === "language"}
          onToggle={handleToggle}
          selected={selectedValues.language}
          onSelect={handleSelect}
        />
        <div className="mt-7">
          <button onClick={()=>setShowRegister(true)} className="cursor-pointer bg-cyan-500 text-white p-2 px-4 rounded hover:bg-cyan-600">
            Let's Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default LowerOfUpper;
