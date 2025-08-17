import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Quantity from "../Quantity/Quantity.jsx";
import ActionBtn from "../ActionBtn/ActionBtn.jsx";

const ProductInfo = () => {
  const productImages = [
    "https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg",
    "https://m.media-amazon.com/images/I/81Pvqcn0HPL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81qTkwmkEpL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81NSYrwxbjL._SX522_.jpg",
  ];
  const [selectedSize, setSelectedSize] = useState("42mm");
  const [selectedColor, setSelectedColor] = useState("Black");

  const sizes = ["38mm", "42mm", "45mm"];
  const colors = ["Black", "Silver", "Gold"];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  return (
    <>
      <div className="!mb-2">
        <a
          href="/brand/victorinox"
          className="text-green-600 hover:text-green  -700 text-sm font-medium !mb-2 block"
        >
          Victorinox
        </a>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight !mb-1">
          Victorinox Swiss Army Men's Automatic Watch, 42mm, 100M Water
          Resistant, Anti-Shock
        </h1>
        <p className="text-gray-600 mb-4">
          Black Dial, Stainless Steel Case, Black Leather Strap, Sellita SW200-1
          Movement
        </p>
      </div>

      {/* Rating & Reviews */}
      <div className="flex items-center !gap-3 !mb-1">
        <div className="flex items-center gap-2">
          <Rating value={4.5} precision={0.5} size="small" readOnly />
          <span className="text-sm font-medium">4.5</span>
        </div>
        <span className="text-green-600 hover:text-green-700 cursor-pointer text-sm">
          (1,247 reviews)
        </span>
        <span className="text-green-600 text-sm font-medium">
          ✓ Verified Purchase
        </span>
      </div>

      {/* Price Section */}
      <div className="!mb-1 rounded-lg">
        <div className="flex items-center gap-4 !mb-1">
          <span className="text-3xl font-bold text-gray-900">$329.99</span>
          <span className="text-lg text-gray-500 line-through">$499.99</span>
          <span className="bg-red-100 text-red-800 !py-1 rounded-md text-sm font-medium">
            Save 34%
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Inclusive of all taxes •{" "}
          <span className="text-green-600 font-medium">Free Delivery</span>
        </p>
      </div>

      {/* Product Options */}
      <div className="!space-y-4 !mb-2">
        {/* Size Selection */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 !mb-3">
            Size: <span className="font-normal">{selectedSize}</span>
          </h3>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`!px-4 !py-2 border rounded-lg text-sm font-medium transition-all ${
                  selectedSize === size
                    ? "border-green-500 bg-blue-50 text-green-700"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 !mb-3">
            Color: <span className="font-normal">{selectedColor}</span>
          </h3>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`!px-4 !py-2 border rounded-lg text-sm font-medium transition-all ${
                  selectedColor === color
                    ? "border-green-500 bg-blue-50 text-green-700"
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div>
          <Quantity />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="!space-y-4 !mb-5">
        <ActionBtn />
      </div>
    </>
  );
};

export default ProductInfo;
