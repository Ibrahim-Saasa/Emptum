import React from "react";

const OTPVerification = ({ value, onChange }) => {
  // We use the 'value' (which is a string) passed from Verify.jsx
  // and turn it into an array to map over the 6 inputs
  const otpArray = value.split("").concat(Array(6).fill("")).slice(0, 6);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    // Create a new array, update the specific index, and join back to a string
    let newOtpArray = [...otpArray];
    newOtpArray[index] = element.value;
    const fullOtpString = newOtpArray.join("");

    // Send the updated string back to the parent Verify.jsx
    onChange(fullOtpString);

    // Auto-focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-lg !mt-4 bg-[#fdf9f9] border-2 border-[#0c8563]">
      <div className="!p-8 rounded-2xl shadow-md w-full max-w-md">
        <div className="flex !space-x-3 justify-center">
          {otpArray.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className="!w-12 !h-12 text-center border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
