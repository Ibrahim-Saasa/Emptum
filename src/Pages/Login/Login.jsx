import React, { useContext, useEffect, useState } from "react";
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
import { postData } from "../api";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [formFields, setFormFields] = useState({ email: "", password: "" });
  const history = useNavigate();
  const context = useContext(MyContext);
  const forgotPassword = () => {
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter your Email");
      return false;
    } else {
      context.openAlertBox("success", "Please enter the code");
      localStorage.setItem("userEmail", formFields.email);
      localStorage.setItem("userEmail", formFields.email);
      history("/verify");
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };
  const { confirmPassword, ...payload } = formFields;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formFields.email === "") {
      context.openAlertBox("error", "Please add Email!");
      return;
    }
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password!");
      return;
    }

    // Start loading
    setIsLoading(true);
    setOpen(true); // Open the backdrop

    try {
      const res = await postData("/api/users/login", payload, {
        withCredentials: true,
      });
      console.log("Response:", res);

      if (res.success) {
        context.openAlertBox("success", res.message);
        localStorage.setItem("userEmail", formFields.email);
        setFormFields({
          email: "",
          password: "",
        });
        localStorage.setItem("accessToken", res?.data?.accessToken);
        localStorage.setItem("refreshToken", res?.data?.refreshToken);
        context.setIsLogin(true);
        history("/#");
        // Navigate to verify email or login
      } else {
        context.openAlertBox("error", res.message || "Registration failed");
      }
    } catch (error) {
      console.error("Submit error:", error);
      context.openAlertBox("error", "Something went wrong!");
    } finally {
      // Stop loading
      setIsLoading(false);
      setOpen(false); // Close the backdrop
    }
  };
  const validValue = Object.values(formFields).every((el) => el);
  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[500px] !m-auto rounded-md bg-[#fff0f5] !p-5 !px-12">
          <h3 className="text-center text-[18px] text-[#000] font-[500]">
            Login To Your Account
          </h3>
          <form className="w-full !mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full !mb-5">
              <TextField
                type="email"
                id="email"
                name="email"
                onChange={onChangeInput}
                value={formFields.email}
                label="Email Id"
                variant="filled"
                className="w-full"
              />
            </div>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="password"
                label="Password"
                variant="filled"
                onChange={onChangeInput}
                className="w-full"
                name="password"
                value={formFields.password}
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Remember me"
                className="!mt-5"
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

            <Link
              to="/verify"
              className="link text-[14px] font-[600]"
              onClick={forgotPassword}
            >
              Forgot Password?
            </Link>
            <div className="flex items-center w-full !mt-5 !mb-5">
              <Button
                type="submit"
                disabled={!validValue || isLoading}
                className="form-btn w-full"
              >
                {isLoading ? "Logging in..." : "Login"}{" "}
              </Button>
            </div>

            <Backdrop
              sx={(theme) => ({
                color: "#fff",
                zIndex: theme.zIndex.drawer + 1,
              })}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <p className="text-center !mb-5">
              Not Registered{" "}
              <Link
                to="/register"
                className="link text-[14px] font-[600] !ml-5 text-[#0c8563]"
              >
                Sign Up
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

export default Login;
