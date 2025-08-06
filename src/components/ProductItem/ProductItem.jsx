import React from "react";
import "../ProductItem/product.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MdOutlineZoomOutMap } from "react-icons/md";
import img1 from "../../assets/1.jpg";

const ProductItem = () => {
  return (
    <div className="productItem  overflow-hidden">
      <div className="group imgWrapper overflow-hidden relative">
        <Link to="/">
          <img
            src="https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg"
            alt="productImage"
            className="productImage w-full"
          />
          <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 text-white bg-[#0c8563] rounded-md !p-2 text-[12px] font-500">
            -41%
          </span>
          <div className="actions absolute top-[-200px] right-[15px] z-50 flex items-center gap-4 flex-col w-[50px] transition-all duration-700 group-hover:top-[15px]">
            <Button>
              <FaRegHeart className="text-[18px]" />
            </Button>
            <Button>
              <MdOutlineCompareArrows className="text-[18px]" />
            </Button>
            <Button>
              <MdOutlineZoomOutMap className="text-[18px]" />
            </Button>
          </div>
        </Link>
      </div>
      <div className="info p-3">
        <h6 className="text-[13px]">
          <Link to="/" className="link">
            {" "}
            Victorinox
          </Link>
        </h6>
        <h3 className="text-[14px] title">
          <Link to="/">
            Victorinox Swiss Army | Swiss Made Men's Automatic Watch, 42 mm,
            100M Water Resistant, Anti-Shock | Black Dial, Stainless Steel Case,
            Black Leather Strap, Sellita SW200-1 Movement | 242044
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-400">$499.99</span>
          <span className="newPrice font-bold">$329.99</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
