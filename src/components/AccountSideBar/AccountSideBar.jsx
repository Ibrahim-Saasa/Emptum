import React from "react";
import { LuUpload } from "react-icons/lu";
import { Button, Divider, TextField } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";

import "react-country-state-city/dist/react-country-state-city.css";

const AccountSideBar = () => {
  return (
    <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md !p-5 sticky top-[10px]">
      <div className="w-full !p-3 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden !mb-4 relative group">
          <MdAccountCircle className="!w-full !h-full text-[#0c8563]" />
          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer opacity-0 tranistion-all group-hover:opacity-100">
            <LuUpload className="text-[#fff0f5] text-[30px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
            />
          </div>
        </div>
        <h3>Ibrahim Saasa</h3>
        <h6 className="text-[13px] text-gray-700">ibrahimsaasa@gmail.com</h6>
      </div>
      <Divider className="divider" />
      <ul className="list-none !mt-5 !pb-5 myAccountTabs !space-y-1">
        <li className="w-full">
          <NavLink to="/my-account" exact={true} activeClassName="isActive">
            <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start hover:!text-[#0c8563]">
              <FaRegUserCircle className="text-[20px]" />
              User Profile
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-list" exact={true} activeClassName="isActive">
            <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start hover:!text-[#0c8563]">
              <FaRegHeart className="text-[20px]" />
              My List
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/my-orders" exact={true} activeClassName="isActive">
            <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start hover:!text-[#0c8563]">
              <FaShoppingBag className="text-[20px]" />
              My Orders
            </Button>
          </NavLink>
        </li>
        <li className="w-full">
          <NavLink to="/logout" exact={true} activeClassName="isActive">
            <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start hover:!text-[#0c8563]">
              <IoLogOutOutline className="text-[25px]" />
              Logout
            </Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
