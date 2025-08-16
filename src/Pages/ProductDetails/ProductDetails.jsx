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
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import {
  FaRegHeart,
  FaShare,
  FaTruck,
  FaShieldAlt,
  FaUndo,
} from "react-icons/fa";
import { MdOutlineCompareArrows, MdLocalShipping } from "react-icons/md";
import Quantity from "../../components/Quantity/Quantity";
import ActionBtn from "../../components/ActionBtn/ActionBtn";
import DeliveryInfo from "../../components/DeliveryInfo/DeliveryInfo";
import Guarantees from "../../components/Guarantees/Guarantees";
import TextField from "@mui/material/TextField";

const ProductDetails = () => {
  const productImages = [
    "https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg",
    "https://m.media-amazon.com/images/I/81Pvqcn0HPL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81qTkwmkEpL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81NSYrwxbjL._SX522_.jpg",
  ];
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState("42mm");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [activeTab, setActiveTab] = useState(0);

  const sizes = ["38mm", "42mm", "45mm"];
  const colors = ["Black", "Silver", "Gold"];

  return (
    <>
      <div className="!py-5">
        <div className="container mx-auto border-b border-gray-200 !pb-4">
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

        <section className="bg-[#fff0f5] !mt-5 !py-8 !mb-5 w-[95%] rounded-md items-center justify-center !mx-auto shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <div className="container">
            <div className="flex gap-8 lg:gap-12">
              {/* Left Column - Images */}
              <div className="productZoomContainer flex !gap-4 flex-shrink-0 !w-[40%]">
                <ProductImageGallery
                  images={productImages}
                  onSelectImage={setSelectedImage}
                  selectedImage={selectedImage}
                />
                <div className="flex-1 !h-[500px] relative overflow-hidden rounded-lg product-zoom-wrapper">
                  <ProductZoom
                    imageSrc={selectedImage}
                    alt="Victorinox Swiss Army Watch"
                    width="100%"
                    height="100%"
                    zoomType="hover"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>

              {/* Right Column - Product Details */}

              <div className="productContent flex-1 max-w-2xl !w-[60%]">
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
                <div className="!mb-2 rounded-lg">
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
                <div className="!space-y-4 !mb-5">
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
                    <Quantity />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="!space-y-4 !mb-5">
                  <ActionBtn />
                </div>

                {/* Delivery Info */}
                <div className="bg-green-50 border border-green-200 rounded-lg !p-4 !mb-4">
                  <DeliveryInfo />
                </div>

                {/* Guarantees */}
                <Guarantees />
              </div>
            </div>
          </div>
          <div className="container bg">
            <div className="flex items-center !gap-8 !mb-4">
              <span
                className={`link cursor-pointer text-[17px] font-[500] ${
                  activeTab === 0 && "text-[#0c8563]"
                }`}
                onClick={() => setActiveTab(0)}
              >
                Description
              </span>
              <span
                className={`link cursor-pointer text-[17px] font-[500] ${
                  activeTab === 1 && "text-[#0c8563]"
                }`}
                onClick={() => setActiveTab(1)}
              >
                Product Details
              </span>
              <span
                className={`link cursor-pointer text-[17px] font-[500] ${
                  activeTab === 2 && "text-[#0c8563]"
                }`}
                onClick={() => setActiveTab(2)}
              >
                Reviews(4)
              </span>
            </div>

            {activeTab === 0 && (
              <div className="shadow-[0_0_15px_rgba(0,0,0,0.3)] w-full !p-8 rounded-md">
                <ul className="list-disc !pl-2 !gap-4 !space-y-2">
                  <li>
                    MASTER YOUR TIME WITH UNMATCHED FUNCTIONALITY: Inspired by
                    the legendary Swiss Army Knife, this Victorinox Swiss Army
                    watch is engineered for those who demand reliability,
                    intelligent functionality, and standout performance
                    Featuring a comfortable 42 mm dial, this automatic watch is
                    crafted with 316L (surgical grade) stainless steel and comes
                    equipped with Sellita SW 200-1 movement It's also certified
                    for ISO shock resistance and 100m water resistance
                  </li>
                  <li>
                    MAXIMUM READABILITY, FUNCTIONAL DESIGN: Designed for maximum
                    readability, this automatic watch features a matte dial with
                    raised numerals and oversized hands illuminated by
                    Super-LumiNova technology, for crystal-clear visibility in
                    any lighting condition—day or night
                  </li>
                  <li>
                    OPTION FOR PERSONALISATION: Thanks to an innovative system,
                    the straps of the watch can be easily changed without the
                    need for tools in only a few seconds Depending on your mood
                    and occasion, you can personalize this watch with various
                    straps like rubber, leather and silver mesh straps
                  </li>
                  <li>
                    TRUSTED QUALITY: Made at the Victorinox Watch Competence
                    Center in Switzerland; all Victorinox Swiss Army timepieces
                    undergo rigorous testing and are covered by a Victorinox
                    5-year Warranty +
                  </li>
                  <li>
                    140+ YEAR OLD SWISS COMPANY: Established in 1884, Victorinox
                    is an authentic Swiss brand with a rich history and heritage
                    In addition to its iconic pocket knives, Victorinox produces
                    premium household and professional knives, watches and
                    travel gear Masterfully crafted, all Victorinox products
                    embody the brand values of functionality, innovation, iconic
                    design and uncompromising quality and ensure the customers
                    are always best prepared for life’s everyday challenges
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 1 && (
              <div className="shadow-[0_0_15px_rgba(0,0,0,0.3)] w-full !p-8 rounded-md">
                <table class="border-collapse w-full table-fixed">
                  <tbody>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Case Diameter
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">
                        42 Milimeters
                      </td>
                    </tr>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Band colour
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">Black</td>
                    </tr>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Band material type
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">
                        Leather
                      </td>
                    </tr>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Warranty type
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">
                        Manufacturer
                      </td>
                    </tr>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Watch movement type
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">
                        Swiss Automatic
                      </td>
                    </tr>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Swiss Automatic
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">
                        97 Grams
                      </td>
                    </tr>
                    <tr>
                      <td class="border text-[15px] font-[700] border-gray-400 !px-4 !py-2">
                        Item weight
                      </td>
                      <td class="border border-gray-400 !px-4 !py-2">
                        Switzerland
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 2 && (
              <div className="shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[80%] !p-8 rounded-md">
                <div className="w-full reviewContainer !space-y-2">
                  <h2 className="text-[18px]">Customer Reviews</h2>
                  <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden !mt-4 !pr-5">
                    <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center !gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://tummybox.in/wp-content/uploads/2025/01/testimonial-face-4.jpg"
                            alt="testimonial"
                            className="w-full"
                          />
                        </div>
                        <div className="w-[80%]">
                          <h4 className="text-[16px]">David Rein</h4>
                          <h5 className="text-[13px]">20-12-2025</h5>
                          <p>
                            I still have a Swiss Army watch I purchased in 2007
                            which other than battery replacement has never let
                            me down. I purchased this one due to the recessed
                            crystal as I kept cracking the original which the
                            crystal is flush with the face in my new career.
                            Swiss Army is a quality product if you are someone
                            that chooses to purchase items that will last you a
                            long time.
                          </p>
                        </div>
                      </div>
                      <Rating value={4.5} precision={0.5} readOnly />
                    </div>
                    <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center !gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://davidhoy.com/wp-content/uploads/2019/01/testimonial-face-referral.jpg"
                            alt="testimonial"
                            className="w-full"
                          />
                        </div>
                        <div className="w-[80%]">
                          <h4 className="text-[16px]">Angela Morgan</h4>
                          <h5 className="text-[13px]">20-12-2025</h5>
                          <p>
                            Nice watch! I did not check well and brought
                            thinking it as Swiss Automatic, but it was actually
                            Quartz. Since I brought it at a discounted price,
                            decided to keep it.
                          </p>
                        </div>
                      </div>
                      <Rating value={4} precision={0.5} readOnly />
                    </div>
                    <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center !gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://www.psacramento.com/content/images/2021/10/paulo-sacramento.1024x1024-1.jpg"
                            alt="testimonial"
                            className="w-full"
                          />
                        </div>
                        <div className="w-[80%]">
                          <h4 className="text-[16px]">Alex Durby</h4>
                          <h5 className="text-[13px]">20-12-2025</h5>
                          <p>
                            Buy it, workmanship and swiss movement top notch.
                          </p>
                        </div>
                      </div>
                      <Rating value={4.5} precision={0.5} readOnly />
                    </div>
                    <div className="review !pt-5 !pb-5 border-b border-[#0c8563] w-full flex items-center justify-between">
                      <div className="info w-[60%] flex items-center !gap-3">
                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                          <img
                            src="https://davidhoy.com/wp-content/uploads/2019/01/testimonial-average-woman.jpg"
                            alt="testimonial"
                            className="w-full"
                          />
                        </div>
                        <div className="w-[80%]">
                          <h4 className="text-[16px]">Sam Hellen</h4>
                          <h5 className="text-[13px]">20-12-2025</h5>
                          <p>Great watch would recommend</p>
                        </div>
                      </div>
                      <Rating value={3} precision={0.5} readOnly />
                    </div>
                  </div>
                  <div className="reviewForm bg-[#9ec49e] !p-4 rounded-md">
                    <h2 className="text-[18px]">Add a Review</h2>
                    <form action="" className="w-full !mt-5">
                      <TextField
                        id="outlined-multiline-static"
                        label="Leave a Review"
                        multiline
                        rows={5}
                        variant="filled"
                        className="w-full"
                      />
                      <Rating
                        name="half-rating"
                        defaultValue={0}
                        precision={0.5}
                        className="!mt-2"
                      />
                      <div className="flex items-center !mt-5">
                        <Button className="form-btn">Submit Review</Button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="ads !py-5 shadow-[0_0_15px_rgba(0,0,0,0.3)] w-[95%] rounded-md items-center justify-center !mx-auto">
          <div className="container">
            <h3 className="text-[20px] font-[600] !ml-7">Related Products</h3>

            <ProductSlider products={[{}, {}, {}, {}, {}, {}]} />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
