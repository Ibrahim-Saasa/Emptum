import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./productimagegallery.css"; // Import the CSS file above

const ProductImageGallery = ({ images, onSelectImage, selectedImage }) => {
  return (
    <div className="flex gap-4">
      {/* Vertical Thumbnails */}
      <div className="thumbnail-container relative">
        <Swiper
          direction="vertical"
          slidesPerView={4}
          spaceBetween={12}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation]}
          className="w-30 h-[480px] rounded-xl bg-gray-50 p-2 shadow-sm"
          style={{
            "--swiper-navigation-color": "#666",
            "--swiper-navigation-size": "16px",
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide
              key={idx}
              className="!flex !items-center !justify-center"
            >
              <div
                className={`thumbnail-wrapper relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 group ${
                  img === selectedImage
                    ? "ring-2 ring-green-500 ring-offset-2 shadow-lg transform scale-105 bg-white"
                    : "ring-1 ring-gray-200 hover:ring-blue-300 hover:shadow-md hover:scale-102 bg-white"
                }`}
                onClick={() => onSelectImage(img)}
                tabIndex={0}
                role="button"
                aria-label={`Select image ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Product view ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                />

                {/* Active indicator */}
                {img === selectedImage && (
                  <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          {images.length > 4 && (
            <>
              <div className="swiper-button-prev-custom absolute -top-1  transform -translate-x-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-gray-600"
                >
                  <polyline points="18,15 12,9 6,15"></polyline>
                </svg>
              </div>
              <div className="swiper-button-next-custom absolute -bottom-1 left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-blue-200 transition-all duration-200">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-gray-600"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </div>
            </>
          )}
        </Swiper>

        {/* Image counter */}
        <div className="absolute  left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium">
          {images.findIndex((img) => img === selectedImage) + 1} /{" "}
          {images.length}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
