import React from "react";
import insurance from "../../assets/insurance.png";
import OTPVerification from "../../components/OtpVerification/OtpVerification";

const Verify = () => {
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
            <span className="text-[#0c8563]">ibrahimsaasa@gmail.com</span>
          </p>
          <OTPVerification />
        </div>
      </div>
    </section>
  );
};

export default Verify;
