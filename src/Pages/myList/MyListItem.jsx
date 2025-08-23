import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom/ProductZoom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Rating, Divider, Button } from "@mui/material";
import Quantity from "../../components/Quantity/Quantity";
import SizeDropDown from "../../components/SizeDropDown/SizeDropDown";

const MyListItem = () => {
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
    <>
      <div className="cartItem w-full flex items-center gap-4 relative !pb-5 !pt-5">
        {" "}
        <IoMdCloseCircleOutline className="cursor-pointer absolute top-[10px] right-[0px] text-[22px] link transition-all" />
        <div className="img w-[20%]">
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
        <div className="info w-[80%]">
          <span className="text-[13px]">{product.brand}</span>
          <h3 className="text-[18px]">
            <Link className="link" to="/ProductDetails/5777">
              {product.name}
            </Link>
          </h3>
          <Rating value={4.5} precision={0.5} size="small" readOnly />

          {/* <div className="flex items-center gap-4 !mt-2">
            <SizeDropDown />

            <Quantity />
          </div> */}
          <div className="flex items-center gap-4 !mt-2">
            <span className="text-2xl font-bold text-[#0c8563]">
              ${product.price}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product.oldPrice}
            </span>
            <span className="bg-red-100 text-red-800 !py-1 rounded-md text-sm font-medium">
              {product.sale}
            </span>
          </div>
          <Button className="form-btn !mt-2 !mb-2">Add to Cart</Button>
        </div>
      </div>
      <Divider className="divider" />
    </>
  );
};

export default MyListItem;
