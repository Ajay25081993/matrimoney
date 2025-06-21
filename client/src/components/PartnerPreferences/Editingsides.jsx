import React, { useState } from "react";
import { allFields } from "./field";

const Editingsides = ({ scrollTargets }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [tempValue, setTempValue] = useState("");

  const openModal = (field) => {
    setCurrentField(field);
    setTempValue(field.value);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentField(null);
    setTempValue("");
  };

  const handleInputChange = (e) => setTempValue(e.target.value);
  const handleSelectChange = (key, value) =>
    setTempValue((prev) => ({ ...prev, [key]: value }));
  const handleCheckboxChange = (e) =>
    setTempValue((prev) => ({ ...prev, compulsory: e.target.checked }));

  const saveChanges = () => {
    if (currentField) {
      currentField.value = tempValue;
    }
    closeModal();
  };

  const renderModalFields = () => {
    if (typeof tempValue === "object" && tempValue !== null) {
      return (
        <>
          {"from" in tempValue && (
            <div>
              <label className="text-sm font-medium">From</label>
              <select
                value={tempValue.from}
                onChange={(e) =>
                  handleSelectChange("from", parseInt(e.target.value))
                }
                className="w-full border border-gray-300 p-2 mt-1 rounded"
              >
                {Array.from({ length: 83 }, (_, i) => 18 + i).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          )}
          {"to" in tempValue && (
            <div>
              <label className="text-sm font-medium">To</label>
              <select
                value={tempValue.to}
                onChange={(e) =>
                  handleSelectChange("to", parseInt(e.target.value))
                }
                className="w-full border border-gray-300 p-2 mt-1 rounded"
              >
                {Array.from({ length: 83 }, (_, i) => 18 + i).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          )}
          {"compulsory" in tempValue && (
            <div className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                checked={tempValue.compulsory}
                onChange={handleCheckboxChange}
              />
              <div>
                <label className="font-medium">Compulsory</label>
                <p className="text-xs text-gray-500">
                  Mark as compulsory to get matches exactly as per the specified
                  criteria
                </p>
              </div>
            </div>
          )}
        </>
      );
    }
    return (
      <input
        type="text"
        value={tempValue}
        onChange={handleInputChange}
        className="w-full border border-gray-300 p-2 mt-1 rounded"
      />
    );
  };

  return (
    <div className="relative w-2xl border border-gray-200 rounded-md">
      <div className="p-5">
        <h2 className="font-bold text-xl">Partner Preferences</h2>
        <div className="mt-3 text-sm space-y-1">
          <p>
            Matches recommended by us are based on{" "}
            <span className="font-semibold">Acceptable matches</span> criteria.
          </p>
          <p>
            Turn on "Compulsory" to get matches exactly as per your preferences.
          </p>
          <p className="text-xs text-gray-300 mt-2">*patent pending</p>
        </div>
      </div>

      <div className="p-10 space-y-7">
        {allFields.map((allField, index) => (
          <div
            key={index}
            ref={scrollTargets[allField.mainHeading]}
            className="scroll-mt-[130px]"
          >
            <div className="flex items-center mb-4">
              <i className={`text-5xl ${allField.icon}`}></i>
              <h3 className="ml-5 text-3xl font-semibold">
                {allField.mainHeading}
              </h3>
            </div>
            {allField.value.map((field, subIndex) => (
              <div key={subIndex}>
                <div className="text-sm p-3 flex w-full justify-between items-center">
                  <div>
                    <p>{field.label}</p>
                    <p className="font-semibold">{field.value}</p>
                  </div>
                  <i
                    className="ri-pencil-fill cursor-pointer"
                    onClick={() => openModal(field)}
                  ></i>
                </div>
                <hr className="ml-3 text-gray-300" />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#00000025] flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] space-y-4 relative">
            <h2 className="text-xl font-bold">{currentField?.label}</h2>
            <div className="space-y-3">{renderModalFields()}</div>
            <div className="flex justify-end mt-5 space-x-3">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="px-4 py-2 bg-[#fda502] text-white rounded hover:bg-[#e09400]"
              >
                SUBMIT
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-xl text-gray-500 hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Editingsides;
