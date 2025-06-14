import React from "react";

const Options = ({
  category,
  proffesion,
  handleChange,
  field,
  setShowDegrees,
}) => {
  return (
    <>
      {" "}
      <div className="space-y-1">
        <p className="text-center">{category}</p>
        <div className="space-y-2">
          {proffesion.map((option, index) => {
            return (
              <p
                onMouseDown={() => {
                  handleChange(field, option);
                  setShowDegrees(false);
                }}
                key={index}
                className="px-2 py-1 bg-gray-200 border-1 border-gray-300 rounded-md hover:bg-sky-400 cursor-pointer"
              >
                {option}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Options;
