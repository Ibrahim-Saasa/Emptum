import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/ProductItem";
import "../ProductItem/product.css";

const ProductSlider = (props) => {
  const products = props.products || [];
  return (
    <div className="productSlider">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        loop={false}
        modules={[Navigation]}
        className="mySwiper products"
      >
        {products.map((product, index) => (
          <SwiperSlide className="swiperSlide" key={index}>
            <ProductItem />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
