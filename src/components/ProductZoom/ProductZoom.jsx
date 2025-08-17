// import React, { useState } from "react";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/styles.min.css";

// const ProductZoom = ({
//   src,
//   zoomSrc,
//   imageSrc, // fallback prop name
//   alt = "",
//   width = "500px",
//   height = "auto",
//   zoomType = "hover",
// }) => {
//   // Use src or imageSrc as fallback
//   const imageSource = src || imageSrc;
//   const zoomSource = zoomSrc || imageSource;

//   return (
//     <div style={{ maxWidth: width, height: height }}>
//       <InnerImageZoom
//         key={imageSource} // Force re-render when image changes
//         src={imageSource}
//         zoomSrc={zoomSource}
//         alt={alt}
//         zoomType={zoomType}
//         zoomPreload={true}
//         zoomScale={1.5}
//         hasSpacer={true}
//       />
//     </div>
//   );
// };

// export default ProductZoom;

import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductZoom = ({
  src,
  zoomSrc,
  imageSrc, // fallback prop name
  alt = "",
  width = "500px",
  height = "500px", // fixed height for consistency
  zoomType = "hover",
  bgColor = "#f9f9f9", // Amazon-like background
}) => {
  // Use src or imageSrc as fallback
  const imageSource = src || imageSrc;
  const zoomSource = zoomSrc || imageSource;

  return (
    <div
      style={{
        width: width,
        height: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: bgColor,
        border: "1px solid #eee",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <InnerImageZoom
        key={imageSource}
        src={imageSource}
        zoomSrc={zoomSource}
        alt={alt}
        zoomType={zoomType}
        zoomPreload={true}
        zoomScale={1.5}
        hasSpacer={true}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

export default ProductZoom;
