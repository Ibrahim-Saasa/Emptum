import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import secure from "../../assets/secure.png";
import { postData } from "../../utils/api";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false); // ✅ Added this
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const history = useNavigate();
  const context = useContext(MyContext);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("userEmail");

    if (!email) {
      context.openAlertBox("error", "Email not found. Please try again.");
      history("/login");
      return;
    }

    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please add new password");
      return;
    }
    if (formFields.newPassword.length < 12) {
      context.openAlertBox("error", "New Password should have 12 characters");
      return;
    }
    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Please confirm your password!");
      return;
    }
    if (formFields.confirmPassword !== formFields.newPassword) {
      context.openAlertBox("error", "The passwords do not match!");
      return;
    }

    // Start loading
    setIsLoading(true);
    setOpen(true);

    try {
      const res = await postData("/api/users/resetPassword", {
        email: email,
        newPassword: formFields.newPassword,
        confirmPassword: formFields.confirmPassword,
      });

      console.log("Reset Password Response:", res);

      if (res.success) {
        context.openAlertBox("success", "Password reset successfully!");
        // Clear stored email
        localStorage.removeItem("userEmail");
        // Clear form
        setFormFields({
          newPassword: "",
          confirmPassword: "",
        });
        // Navigate to login
        setTimeout(() => {
          history("/login");
        }, 1500);
      } else {
        context.openAlertBox("error", res.message || "Password reset failed");
      }
    } catch (error) {
      console.error("Reset Password error:", error);
      context.openAlertBox("error", "Something went wrong!");
    } finally {
      // Stop loading
      setIsLoading(false);
      setOpen(false);
    }
  };

  const validValue = Object.values(formFields).every((el) => el);

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[500px] !m-auto rounded-md bg-[#fff0f5] !p-5 !px-12">
          <div className="text-center flex items-center justify-center">
            <img src={secure} alt="forgot" className="w-[70px]" />
          </div>
          <h3 className="text-center text-[18px] text-[#000] font-[500] !mt-5">
            Reset Password
          </h3>
          <form className="w-full !mt-5" onSubmit={handleSubmit}>
            <div className="form-group w-full !mb-5 relative">
              <TextField
                type={showPassword === false ? "password" : "text"}
                id="password"
                label="New Password"
                variant="filled"
                className="w-full"
                name="newPassword"
                value={formFields.newPassword}
                onChange={onChangeInput}
              />
              <Button
                type="button"
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
                name="confirmPassword"
                value={formFields.confirmPassword}
                onChange={onChangeInput} // ✅ Changed from onClick
              />

              <Button
                type="button"
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
              <Button
                type="submit"
                disabled={!validValue || isLoading}
                className="form-btn w-full"
              >
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
            </div>
          </form>

          <Backdrop
            sx={(theme) => ({
              color: "#fff",
              zIndex: theme.zIndex.drawer + 1,
            })}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
