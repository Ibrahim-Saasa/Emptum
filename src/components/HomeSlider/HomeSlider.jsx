import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import ad1 from "../../assets/Ad-1.webp";
import ad2 from "../../assets/ad2.webp";
import ad3 from "../../assets/ad3.webp";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2"
      >
        <SwiperSlide className="slideImg">
          <Link to="/">
            <div className="itemImg w-full rounded-md overflow-hidden ">
              <img
                src="https://template.canva.com/EAFacynVIg4/2/0/1600w-SzQEEVASxGA.jpg"
                alt="Ad 1"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slideImg">
          <Link to="/">
            <div className="itemImg w-full rounded-md overflow-hidden">
              <img
                src="https://template.canva.com/EAE1Z6lceEU/2/0/1600w-PhYKJ-g0Fs8.jpg"
                alt="Ad 2"
              />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="slideImg">
          <Link to="/">
            <div className="itemImg w-full rounded-md overflow-hidden">
              <img
                src="https://template.canva.com/EAE5zzAyyq4/1/0/1600w-lHG-F6EGAik.jpg"
                alt="Ad 3"
              />
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
