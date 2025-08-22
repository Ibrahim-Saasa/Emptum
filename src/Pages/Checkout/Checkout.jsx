import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import { Button, Divider } from "@mui/material";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";

const Checkout = () => {
  const [phone, setPhone] = useState("");
  const product = {
    id: 1,
    brand: "Victorinox",
    name: "Victorinox Swiss Army | Swiss Made Men's Automatic Watch, 42 mm, 100M Water Resistant, Anti-Shock | Black Dial, Stainless Steel Case, Black Leather Strap, Sellita SW200-1 Movement | 242044",
    price: 399,
    oldPrice: 499,
    qty: 1,
    sale: "34% SAVED",
    shipping: 8,
    images: [
      "https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg",
      "https://m.media-amazon.com/images/I/81Pvqcn0HPL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81qTkwmkEpL._SX522_.jpg",
      "https://m.media-amazon.com/images/I/81NSYrwxbjL._SX522_.jpg",
    ],
  };
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <section className="!py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] !p-5 rounded-md w-ful">
            <h1 className="font-[500]">Billing Details</h1>
            <form className="w-full !mt-5">
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="First Name*"
                    variant="filled"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="Last Name*"
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>
              <h5 className="text-[14px] font-[500] !mb-3">Street Address</h5>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="House No. & Street Name*"
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Apartment No, Suit No*"
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>
              <h5 className="text-[14px] font-[500] !mb-3">Town / City*</h5>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="City*"
                    variant="filled"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    type="text"
                    className="w-full"
                    label="State/Country*"
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>
              <h5 className="text-[14px] font-[500] !mb-3">
                Postal Code / Zipcode*
              </h5>
              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[100%]">
                  <TextField
                    className="w-full"
                    label="Zipcode*"
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 !pb-5">
                <div className="col w-[50%]">
                  <PhoneInput
                    country={null} // default country
                    value={phone}
                    onChange={setPhone}
                    enableSearch
                    inputClass="mui-input custom-phone-input"
                    buttonClass="mui-button"
                    containerClass="mui-container"
                    placeholder="Phone No."
                    inputStyle={{
                      width: "100%",
                      height: "50px", // same as MUI TextField
                      borderRadius: "4px",
                      // border: "1px solid #c4c4c4",
                      fontSize: "16px",
                      paddingLeft: "50px", // so flag doesn’t overlap text
                      background: "rgba(0,0,0,0.06)",
                    }}
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Email*"
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightCol w-[30%]">
          <div className="card bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)] !p-5 rounded-md w-ful">
            <h2 className="font-[500]">Your Order</h2>
            <Divider className="divider !mt-5" />
            <div className="flex items-center justify-between !py-3">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Price</span>
            </div>
            <Divider className="divider" />
            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2">
              <div className="flex items-center justify-between !py-2 gap-5">
                <div className="part1 flex items-center gap-3">
                  <div className="img  object-cover overflow-hidden">
                    <Link to="/ProductDetails/84174">
                      <ProductZoom
                        imageSrc={selectedImage}
                        alt={product.name}
                        zoomType="hover"
                        width="100%"
                        height="auto"
                      />
                    </Link>
                  </div>
                  <div className="info ">
                    <h4 className="product-description text-[14px]">
                      {product.name}
                    </h4>
                    <span className="text-[14px]">Qty: {product.qty}</span>
                  </div>
                </div>
                <div className="part2">
                  <span className="text-[14px] font-[500]">
                    ${product.price}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between !py-2 gap-5">
                <div className="part1 flex items-center gap-3">
                  <div className="img  object-cover overflow-hidden">
                    <Link to="/ProductDetails/84174">
                      <ProductZoom
                        imageSrc={selectedImage}
                        alt={product.name}
                        zoomType="hover"
                        width="100%"
                        height="auto"
                      />
                    </Link>
                  </div>
                  <div className="info ">
                    <h4 className="product-description text-[14px]">
                      {product.name}
                    </h4>
                    <span className="text-[14px]">Qty: {product.qty}</span>
                  </div>
                </div>
                <div className="part2">
                  <span className="text-[14px] font-[500]">
                    ${product.price}
                  </span>
                </div>
              </div>{" "}
              <div className="flex items-center justify-between !py-2 gap-5">
                <div className="part1 flex items-center gap-3">
                  <div className="img  object-cover overflow-hidden">
                    <Link to="/ProductDetails/84174">
                      <ProductZoom
                        imageSrc={selectedImage}
                        alt={product.name}
                        zoomType="hover"
                        width="100%"
                        height="auto"
                      />
                    </Link>
                  </div>
                  <div className="info ">
                    <h4 className="product-description text-[14px]">
                      {product.name}
                    </h4>
                    <span className="text-[14px]">Qty: {product.qty}</span>
                  </div>
                </div>
                <div className="part2">
                  <span className="text-[14px] font-[500]">
                    ${product.price}
                  </span>
                </div>
              </div>{" "}
              <div className="flex items-center justify-between !py-2 gap-5">
                <div className="part1 flex items-center gap-3">
                  <div className="img  object-cover overflow-hidden">
                    <Link to="/ProductDetails/84174">
                      <ProductZoom
                        imageSrc={selectedImage}
                        alt={product.name}
                        zoomType="hover"
                        width="100%"
                        height="auto"
                      />
                    </Link>
                  </div>
                  <div className="info ">
                    <h4 className="product-description text-[14px]">
                      {product.name}
                    </h4>
                    <span className="text-[14px]">Qty: {product.qty}</span>
                  </div>
                </div>
                <div className="part2">
                  <span className="text-[14px] font-[500]">
                    ${product.price}
                  </span>
                </div>
              </div>
            </div>
            <Divider className="divider" />
            <div className="flex items-center justify-between !py-3">
              <span className="text-[14px] font-[600]">Subtotal:</span>
              <span className="text-[14px] font-[600]">$1,596</span>
            </div>
            <Link to="/checkout" className="w-[100%] d-block ">
              <Button className="form-btn w-full gap-2">
                <IoBagCheckOutline className="text-[20px]" />
                Pay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
