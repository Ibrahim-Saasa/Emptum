// import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { FaRegSquareMinus } from "react-icons/fa6";

const SideBar = ({ open, toggleDrawer }) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  // const openSubmenu = (index) => {
  //   if (submenuIndex === index) {
  //     setSubmenuIndex(null);
  //   } else {
  //     setSubmenuIndex(index);
  //   }
  // };
  // const openInnerSubmenu = (index) => {
  //   if (innerSubmenuIndex === index) {
  //     setInnerSubmenuIndex(null);
  //   } else {
  //     setInnerSubmenuIndex(index);
  //   }
  const openSubmenu = (index) => {
    setSubmenuIndex((prev) => {
      const next = prev === index ? null : index;
      console.log("toggle submenu:", { index, prev, next });
      return next;
    });
  };

  const openInnerSubmenu = (index) => {
    setInnerSubmenuIndex((prev) => {
      const next = prev === index ? null : index;
      console.log("toggle inner submenu:", { index, prev, next });
      return next;
    });
  };
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      className="sidebar"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h2 className="text-center text-bold text-[500] !p-5 flex items-center justify-between">
        Shop By Categories
        <IoMdCloseCircleOutline
          className="text-[20px] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h2>{" "}
      <Divider className="divider" />
      <div className="scroll">
        <ul
        // className="w-full"
        // className={`submenu ${submenuIndex === index ? "active" : ""}`}
        >
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Fashion
              </Button>
            </Link>
            {submenuIndex === 0 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubmenu(0);
                }}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubmenu(0);
                }}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full !pl-3">
                <li className="list-none relative">
                  {" "}
                  <Link to="/" className="w-full">
                    <Button className="w-full !justify-start !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubmenu(0);
                      }}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubmenu(0);
                      }}
                    />
                  )}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner-submenu w-full !pl-3">
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Footwear
                        </Link>
                      </li>
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Trousers
                        </Link>
                      </li>
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Casual
                        </Link>
                      </li>
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Jackets
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Jewellery
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Watches
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Outerwear
              </Button>
            </Link>
            {submenuIndex === 1 ? (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubmenu(1);
                }}
              />
            ) : (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  openSubmenu(1);
                }}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full !pl-3">
                <li className="list-none relative">
                  {" "}
                  <Link to="/" className="w-full">
                    <Button className="w-full !justify-start !text-left">
                      All Season Collection
                    </Button>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubmenu(1);
                      }}
                    />
                  ) : (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openInnerSubmenu(1);
                      }}
                    />
                  )}
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner-submenu w-full !pl-3">
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Summer
                        </Link>
                      </li>
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Winter
                        </Link>
                      </li>
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Fall
                        </Link>
                      </li>
                      <li className="list-none relative">
                        {" "}
                        <Link
                          to="/"
                          className="link w-full !justify-start !text-left !px-3 transition text-[14px]"
                        >
                          Spring
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Cosmetics
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Accessories
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Electronics
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Furniture
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Shoes
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">Bags</Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Stationary
              </Button>
            </Link>
          </li>
          <li className="list-none flex items-center">
            <Link to="/" className="w-full">
              <Button className="w-full !justify-start !text-left">
                Sports
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      {" "}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBar;
