import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import "../../components/ProductItem/product.css";
import ProductImageGallery from "../../components/ProductZoom/ProductImageGallery";
import { useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import {
  FaRegHeart,
  FaShare,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";
import { MdOutlineCompareArrows, MdLocalShipping } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetails = () => {
  const productImages = [
    "https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg",
    "https://m.media-amazon.com/images/I/81Pvqcn0HPL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81qTkwmkEpL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81NSYrwxbjL._SX522_.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("42mm");
  const [selectedColor, setSelectedColor] = useState("Black");

  const sizes = ["38mm", "42mm", "45mm"];
  const colors = ["Black", "Silver", "Gold"];

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="!py-5">
        <div className="container border-b border-gray-200 !pb-4">
          <Breadcrumbs aria-label="breadcrumb" className="text-sm">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition-all hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/fashion"
              className="link transition-all hover:text-blue-600"
            >
              Fashion
            </Link>
            <span className="text-gray-600">Watches</span>
          </Breadcrumbs>
        </div>

        <section className="bg-[#fff0f5] !py-8">
          <div className="container">
            <div className="flex gap-8 lg:gap-12">
              {/* Left Column - Images */}
              <div className="flex gap-4 flex-shrink-0">
                <ProductImageGallery
                  images={productImages}
                  onSelectImage={setSelectedImage}
                  selectedImage={selectedImage}
                />
                <div className="productZoomContainer ">
                  <ProductZoom
                    imageSrc={selectedImage}
                    alt="Victorinox Swiss Army Watch"
                    width="100%"
                    height="auto"
                    zoomType="hover"
                  />
                </div>
              </div>

              {/* Right Column - Product Details */}

              <div className="flex-1 max-w-2xl">
                {/* Brand & Title */}
                <div className="!mb-4">
                  <Link
                    to="/brand/victorinox"
                    className="text-green-600 hover:text-green  -700 text-sm font-medium !mb-2 block"
                  >
                    Victorinox
                  </Link>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight !mb-3">
                    Victorinox Swiss Army Men's Automatic Watch, 42mm, 100M
                    Water Resistant, Anti-Shock
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Black Dial, Stainless Steel Case, Black Leather Strap,
                    Sellita SW200-1 Movement
                  </p>
                </div>

                {/* Rating & Reviews */}
                <div className="flex items-center !gap-3 !mb-2">
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
                <div className="!mb-2 !p-4 rounded-lg">
                  <div className="flex items-center gap-4 !mb-2">
                    <span className="text-3xl font-bold text-gray-900">
                      $329.99
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      $499.99
                    </span>
                    <span className="bg-red-100 text-red-800 !py-1 rounded-md text-sm font-medium">
                      Save 34%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Inclusive of all taxes •{" "}
                    <span className="text-green-600 font-medium">
                      Free Delivery
                    </span>
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
                      Color:{" "}
                      <span className="font-normal">{selectedColor}</span>
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
                    <h3 className="text-sm font-medium text-gray-900 !mb-3">
                      Quantity
                    </h3>
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
                      <span className="text-sm text-gray-600">
                        {quantity > 5
                          ? "5+ items"
                          : `${quantity} item${quantity > 1 ? "s" : ""}`}{" "}
                        in cart
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="!space-y-4 !mb-8">
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
                </div>

                {/* Delivery Info */}
                <div className="bg-green-50 border border-green-200 rounded-lg !p-4 !mb-4">
                  <div className="flex items-center !gap-2 !mb-2">
                    <FaTruck className="text-green-600" />
                    <span className="font-medium text-green-800">
                      Delivery Information
                    </span>
                  </div>
                  <div className="!space-y-2 text-sm text-green-700">
                    <p>
                      ✓ <strong>FREE Delivery</strong> by Tomorrow, Aug 16
                    </p>
                    <p>
                      ✓ Fastest delivery <strong>Today</strong> with Prime
                      membership
                    </p>
                    <p>✓ Cash on Delivery available</p>
                  </div>
                </div>

                {/* Guarantees */}
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
                    <span className="text-xs text-gray-600">
                      No questions asked
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <MdLocalShipping className="w-6 h-6 text-green-700 !mb-2" />
                    <span className="text-xs font-medium text-gray-900">
                      Free Shipping
                    </span>
                    <span className="text-xs text-gray-600">On all orders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
