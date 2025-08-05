import React from "react";
import ad1 from "../../assets/Ad-1.webp";
import ad2 from "../../assets/ad2.webp";
import ad3 from "../../assets/ad3.webp";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const AdsBanner = () => {
  return (
    <div className="ad-banner-wrapper">
      <div className="ad-box">
        <Link to="/">
          <img src={ad1} alt="Ad 1" />
        </Link>
      </div>
      <div className="ad-box">
        <Link to="/">
          <img src={ad2} alt="Ad 2" />
        </Link>
      </div>
      <div className="ad-box">
        <Link to="/">
          <img src={ad3} alt="Ad 3" />
        </Link>
      </div>
    </div>
  );
};

export default AdsBanner;
