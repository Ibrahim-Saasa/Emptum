import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import PhoneInput from "react-phone-input-2";
import { Button, Divider } from "@mui/material";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import LocationPinMap from "../../components/LocationPinMap/LocationPinMap";
import {
  createEmptyAddress,
  getAddressFromUserData,
  getAddressPayload,
} from "../../utils/address";

const CHECKOUT_ADDRESS_KEY = "checkoutAddressDraft";

const Checkout = () => {
  const context = useContext(MyContext);
  const [formFields, setFormFields] = useState(createEmptyAddress());
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
  const [selectedImage] = useState(product.images[0]);

  useEffect(() => {
    const savedDraft = localStorage.getItem(CHECKOUT_ADDRESS_KEY);
    const savedAddress = savedDraft ? JSON.parse(savedDraft) : null;
    const userAddress = getAddressFromUserData(context.userData);

    setFormFields(savedAddress || userAddress);
  }, [context.userData]);

  useEffect(() => {
    localStorage.setItem(CHECKOUT_ADDRESS_KEY, JSON.stringify(formFields));
  }, [formFields]);

  const handleChange = (field, value) => {
    setFormFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLocationChange = (location) => {
    setFormFields((prev) => ({
      ...prev,
      location,
    }));
  };

  const handlePlaceOrder = () => {
    const payload = getAddressPayload(formFields);

    if (context.userData) {
      context.setUserData((prev) => ({
        ...prev,
        ...payload,
        phone: formFields.phone,
        email: formFields.email,
      }));
    }

    context.openAlertBox(
      "success",
      "Checkout address saved. Payment flow can be connected next.",
    );
  };

  return (
    <section className="!py-10">
      <div className="container flex flex-col gap-5 xl:flex-row">
        <div className="leftCol w-full xl:w-[70%]">
          <div className="card rounded-md bg-[#fff0f5] !p-5 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h1 className="font-[500]">Billing Details</h1>
                <p className="mt-1 text-[14px] text-[#5f6f69]">
                  Saved address data from your account is loaded here automatically.
                </p>
              </div>
              <Link to="/address" className="text-[14px] font-[600] text-[#0c8563]">
                Manage saved address
              </Link>
            </div>

            <form className="w-full !mt-5 space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  className="w-full"
                  label="Full Name"
                  variant="filled"
                  size="small"
                  value={formFields.fullName}
                  onChange={(event) =>
                    handleChange("fullName", event.target.value)
                  }
                />
                <TextField
                  className="w-full"
                  label="Email"
                  variant="filled"
                  size="small"
                  value={formFields.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <PhoneInput
                    country={null}
                    value={formFields.phone}
                    onChange={(value) => handleChange("phone", value)}
                    enableSearch
                    inputClass="mui-input custom-phone-input"
                    buttonClass="mui-button"
                    containerClass="mui-container"
                    placeholder="Phone No."
                    inputStyle={{
                      width: "100%",
                      height: "50px",
                      borderRadius: "4px",
                      fontSize: "16px",
                      paddingLeft: "50px",
                      background: "rgba(0,0,0,0.06)",
                    }}
                  />
                </div>
                <TextField
                  className="w-full"
                  label="Country"
                  variant="filled"
                  size="small"
                  value={formFields.country}
                  onChange={(event) =>
                    handleChange("country", event.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  className="w-full"
                  label="State / Province"
                  variant="filled"
                  size="small"
                  value={formFields.state}
                  onChange={(event) => handleChange("state", event.target.value)}
                />
                <TextField
                  className="w-full"
                  label="Town / City"
                  variant="filled"
                  size="small"
                  value={formFields.city}
                  onChange={(event) => handleChange("city", event.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  className="w-full"
                  label="House No. & Street Name"
                  variant="filled"
                  size="small"
                  value={formFields.street}
                  onChange={(event) =>
                    handleChange("street", event.target.value)
                  }
                />
                <TextField
                  className="w-full"
                  label="Apartment No. / Suite"
                  variant="filled"
                  size="small"
                  value={formFields.apartment}
                  onChange={(event) =>
                    handleChange("apartment", event.target.value)
                  }
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <TextField
                  className="w-full"
                  label="Postal Code / Zipcode"
                  variant="filled"
                  size="small"
                  value={formFields.postalCode}
                  onChange={(event) =>
                    handleChange("postalCode", event.target.value)
                  }
                />
                <TextField
                  className="w-full"
                  label="Delivery Notes"
                  variant="filled"
                  size="small"
                  value={formFields.notes}
                  onChange={(event) => handleChange("notes", event.target.value)}
                />
              </div>

              <LocationPinMap
                value={formFields.location}
                onChange={handleLocationChange}
                title="Where should we deliver?"
                description="Use the pin to show the exact delivery point in the checkout flow."
              />
            </form>
          </div>
        </div>

        <div className="rightCol w-full xl:w-[30%]">
          <div className="card rounded-md bg-[#fff0f5] !p-5 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
            <h2 className="font-[500]">Your Order</h2>
            <Divider className="divider !mt-5" />
            <div className="flex items-center justify-between !py-3">
              <span className="text-[14px] font-[600]">Product</span>
              <span className="text-[14px] font-[600]">Price</span>
            </div>
            <Divider className="divider" />
            <div className="scroll max-h-[250px] overflow-y-scroll overflow-x-hidden !pr-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-5 !py-2"
                >
                  <div className="part1 flex items-center gap-3">
                    <div className="img overflow-hidden object-cover">
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
                    <div className="info">
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
              ))}
            </div>
            <Divider className="divider" />
            <div className="flex items-center justify-between !py-3">
              <span className="text-[14px] font-[600]">Subtotal:</span>
              <span className="text-[14px] font-[600]">$1,596</span>
            </div>
            <Button className="form-btn w-full gap-2" onClick={handlePlaceOrder}>
              <IoBagCheckOutline className="text-[20px]" />
              Pay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
