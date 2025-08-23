import React, { useContext } from "react";
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
import { MyContext } from "../../App";
import logo from "../../assets/gpt.png";
import { Button } from "@mui/material";
import { MdAccountCircle } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const context = useContext(MyContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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

      <div className="header border-b-[1px] border-green-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[20%]">
            <Link to="/">
              <img src={logo} className="w-[45%]" />
            </Link>
          </div>
          <div className="col2 w-[50%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex items-center !pl-7 ">
            <ul className="flex items-center justify-end gap-3 w-full">
              {context.isLogin === false ? (
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
              ) : (
                <>
                  <Button
                    className="!text-[#0c8563] myAccount flex items-center gap-3 cursor-pointer"
                    onClick={handleClick}
                  >
                    <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full ">
                      <MdAccountCircle className="!text-[40px] text-[#0c8563]" />
                    </Button>
                    <div className="info flex flex-col">
                      <h4 className="leading-3 text-[14px] font-[500] capitalize text-left justify-start text-[#000]">
                        Ibrahim Saasa
                      </h4>
                      <span className="text-[12px] capitalize text-left justify-start text-[#000]">
                        ibrahimsaasa@gmail.com
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          bgcolor: "#fff0f5",
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "#fff0f5",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 hover:!text-[#0c8563]"
                      >
                        <FaRegUserCircle className="text-[18px] " /> My Account
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 hover:!text-[#0c8563]"
                      >
                        <FaShoppingBag className="text-[18px] " /> Orders
                      </MenuItem>
                    </Link>
                    <Link to="/settings" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 hover:!text-[#0c8563]"
                      >
                        <IoMdSettings className="text-[18px] " /> Settings
                      </MenuItem>
                    </Link>
                    <Link to="/logout" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 !py-2 hover:!text-[#0c8563]"
                      >
                        <IoLogOutOutline className="text-[18px] " /> Logout
                      </MenuItem>
                    </Link>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Wish List">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IconButton aria-label="Wish List" className="icon">
                      <FaRegHeart className="text-[20px]" />
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
                <Tooltip title="Cart">
                  <StyledBadge badgeContent={4} color="secondary">
                    <IconButton
                      aria-label="cart"
                      className="icon"
                      onClick={() => context.setOpen(true)}
                    >
                      <MdOutlineShoppingCart />
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
