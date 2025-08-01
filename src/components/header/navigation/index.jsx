import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import "../navigation/style.css";

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
            <ul className="flex items-center gap-5 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Home</Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[400]">
                  <Button className="!link transition">Fashion</Button>
                </Link>
                <div className="submenu absolute top-[100%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="link w-full">
                        <Button className="!rounded-none !w-full">Men</Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="link w-full">
                                <Button className="!rounded-none !w-full">
                                  T-Shirts
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="link w-full">
                                <Button className="!rounded-none !w-full">
                                  Denim
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="link w-full">
                                <Button className="!rounded-none !w-full">
                                  Boots
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="link w-full">
                                <Button className="!rounded-none !w-full">
                                  Underwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="link w-full">
                                <Button className="!rounded-none !w-full">
                                  Infants
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link w-full">
                        <Button className="!rounded-none !w-full">Woman</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link w-full">
                        <Button className="!rounded-none !w-full">Boys</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link w-full">
                        <Button className="!rounded-none !w-full">Girls</Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="link w-full">
                        <Button className="!rounded-none !w-full">
                          Infants
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
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
