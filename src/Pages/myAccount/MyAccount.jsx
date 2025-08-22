import React from "react";
import me from "../../assets/me.jpg";
import { LuUpload } from "react-icons/lu";
import { Button, Divider } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";

const MyAccount = () => {
  return (
    <section className="!py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[25%]">
          <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md !p-5">
            <div className="w-full !p-3 flex items-center justify-center flex-col">
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden !mb-4 relative">
                <img
                  src={me}
                  alt="user"
                  className="w-full h-full object-cover"
                />
                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer">
                  <LuUpload className="text-[#fff0f5] text-[30px]" />
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0"
                  />
                </div>
              </div>
              <h3>Ibrahim Saasa</h3>
            </div>
            <Divider className="divider" />
            <ul className="list-none !mt-5 !pb-5">
              <li className="w-full">
                <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start">
                  <FaRegUserCircle className="text-[20px]" />
                  User Profile
                </Button>
              </li>
              <li className="w-full">
                <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start">
                  <FaRegUserCircle className="text-[20px]" />
                  User Profile
                </Button>
              </li>
              <li className="w-full">
                <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start">
                  <FaRegUserCircle className="text-[20px]" />
                  User Profile
                </Button>
              </li>
              <li className="w-full">
                <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start">
                  <FaRegUserCircle className="text-[20px]" />
                  User Profile
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
