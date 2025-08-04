import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import cat1 from "../../assets/cat-1.png";
import cat2 from "../../assets/cat-2.png";
import cat3 from "../../assets/cat-3.png";
import cat4 from "../../assets/cat-4.png";
import cat5 from "../../assets/cat-5.png";
import cat6 from "../../assets/cat-6.png";
import cat7 from "../../assets/cat-7.png";
import cat8 from "../../assets/cat-8.png";
import cat9 from "../../assets/cat-9.png";

const CatSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <div className="catSlider">
        <div className="container">
          <Swiper
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className}">${index + 1}</span>`;
              },
            }}
            slidesPerView={6}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 py-8 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat1} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat2} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat3} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat4} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat5} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat6} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat7} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat8} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/">
                <div className="item p-3 rounded-sm text-center flex items-center justify-center flex-col">
                  <img src={cat9} />
                  <h3>Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
          <div className="custom-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default CatSlider;
