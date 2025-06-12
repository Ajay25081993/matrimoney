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
                className="p-1 rounded-md hover:bg-sky-400 cursor-pointer"
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
