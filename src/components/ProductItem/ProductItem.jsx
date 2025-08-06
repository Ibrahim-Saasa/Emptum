import React from "react";
import "../ProductItem/product.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import img1 from "../../assets/1.jpg";

const ProductItem = () => {
  return (
    <div className="productItem  overflow-hidden">
      <div className="imgWrapper w-[100%] h-[250px] overflow-hidden !rounded-md ">
        <Link to="/">
          <img
            src="https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg"
            alt="productImage"
            className="productImage"
          />
        </Link>
      </div>
      <div className="info p-3">
        <h6 className="text-[13px]">
          <Link to="/" className="link">
            {" "}
            Victorinox
          </Link>
        </h6>
        <h3 className="text-[14px] title  ">
          <Link to="/">
            Victorinox Swiss Army | Swiss Made Men's Automatic Watch, 42 mm,
            100M Water Resistant, Anti-Shock | Black Dial, Stainless Steel Case,
            Black Leather Strap, Sellita SW200-1 Movement | 242044
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
      </div>
    </div>
  );
};

export default ProductItem;
