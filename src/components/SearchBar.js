import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const SearchBar = ({ setSearch, setCurrentPage }) => {
  return (
    <div className="mx-20">
      <div className="py-2">
        <div className="mx-2 p-2 rounded-lg bg-blue-100 drop-shadow-lg flex items-center justify-between">
          <div className="font-semibold text-xl px-4">STAZI</div>
          <form className="pl-32">
            <div className="bg-white rounded-lg flex items-center px-2 border-2 border-gray-300 border-solid">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 w-[20rem] !outline-none"
                onChange={(event) => {
                  setSearch(event.target.value);
                  setCurrentPage(1);
                }}
              />
              <PiMagnifyingGlassBold className="text-xl" />
            </div>
          </form>
          <div className="flex items-center justify-center">
            <div className="px-2 flex items-center">
              Relevance <IoMdArrowDropdown />
            </div>
            <div className="pr-4 flex items-center">
              All Brands <IoMdArrowDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
