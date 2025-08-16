import React from "react";
import "./search.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#fdf9f9] border-[#0c8563] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="search for products..."
        className="w-full h-[50px] focus:outline-none text-[15px]"
      />
      <Button className="!absolute z-50 top-[5px] right-[5px] w-[50px] !min-w-[35px] h-[40px] !rounded-full">
        <IoSearch className="text-[#3c3b3b] text-[20px]" />
      </Button>
    </div>
  );
};

export default Search;
