import { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Button } from "@mui/material";
import MyListItem from "./MyListItem";
import Checkout from "./Checkout";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";

const MyList = () => {
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
    <section className="section !py-10 flex w-full">
      <div className="container w-[100%] max-w-[100%] flex gap-5">
        <div className="leftPart w-[25%] max-w-[30%]">
          <AccountSideBar />
        </div>
        <div className="rightPart w-[75%]">
          <div className="rounded-md shadow-[0_0_15px_rgba(0,0,0,0.3)] !p-5 bg-[#fff0f5]">
            <h2 className="font-[600]">My List</h2>
            <p className="!mt-0 !pb-5">
              There are <span className="font-bold text-[#0c8563] ">2</span>{" "}
              Products in your list
            </p>
            <Divider className="divider" />

            <MyListItem />
            <MyListItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyList;
