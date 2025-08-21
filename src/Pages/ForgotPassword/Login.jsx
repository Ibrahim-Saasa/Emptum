import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Divider, Typography } from "@mui/material";
import { MyContext } from "../../App";
import secure from "../../assets/secure.png";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const history = useNavigate();
  const context = useContext(MyContext);

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[500px] !m-auto rounded-md bg-[#fff0f5] !p-5 !px-12">
          <div className="text-center flex items-center justify-center">
            <img src={secure} alt="forgot" className="w-[70px]" />
          </div>
          <h3 className="text-center text-[18px] text-[#000] font-[500] !mt-5">
            Forgot Password
          </h3>
          <form className="w-full !mt-5">
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="password"
                label="New Password"
                variant="filled"
                className="w-full"
                name="name"
              />
              <Button
                className="!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword === false ? (
                  <IoMdEye className="text-[20px] text-[#0c8563] opacity-80" />
                ) : (
                  <IoMdEyeOff className="text-[20px] text-[#0c8563] opacity-80" />
                )}
              </Button>
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword2 === false ? "password" : "text"}
                id="conformPassword"
                label="Confirm Password"
                variant="filled"
                className="w-full"
                name="password"
              />

              <Button
                className="!absolute top-[10px] right-[5px] z-50 !w-[35px] !h-[35px] !min-w-[35px] !rounded-full"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 === false ? (
                  <IoMdEye className="text-[20px] text-[#0c8563] opacity-80" />
                ) : (
                  <IoMdEyeOff className="text-[20px] text-[#0c8563] opacity-80" />
                )}
              </Button>
            </div>

            <div className="flex items-center w-full !mt-5 !mb-5">
              <Button className="form-btn w-full">Change Password</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
