import React, { useContext, useState } from "react";
import { LuUpload } from "react-icons/lu";
import { Button, Divider, TextField } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import "react-country-state-city/dist/react-country-state-city.css";
import { MyContext } from "../../App";
import { editData, uploadFile } from "../../utils/api.js";
import { PiAddressBookLight } from "react-icons/pi";

const AccountSideBar = () => {
  const navigate = useNavigate();
  const [previews, setPreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const context = useContext(MyContext);
  let img_arr = [];
  let uniqueArray = [];
  let selectedImages = [];
  const onChangeFile = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Validate file types
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

      if (!validTypes.includes(file.type)) {
        context.openAlertBox(
          "error",
          "Only PNG, JPG, JPEG, or WEBP images are allowed",
        );
        return;
      }
    }

    // Start loading
    setOpen(true);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("avatar", files[0]); // Only send first file

      console.log("Uploading file...");

      const res = await uploadFile("/api/users/userProfile", formData);

      console.log("Upload response:", res);

      if (res.success) {
        context.openAlertBox(
          "success",
          "Profile picture updated successfully!",
        );

        // ✅ Update user data in context with new avatar
        context.setUserData({
          ...context.userData,
          avatar: res.profileImage,
        });
      } else {
        context.openAlertBox("error", res.message || "Upload failed");
      }
    } catch (error) {
      console.error("Upload error:", error);
      context.openAlertBox("error", "Upload failed. Please try again.");
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };
  const logout = async () => {
    setAnchorEl(null);

    try {
      await fetchDataFromApi("/api/users/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.warn("Logout API failed, logging out locally");
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    context.setIsLogin(false);
    context.setUserData(null);

    navigate("/#", { replace: true });
  };

  return (
    <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md !p-5 sticky top-[10px]">
      {/* Backdrop should be at the top level, not inside the image div */}
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
        })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="w-full !p-3 flex items-center justify-center flex-col">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden !mb-4 relative group">
          {context?.userData?.avatar ? (
            // ✅ Show uploaded avatar if it exists
            <img
              src={context.userData.avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            // ✅ Show default icon if no avatar
            <MdAccountCircle className="!w-full !h-full text-[#0c8563]" />
          )}

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.6)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <LuUpload className="text-[#fff0f5] text-[30px]" />
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => onChangeFile(e)}
              name="avatar"
              accept="image/*"
            />
          </div>
        </div>
        <h3>{context?.userData?.name}</h3>
        <h6 className="text-[13px] text-gray-700">
          {context?.userData?.email}
        </h6>
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
          <NavLink to="/address" exact={true} activeClassName="isActive">
            <Button className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start hover:!text-[#0c8563]">
              <PiAddressBookLight className="text-[25px]" />
              Address
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
          <Button
            onClick={logout}
            className="flex items-center gap-2 w-full !text-[#000] !capitalize !text-left !px-5 !justify-start hover:!text-[#0c8563]"
          >
            <IoLogOutOutline className="text-[25px]" />
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default AccountSideBar;
