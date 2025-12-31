import React, { useState, useContext } from "react";
import insurance from "../../assets/insurance.png";
import OTPVerification from "../../components/OtpVerification/OtpVerification";
import { postData } from "../../utils/api"; // ✅ Import postData
import { MyContext } from "../../App"; // ✅ Import context for alerts
import { useNavigate } from "react-router-dom"; // ✅ For navigation

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = async (e) => {
    e.preventDefault();

    const email = localStorage.getItem("userEmail");
    const actionType = localStorage.getItem("actionType"); // Check if it's email verification or forgot password

    if (!email) {
      context.openAlertBox("error", "Email not found. Please try again.");
      return;
    }

    if (!otp || otp.length !== 6) {
      context.openAlertBox("error", "Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);

    try {
      let endpoint = "/api/users/verify-email"; // Default for email verification

      // If forgot password, use different endpoint
      if (actionType === "forgotPassword") {
        endpoint = "/api/users/forgotPasswordOtp";
      }

      const res = await postData(endpoint, {
        email: email,
        verifyCode: otp,
      });

      console.log("Verify Response:", res);

      if (res.success) {
        context.openAlertBox("success", res.message);

        if (actionType === "forgotPassword") {
          // Navigate to reset password page
          localStorage.removeItem("actionType");
          setTimeout(() => {
            navigate("/forgotPassword");
          }, 1500);
        } else {
          // Navigate to login for email verification
          localStorage.removeItem("userEmail");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      } else {
        context.openAlertBox("error", res.message || "Verification failed");
      }
    } catch (error) {
      console.error("Verification error:", error);
      context.openAlertBox("error", "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="section !py-10">
      <div className="container">
        <div className="card shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[500px] !m-auto rounded-md bg-[#fff0f5] !p-5 !px-12">
          <div className="text-center flex items-center justify-center">
            <img src={insurance} alt="insurance" className="w-[80px]" />
          </div>
          <h3 className="text-center text-[18px] text-[#000] font-[500] !mt-4">
            Verify OTP
          </h3>
          <p className="text-center !mt-5">
            OTP Sent to{" "}
            <span className="text-[#0c8563]">
              {localStorage.getItem("userEmail") || "your email"}
            </span>
          </p>
          <form onSubmit={verifyOTP}>
            <OTPVerification
              onChange={handleOtpChange} // Pass the handler
              value={otp}
            />
            <button
              type="submit"
              disabled={isLoading || otp.length !== 6}
              className="form-btn !p-3 rounded-[5px] w-full !mt-5"
            >
              {isLoading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
