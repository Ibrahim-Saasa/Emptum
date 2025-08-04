import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import banner1 from "../../assets/banner-1.png";
import banner2 from "../../assets/banner-2.png";
import banner3 from "../../assets/banner-3.png";
import banner4 from "../../assets/banner-4.png";
import banner5 from "../../assets/banner-5.png";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Slider = () => {
  return (
    <div className="homeSlider">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          className="mySwiper ban-slide"
        >
          <SwiperSlide>
            <img src={banner1} alt="banner slide" className="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="banner slide" className="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="banner slide" className="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="banner slide" className="banner" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner5} alt="banner slide" className="banner" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
