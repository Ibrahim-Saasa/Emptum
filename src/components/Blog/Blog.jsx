import React from "react";
import { LuClock2 } from "react-icons/lu";
import "../Blog/blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blogItem group cursor-pointer ">
      <div className="imgwrapper w-full overflow-hidden !rounded-md !relative">
        <img
          src="https://www.urbanwood.in/image/catalog/blogs/1260h-teak-wood-living-room-furniture-1051780.jpg"
          alt="img"
          className="w-full transition-all group-hover:scale-105 "
        />
        <span className="flex items-center justify-center absolute bottom-[15px] right-[15px] z-[9999] text-black bg-amber-300 px-2 !p-1 rounded text-[12px] !font-[500] gap-1">
          <LuClock2 className="text-[16px]" /> 5 APRIL 2023
        </span>
      </div>

      <div className="info !py-5">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            What style suits best for your home? Check these predefined homes to
            your taste!
          </Link>
        </h2>
        <p className="text-[12px] font-[400] text-[#455254] !mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quidem
          sequi omnis quis ipsam voluptatibus necessitatibus esse...
        </p>
        <Link
          to="/"
          className="link text-underline hover:underline font-[500] text-[14px]"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blog;
