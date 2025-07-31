import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Navigation = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsOpenSideBar(open);
  };

  return (
    <>
      <nav className="!py-2">
        <div className="container flex items-center justify-between gap-8 px-6">
          <div className="col-1 w-[20%]">
            <Button
              className="!text-black !p-2 w-full"
              onClick={toggleDrawer(true)}
            >
              <div className="w-full flex items-center justify-between gap-5">
                <div className="flex items-center gap-2">
                  <TfiMenuAlt className="text-[18px]" />
                  <span>SHOP BY CATEGORIES</span>
                </div>
                <IoIosArrowDropdown className="text-[18px]" />
              </div>
            </Button>
          </div>

          <div className="col-2 w-[60%]">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Home</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Fashion</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Elecronic</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Bags</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Footwear</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Groceries</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Beauty</Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Jewellery</Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-3 w-[20%]">
            <p className="text-[14px]">Free Delivery In India</p>
          </div>
        </div>
      </nav>

      <SideBar
        toggleDrawer={toggleDrawer}
        open={isOpenSideBar}
        // setIsOpenSideBar={setIsOpenSideBar}
      />
    </>
  );
};

export default Navigation;
