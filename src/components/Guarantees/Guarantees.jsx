import React from "react";
import {
  FaRegHeart,
  FaShare,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";
import { MdOutlineCompareArrows, MdLocalShipping } from "react-icons/md";

const Guarantees = () => {
  return (
    <div className="grid grid-cols-3 !gap-4 !py-4 border-t border-gray-200">
      <div className="flex flex-col items-center text-center">
        <FaShieldAlt className="w-6 h-6 text-green-700 !mb-2" />
        <span className="text-xs font-medium text-gray-900">
          2 Year Warranty
        </span>
        <span className="text-xs text-gray-600">Manufacturer</span>
      </div>
      <div className="flex flex-col items-center text-center">
        <FaUndo className="w-6 h-6 text-green-700 !mb-2" />
        <span className="text-xs font-medium text-gray-900">
          30 Day Returns
        </span>
        <span className="text-xs text-gray-600">No questions asked</span>
      </div>
      <div className="flex flex-col items-center text-center">
        <MdLocalShipping className="w-6 h-6 text-green-700 !mb-2" />
        <span className="text-xs font-medium text-gray-900">Free Shipping</span>
        <span className="text-xs text-gray-600">On all orders</span>
      </div>
    </div>
  );
};

export default Guarantees;
