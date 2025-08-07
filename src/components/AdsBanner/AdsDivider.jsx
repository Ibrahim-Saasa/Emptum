import React from "react";
import ad4 from "../../assets/ad4.webp";
import ad5 from "../../assets/ad5.webp";
import { Link } from "react-router-dom";

const AdsDivider = () => {
  return (
    <div className="ad-divider-wrapper">
      <div className="ad-div">
        <Link to="/">
          <img src={ad4} alt="Ad 4" />
        </Link>
      </div>
      <div className="ad-div">
        <Link to="/">
          <img src={ad5} alt="Ad 5" />
        </Link>
      </div>
    </div>
  );
};

export default AdsDivider;
