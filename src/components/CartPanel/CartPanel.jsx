import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductZoom from "../ProductZoom/ProductZoom";
import ProductImageGallery from "../ProductZoom/ProductImageGallery";
import { IoTrash } from "react-icons/io5";
import { Button, Divider } from "@mui/material";
import Quantity from "../Quantity/Quantity";

const CartPanel = () => {
  const product = {
    id: 1,
    brand: "Victorinox",
    name: "Victorinox Swiss Army | Swiss Made Men's Automatic Watch, 42 mm, 100M Water Resistant, Anti-Shock | Black Dial, Stainless Steel Case, Black Leather Strap, Sellita SW200-1 Movement | 242044",
    price: 399,
    qty: 1,
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
      <div className="scroll w-full !max-h-[300px] overflow-y-scroll overflow-x-hidden !py-3 !px-4">
        <div className="cartItem w-full flex items-center gap-4 !pb-4">
          <div className="img w-[25%]">
            <Link to="/ProductDetails/48484">
              <ProductZoom
                imageSrc={selectedImage}
                alt={product.name}
                zoomType="hover"
                width="100%"
                height="auto"
              />
            </Link>
          </div>
          <div className="info w-[75%] !pr-5 relative">
            <h1 className="font-[500] text-[#0c8563]">{product.brand}</h1>
            <h3 className="text-[14px] title product-description">
              <Link to="/ProductDetails/1818" className="link transition-all">
                {product.name}
              </Link>
            </h3>

            <div className="flex items-center gap-5 !mb-2 !mt-2 w-full">
              {/* <span>
                Qty : <span>{product.qty}</span>
              </span> */}
              <div>
                <Quantity className="!w-[25%]" />
              </div>

              <span className="text-[#0c8563] font-bold">
                Price : ${product.price}
              </span>
            </div>
            <IoTrash className="!absolute top-[30px] right-[1px] cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <Divider className="divider" />
      </div>

      <div className="bottomSec absolute bottom-[10px]  w-full">
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
          <Link to="/cart" className="w-[50%] d-block !ml-5">
            {" "}
            <Button className="form-btn  w-full">View Cart</Button>
          </Link>
          <Link to="/checkout" className="w-[50%] d-block !mr-5">
            <Button className="form-btn w-full">Checkout</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
