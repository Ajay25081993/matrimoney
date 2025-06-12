import React, { useState } from "react";
import { label } from "./label";

const HobbyInterest = () => {
  const [selected, setSelected] = useState({
    creative: [],
    fun: [],
    fitness: [],
    others: [],
  });

  const totalSelectedCount =
    selected.creative.length +
    selected.fun.length +
    selected.fitness.length +
    selected.others.length;

  const onNext = () => {
    console.log("Selected hobbies:", selected);
    // navigate or API call
  };

  const handleSelect = (section, item) => {
    const sectionSelected = selected[section];
    const isAlreadySelected = sectionSelected.includes(item.title);

    if (isAlreadySelected) {
      // deselect
      const newSectionSelected = sectionSelected.filter(
        (title) => title !== item.title
      );
      setSelected({ ...selected, [section]: newSectionSelected });
    } else {
      if (sectionSelected.length >= 2 || totalSelectedCount >= 5) return;

      setSelected({
        ...selected,
        [section]: [...sectionSelected, item.title],
      });
    }
  };

  const isSelected = (section, item) => selected[section].includes(item.title);

  return (
    <div className="mt-30 mb-10 w-full flex-col gap-4 flex justify-center items-center">
      <div className="shadow-sm shadow-gray-600 bg-white w-3xl rounded-md flex justify-center items-center gap-4 flex-col px-5 ">
        <p className="text-xl font-bold mt-6">
          Now let's add hobbies & interests
        </p>

        <div className="h-150 overflow-y-auto space-y-4 py-2">
          {label.map((section) => (
            <div
              key={section.key}
              className="cursor-pointer bg-gray-50 p-2 space-y-2 border-1 border-gray-100 shadow-md shadow-gray-300 w-130 rounded-md"
            >
              <p className="text-xl font-bold">{section.label}</p>
              <div className="flex flex-wrap gap-2">
                {section.data.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(section.key, option)}
                  >
                    <div
                      className={`border-1 border-gray-200 px-2 py-1 rounded-full flex items-center justify-center gap-1 ${
                        isSelected(section.key, option)
                          ? "bg-pink-300"
                          : "hover:bg-sky-200"
                      }`}
                    >
                      <span className="material-symbols-outlined text-center text-pink-700 !text-sm">
                        {option.icon}
                      </span>
                      <p className="text-sm font-semibold">{option.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="py-1 w-full mb-1 flex justify-center">
          <button
            onClick={onNext}
            disabled={totalSelectedCount !== 5}
            className={` cursor-pointer px-8 py-3 rounded-full w-1/3 text-md text-white font-semibold text-shadow-xs text-shadow-black ${
              totalSelectedCount === 5
                ? "bg-green-500"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Save & Continue <span>({totalSelectedCount}/5)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HobbyInterest;
