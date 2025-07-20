import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-green-200 border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px]">
                Get upto 50% off on seasonal styles, limited time offer only!
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header ">
        <div className="container flex items-center justify-between">
          <div className="col1">
            <Link to={"/"}>
              <img src="../src/assets/logo.png" className="w-[100px]" />
            </Link>
          </div>
          <div className="col2"></div>
          <div className="col3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
