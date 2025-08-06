import React from "react";
import img1 from "../../assets/1.jpg";

const ProductItem = () => {
  return (
    <div className="productItem  overflow-hidden">
      <div className="imgWrapper w-[100%] h-[250px] overflow-hidden !rounded-md ">
        <img src={img1} alt="productImage" className="productImage" />
      </div>
    </div>
  );
};

export default ProductItem;
