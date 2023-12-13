import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    className="w-full  md:w-[50%] p-4 rounded-lg bg-[#DFDFDF] text-black text-2xl font-semibold placeholder:text-xl placeholder:sm:text-2xl placeholder:font-semibold "
    type="text"
    placeholder="Search Courses"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
