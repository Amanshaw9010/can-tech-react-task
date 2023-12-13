import React from "react";

const CourseButton = ({ type, setSelectedType, selectedType }) => (
  <button
    onClick={() => setSelectedType(type)}
    className={`px-4 py-2 mx-2 rounded text-2xl font-semibold text-capitalize  ${
      type === selectedType
        ? "bg-gradient-to-br from-purple-600 to-blue-500 text-white"
        : "bg-none text-black"
    }`}
  >
    {type}
  </button>
);

export default CourseButton;
