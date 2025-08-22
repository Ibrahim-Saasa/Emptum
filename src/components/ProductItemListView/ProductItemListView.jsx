import React, { useContext } from "react";
import "../ProductItem/product.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);

  return (
    <div className="overflow-hidden flex items-start gap-4 p-4 border-b border-gray-200 hover:shadow-md transition-shadow duration-300">
      <div className="group imgWrapper overflow-hidden relative flex-shrink-0">
        <Link to="/ProductDetails/:id">
          <div className="img w-[180px] h-[180px] flex items-center justify-center bg-gray-50">
            <img
              src="https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg"
              alt="productImage"
              className="productImage max-w-full max-h-full object-contain"
            />
          </div>

          <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 text-white bg-[#0c8563] rounded-md !p-2 text-[12px] font-500">
            -41%
          </span>
        </Link>
        <div className="actions absolute top-[-200px] right-[15px] z-50 flex items-center gap-2 flex-col w-[40px] transition-all duration-700 group-hover:top-[15px]">
          <Button className="!min-w-[35px] !w-[35px] !h-[35px] !p-0 !bg-white !shadow-md hover:!bg-gray-50">
            <FaRegHeart className="text-[16px] text-gray-600" />
          </Button>
          <Button className="!min-w-[35px] !w-[35px] !h-[35px] !p-0 !bg-white !shadow-md hover:!bg-gray-50">
            <MdOutlineCompareArrows className="text-[16px] text-gray-600" />
          </Button>
          <Button
            className="!min-w-[35px] !w-[35px] !h-[35px] !p-0 !bg-white !shadow-md hover:!bg-gray-50"
            onClick={() => context.setOpenProductDetailModal(true)}
          >
            <MdOutlineZoomOutMap className="text-[16px] text-gray-600" />
          </Button>
        </div>
      </div>
      <div className="info flex-1 py-2">
        <h6 className="text-[13px] text-gray-600 mb-1">
          <Link to="/" className="link">
            {" "}
            Victorinox
          </Link>
        </h6>
        <h3 className="text-[16px] title product-description mb-2 font-medium leading-5">
          <Link to="/ProductDetails/:id" className="link text-gray-900">
            Victorinox Swiss Army | Swiss Made Men's Automatic Watch, 42 mm,
            100M Water Resistant, Anti-Shock | Black Dial, Stainless Steel Case,
            Black Leather Strap, Sellita SW200-1 Movement | 242044
          </Link>
        </h3>
        <div className="!mb-3">
          <Rating name="size-small" defaultValue={4} size="small" readOnly />
          <span className="text-[13px] text-gray-500 ml-2">(128 reviews)</span>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <span className="newPrice text-[20px] font-bold text-gray-900">
            $329.99
          </span>
          <span className="oldPrice line-through text-gray-500 text-[16px]">
            $499.99
          </span>
          <span className="savings text-[14px] text-green-700 font-medium">
            Save $170.00 (34%)
          </span>
        </div>
        <div className="text-[13px] text-gray-600 space-y-1">
          <div>
            FREE delivery <strong>Tomorrow, Aug 15</strong>
          </div>
          <div>
            Or fastest delivery <strong>Today</strong> with Prime
          </div>
          <div className="text-green-700 font-medium">In Stock</div>
        </div>
        <div className="flex items-center gap-3 !mb-3">
          <Button
            variant="contained"
            className="!bg-[#0c8563] hover:!bg-[#9ec49e] !text-[#fff] !font-medium !px-6 !py-2 !rounded-lg !text-[14px] !normal-case !shadow-md"
          >
            Add to Cart
          </Button>
          <Button
            variant="outlined"
            className="!border-gray-300 !text-gray-700 hover:!bg-gray-50 !font-medium !px-4 !py-2 !rounded-lg !text-[14px] !normal-case"
          >
            Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
