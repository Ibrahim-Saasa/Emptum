import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Divider, Typography } from "@mui/material";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [phone, setPhone] = useState("");

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[500px] !m-auto rounded-md bg-[#fff0f5] !p-5 !px-12">
          <h3 className="text-center text-[18px] text-[#000] font-[500]">
            Sign Up
          </h3>
          <form className="w-full !mt-5">
            <div className="form-group w-full !mb-5 ">
              <TextField
                type="text"
                id="name"
                label="Full Name"
                variant="filled"
                className="w-full !mb-5"
              />

              <PhoneInput
                country={null} // default country
                value={phone}
                onChange={setPhone}
                enableSearch
                inputClass="mui-input custom-phone-input"
                buttonClass="mui-button"
                containerClass="mui-container"
                placeholder="Phone No."
                inputStyle={{
                  width: "100%",
                  height: "56px", // same as MUI TextField
                  borderRadius: "4px",
                  // border: "1px solid #c4c4c4",
                  fontSize: "16px",
                  paddingLeft: "50px", // so flag doesn’t overlap text
                  background: "rgba(0,0,0,0.06)",
                }}
              />
              <TextField
                type="email"
                id="email"
                label="Email Id"
                variant="filled"
                className="w-full !mt-5"
              />
            </div>
            <div className="form-group w-full relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="password"
                label="Password"
                variant="filled"
                className="w-full !mb-5"
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
                id="confirmPassword"
                label="Confirm Password"
                variant="filled"
                className="w-full"
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
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
                className="!mt-5"
              />
            </div>

            <div className="flex items-center w-full !mt-5 !mb-5">
              <Button className="form-btn w-full">Sign Up</Button>
            </div>
            <p className="text-center !mb-5">
              Already Have an Account{" "}
              <Link
                to="/login"
                className="link text-[14px] font-[600] !ml-5 text-[#0c8563]"
              >
                Login
              </Link>
            </p>

            <Divider sx={{ my: 3 }}>
              <Typography variant="body2" color="text.secondary">
                OR
              </Typography>
            </Divider>
            <Button className="flex gap-3 w-full !bg-[#eae5e5] !border-2 !border-[#0c8563] !text-black !mb-2">
              <FcGoogle className="text-[20px]" /> Sign In with Google
            </Button>
            <Button className="flex gap-3 w-full !bg-[#eae5e5] !border-2 !border-[#0c8563] !text-black">
              <FaFacebook className="text-[20px] !text-[#4267B2]" /> Sign In
              with Facebook
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
