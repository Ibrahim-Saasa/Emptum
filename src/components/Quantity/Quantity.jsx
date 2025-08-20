import React from "react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* <h3 className="text-sm font-medium text-gray-900 !mb-3">Quantity</h3> */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="!p-2 hover:bg-gray-100 transition-colors"
            disabled={quantity === 1}
          >
            <AiOutlineMinus className="w-4 h-4" />
          </button>
          <span className="!px-4 !py-2 border-x border-gray-300 min-w-[50px] text-center">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="!p-2 hover:bg-gray-100 transition-colors"
          >
            <AiOutlinePlus className="w-4 h-4" />
          </button>
        </div>
        {/* <span className="text-sm text-gray-600">
          {quantity > 5
            ? "5+ items"
            : `${quantity} item${quantity > 1 ? "s" : ""}`}{" "}
          in cart
        </span> */}
      </div>
    </div>
  );
};

export default Quantity;
