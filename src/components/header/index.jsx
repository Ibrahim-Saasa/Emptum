import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "../search";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./navigation";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-green-200 border-b-[1px]">
        <div className="container !p-[10px]">
          <div className="flex items-center justify-between">
            <div className="col1 w-[75%]  ">
              <p className="text-[14px]">
                Get upto 50% off on seasonal styles, limited time offer only!
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-green-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img
                src="../src/assets/gpt.png
              "
                className="w-[100px]"
              />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center !pl-7 ">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[16px] font-[400]"
                >
                  Login
                </Link>{" "}
                | &nbsp;
                <Link
                  to="/register"
                  className="link transition text-[16px] font-[400]"
                >
                  Register
                </Link>
              </li>

              <li>
                <Tooltip title="Cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IconButton aria-label="cart" className="icon">
                      <MdOutlineShoppingCart />
                    </IconButton>
                  </StyledBadge>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Compare">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IconButton aria-label="compare" className="icon">
                      <IoIosGitCompare />
                    </IconButton>
                  </StyledBadge>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wish List">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IconButton aria-label="Wish List" className="icon">
                      <FaRegHeart />
                    </IconButton>
                  </StyledBadge>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation></Navigation>
    </header>
  );
};

export default Header;
