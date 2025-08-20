import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import "../../components/ProductItem/product.css";
import ProductImageGallery from "../../components/ProductZoom/ProductImageGallery";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import Quantity from "../../components/Quantity/Quantity";
import ActionBtn from "../../components/ActionBtn/ActionBtn";
import DeliveryInfo from "../../components/DeliveryInfo/DeliveryInfo";
import Guarantees from "../../components/Guarantees/Guarantees";
import ProductReview from "../../components/ProductReview/ProductReview";

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
  const [quantity, setQuantity] = useState(1);
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
            <div className="flex !gap-6">
              {/* Left Column - Images */}
              <div className="flex flex-col !w-1/2 gap-4">
                <div className="productZoomContainer flex !gap-4 flex-shrink-0">
                  <ProductImageGallery
                    images={productImages}
                    onSelectImage={setSelectedImage}
                    selectedImage={selectedImage}
                  />
                  <div className="flex-1 flex !justify-center !items-center !w-[500px] !h-[500px] relative overflow-hidden rounded-lg product-zoom-wrapper ">
                    <ProductZoom
                      imageSrc={selectedImage}
                      alt="Victorinox Swiss Army Watch"
                      zoomType="hover"
                    />
                  </div>
                </div>
                <div className="shadow-[0_0_15px_rgba(0,0,0,0.3)] !w-full !p-6 rounded-md">
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
                        <td class="border border-gray-400 !px-4 !py-2">
                          Black
                        </td>
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
              </div>

              {/* Right Column - Product Details */}

              <div className="productContent flex-1 max-w-2xl !w-[60%]">
                {/* Brand & Title */}
                <div className="!mb-4">
                  <a
                    href="https://www.victorinox.com/en/"
                    className="text-green-600 hover:text-green  -700 text-sm font-medium !mb-2 block"
                  >
                    Victorinox
                  </a>
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
          <div className="container">
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
                Product Specifications
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
                <h3 className="text-lg font-semibold mb-3">
                  Watch Information
                </h3>

                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2 w-[40%]">
                        Band Colour
                      </td>
                      <td className="text-gray-600 py-2">Black</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2">
                        Band Material
                      </td>
                      <td className="text-gray-600 py-2">Leather</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2">
                        Band Width
                      </td>
                      <td className="text-gray-600 py-2">21 Millimeters</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2">
                        Bezel Function
                      </td>
                      <td className="text-gray-600 py-2">Stationary</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2">
                        Case Diameter
                      </td>
                      <td className="text-gray-600 py-2">42 Millimeters</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2">
                        Case Thickness
                      </td>
                      <td className="text-gray-600 py-2">11.05 Millimeters</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="font-semibold text-gray-700 py-2">
                        Item Weight
                      </td>
                      <td className="text-gray-600 py-2">97 g</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-gray-700 py-2">
                        Model Number
                      </td>
                      <td className="text-gray-600 py-2">242044</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 2 && (
              <div className="shadow-[0_0_15px_rgba(0,0,0,0.3)] w-full !p-8 rounded-md flex items-center justify-center gap-5">
                <ProductReview />
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
