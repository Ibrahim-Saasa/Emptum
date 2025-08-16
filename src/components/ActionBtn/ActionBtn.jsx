import React from "react";
import Button from "@mui/material/Button";
import {
  FaRegHeart,
  FaShare,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";
import { MdOutlineCompareArrows, MdLocalShipping } from "react-icons/md";

const ActionBtn = () => {
  return (
    <>
      <div className="flex !gap-3">
        <Button
          variant="contained"
          className="!bg-green-800 hover:!bg-green-600 !text-white !font-medium !px-8 !py-3 !rounded-lg !text-base !flex-1"
          size="large"
        >
          Add to Cart
        </Button>
        <Button
          variant="contained"
          className="!bg-yellow-500 hover:!bg-yellow-600 !text-black !font-medium !px-8 !py-3 !rounded-lg !text-base !flex-1"
          size="large"
        >
          Buy Now
        </Button>
      </div>
      <div className="flex gap-3">
        <Button
          variant="outlined"
          className="!border-gray-300 !text-gray-700 hover:!bg-gray-50 !font-medium !px-6 !py-2 !rounded-lg !flex-1"
          startIcon={<FaRegHeart />}
        >
          Add to Wishlist
        </Button>
        <Button
          variant="outlined"
          className="!border-gray-300 !text-gray-700 hover:!bg-gray-50 !font-medium !px-6 !py-2 !rounded-lg !flex-1"
          startIcon={<MdOutlineCompareArrows />}
        >
          Compare
        </Button>
        <Button
          variant="outlined"
          className="!border-gray-300 !text-gray-700 hover:!bg-gray-50 !font-medium !px-6 !py-2 !rounded-lg"
          startIcon={<FaShare />}
        >
          Share
        </Button>
      </div>
    </>
  );
};

export default ActionBtn;
