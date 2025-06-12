import React from "react";

const CustomSelect = ({
  label,
  options,
  width = "w-40",
  isOpen,
  onToggle,
  selected,
  onSelect,
  id,
}) => {
  return (
    <div className="relative">
      {label && <p className="mb-1">{label}</p>}
      <div
        className={`bg-white p-1 flex justify-between items-center rounded-sm text-gray-700 cursor-pointer ${width}`}
        onClick={() => onToggle(id)}
      >
        <span>{selected}</span>
        <i
          className={`${
            isOpen
              ? "ri-arrow-drop-up-fill text-2xl"
              : "ri-arrow-drop-down-fill text-2xl"
          }`}
        ></i>
      </div>

      {isOpen && (
        <div
          className={`absolute mt-1 bg-white border rounded shadow max-h-40 overflow-y-auto z-20 ${width}`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 hover:bg-sky-500 hover:text-white text-gray-500 cursor-pointer"
              onClick={() => onSelect(id, option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
