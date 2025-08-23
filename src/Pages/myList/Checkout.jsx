import { Button, Divider } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoBagCheckOutline } from "react-icons/io5";

const Checkout = () => {
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

  const subtotal = product.price * product.qty;
  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + product.shipping + tax;

  return (
    <>
      <h3 className="font-[600] !pb-5">Cart Totals</h3>
      <Divider className="divider" />
      <div className="bottomInfo w-full !py-3 !px-4 flex flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">Subtotal</span>
          <span className="text-[#0c8563] font-bold">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">Shipping</span>
          <span className="text-[#0c8563] font-bold">
            ${product.shipping.toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <span className="text-[14px] font-[600]">GST (5%)</span>
          <span className="text-[#0c8563] font-bold">${tax.toFixed(2)}</span>
        </div>
      </div>
      <Divider className="divider" />
      <div className="bottomInfo w-full !py-3 !px-4 flex items-center justify-between">
        <span className="text-[14px] font-[600]">Total</span>
        <span className="text-[#0c8563] font-bold">${total.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between w-full !mt-5 gap-5">
        <Link to="/checkout" className="w-[100%] d-block ">
          <Button className="form-btn w-full gap-2">
            <IoBagCheckOutline className="text-[20px]" />
            Checkout
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
