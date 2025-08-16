import React from "react";
import {
  FaRegHeart,
  FaShare,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";

const DeliveryInfo = () => {
  return (
    <>
      <div className="flex items-center !gap-2 !mb-2">
        <FaTruck className="text-green-600" />
        <span className="font-medium text-green-800">Delivery Information</span>
      </div>
      <div className="!space-y-2 text-sm text-green-700">
        <p>
          ✓ <strong>FREE Delivery</strong> by Tomorrow, Aug 16
        </p>
        <p>
          ✓ Fastest delivery <strong>Today</strong> with Prime membership
        </p>
        <p>✓ Cash on Delivery available</p>
      </div>
    </>
  );
};

export default DeliveryInfo;
