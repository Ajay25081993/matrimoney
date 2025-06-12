import React, { useState } from "react";

const FamilyIncome = () => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleSelect = (value) => {
    setSelectedStatus(value);
  };

  const options = ["Elite", "High", "Middle", "Aspiring"];

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-4 flex-col p-5">
        <div className="w-full flex justify-center">
          <i className="ri-group-3-line text-purple-500 w-20 h-20 text-5xl text-shadow-md text-shadow-purple-400 flex justify-center items-center bg-purple-200 rounded-full"></i>
        </div>
        <p className="text-2xl font-semibold">Add family details</p>

        <div className="w-1/2 space-y-2">
          <p>Your Family's financial Status</p>

          <div className="space-y-2">
            {options.map((option) => (
              <div
                key={option}
                className={`border-1 border-gray-300 rounded-md`}
              >
                <label
                  className={`${
                    selectedStatus === option
                      ? "border-purple-500 bg-purple-500 "
                      : ""
                  } flex items-center gap-2 cursor-pointer p-2 rounded-t-md`}
                >
                  <input
                    type="radio"
                    name="financialStatus"
                    value={option}
                    checked={selectedStatus === option}
                    onChange={() => handleSelect(option)}
                  />
                  {option}
                </label>

                {/* Conditional content */}
                {selectedStatus === option && option === "Elite" && (
                  <div className="p-2 rounded-md bg-gray-100 text-gray-700 space-y-2">
                    {/* You can put any extra input, message or details here */}
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500 !text-sm !font-semibold">
                        work
                      </span>{" "}
                      <p className="text-sm">
                        Family runs a large business or is from an exceptional
                        professional background
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500  !text-sm !font-semibold">
                        home
                      </span>
                      <p className="text-sm">
                        Family owns very high value assets & properties
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined !text-sm !font-semibold">
                        currency_rupee
                      </span>
                      <p className="text-sm">
                        Annual family income is above 70 lakhs
                      </p>
                    </div>
                  </div>
                )}
                {selectedStatus === option && option === "High" && (
                  <div className="p-2 rounded-md bg-gray-100 text-gray-700 space-y-2">
                    {/* You can put any extra input, message or details here */}
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500 !text-sm !font-semibold">
                        work
                      </span>{" "}
                      <p className="text-sm">
                        Family runs a mid-sized business or employed at leadership positions.


                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500  !text-sm !font-semibold">
                        home
                      </span>
                      <p className="text-sm">
                       Family owns property & high value assets


                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined !text-sm !font-semibold">
                        currency_rupee
                      </span>
                      <p className="text-sm">
                        Annual family income is 30-70 lakhs
                      </p>
                    </div>
                  </div>
                )}
                {selectedStatus === option && option === "Middle" && (
                  <div className="p-2 rounded-md bg-gray-100 text-gray-700 space-y-2">
                    {/* You can put any extra input, message or details here */}
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500 !text-sm !font-semibold">
                        work
                      </span>{" "}
                      <p className="text-sm">
                        Family runs a small business or have office jobs

                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500  !text-sm !font-semibold">
                        home
                      </span>
                      <p className="text-sm">
                        Family owns a vehicle, house & some assets

                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined !text-sm !font-semibold">
                        currency_rupee
                      </span>
                      <p className="text-sm">
                        Annual family income is 10-30 lakhs
                      </p>
                    </div>
                  </div>
                )}
                {selectedStatus === option && option === "Aspiring" && (
                  <div className="p-2 rounded-md bg-gray-100 text-gray-700 space-y-2">
                    {/* You can put any extra input, message or details here */}
                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined text-gray-500 !text-sm !font-semibold">
                        work
                      </span>{" "}
                      <p className="text-sm">
                        Family has limited means, but is striving for a better
                        lifestyle
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span class="material-symbols-outlined !text-sm !font-semibold">
                        currency_rupee
                      </span>
                      <p className="text-sm">
                        Annual family income is up to 10 lakhs
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyIncome;
