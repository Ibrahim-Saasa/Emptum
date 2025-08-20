import { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Button } from "@mui/material";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const CartPage = () => {
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
  const subtotal = product.price * product.qty;
  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + product.shipping + tax;

  return (
    <section className="section !py-10">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[70%]">
          <div className="rounded-md shadow-[0_0_15px_rgba(0,0,0,0.3)] !p-5 bg-[#fff0f5] !mt-5">
            <h2 className="font-[600]">Your Cart</h2>
            <p className="!mt-0 !pb-5">
              There are <span className="font-bold text-[#0c8563] ">2</span>{" "}
              Products in your cart
            </p>
            <Divider className="divider" />

            <CartItem />
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="rounded-md shadow-[0_0_15px_rgba(0,0,0,0.3)] !p-5 bg-[#fff0f5] !mt-5">
            <Checkout />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
