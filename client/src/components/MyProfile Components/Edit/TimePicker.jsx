import React from "react";

const TimePicker = ({setFormData, birthTime}) => {
  const hours = Array.from({ length: 12 }, (_, i) =>
    String(i + 1).padStart(2, "0")
  );
  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );
  const periods = ["AM", "PM"];

  const handleChange = (key, newValue) => {
   setFormData((prev) => ({
  ...prev,
  birthTime: {
    ...prev.birthTime,
    [key]: newValue,
  },
}));
  }

  return (
    <div className="flex items-center gap-2">
      <select
        value={birthTime.hour}
        onChange={(e) => handleChange("hour", e.target.value)}
        className="border border-gray-300 p-2 rounded-sm"
      >
        <option value="">HH</option>
        {hours.map((h) => (
          <option key={h} value={h}>
            {h}
          </option>
        ))}
      </select>
      <span className="text-gray-500">:</span>
      <select
        value={birthTime.min}
        onChange={(e) => handleChange("min", e.target.value)}
        className="border border-gray-300 p-2 rounded-sm"
      >
        <option value="">MM</option>
        {minutes.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
      <span className="text-gray-500">:</span>
      <select
        value={birthTime.period}
        onChange={(e) => handleChange("period", e.target.value)}
        className="border border-gray-300 p-2 rounded-sm"
      >
        <option value="">AM/PM</option>
        {periods.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TimePicker;
