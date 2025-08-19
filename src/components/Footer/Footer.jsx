import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { HiMiniWallet } from "react-icons/hi2";
import { IoIosGift } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from "@mui/material/Button";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import { Divider } from "@mui/material";
import { MyContext } from "../../App.jsx";
import { useContext } from "react";
import CartPanel from "../CartPanel/CartPanel.jsx";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Footer = () => {
  const context = useContext(MyContext);

  return (
    <>
      <footer className="!py-10 bg-[#fff0f5] shadow-[0_0_15px_rgba(0,0,0,0.3)]">
        <div className="container">
          <div className="flex items-center justify-center gap-2 border-b border-black !pb-8">
            <div className="col flex items-center justify-center flex-col group cursor-pointer w-[20%]">
              <FaShippingFast className="text-[50px] transition-all duration-300 group-hover:text-[#0c8563] group-hover:-translate-y-3" />
              <h3 className="text-[18px] font-[500] !mt-3">Free Shipping</h3>
              <p className="text-[13px] font-[400]">For all orders above 500</p>
            </div>
            <div className="col flex items-center justify-center flex-col group cursor-pointer w-[20%]">
              <HiMiniArrowPathRoundedSquare className="text-[50px] transition-all duration-300 group-hover:text-[#0c8563] group-hover:-translate-y-3" />
              <h3 className="text-[18px] font-[500] !mt-3">30 Days Return</h3>
              <p className="text-[13px] font-[400]">On all products</p>
            </div>
            <div className="col flex items-center justify-center flex-col group cursor-pointer w-[20%]">
              <HiMiniWallet className="text-[50px] transition-all duration-300 group-hover:text-[#0c8563] group-hover:-translate-y-3" />
              <h3 className="text-[18px] font-[500] !mt-3">Secured Payments</h3>
              <p className="text-[13px] font-[400]">
                All bank and mobile cards accepted
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group cursor-pointer w-[20%]">
              <IoIosGift className="text-[50px] transition-all duration-300 group-hover:text-[#0c8563] group-hover:-translate-y-3" />
              <h3 className="text-[18px] font-[500] !mt-3">Special Gifts</h3>
              <p className="text-[13px] font-[400]">
                On your first product order
              </p>
            </div>
            <div className="col flex items-center justify-center flex-col group cursor-pointer w-[20%]">
              <BiSupport className="text-[50px] transition-all duration-300 group-hover:text-[#0c8563] group-hover:-translate-y-3" />
              <h3 className="text-[18px] font-[500] !mt-3">24/7 Support</h3>
              <p className="text-[13px] font-[400]">Reach out to us anytime!</p>
            </div>
          </div>

          <div className="footer flex items-center !py-8">
            <div className="part1 w-[20%] border-r border-black !mb-10">
              <h2 className="text-[20px] font-[600] !mb-6">Contact Us</h2>
              <p className="text-[13px] font-[400] !pb-4">
                Emptum - Alcatraz 3579 San Marino{" "}
              </p>

              <Link
                to="mailto:someone@example.com"
                className="link text-[13px]"
              >
                <p>emptum@offcial.id</p>
              </Link>
              <span className="text-[22px] font-[600] text-[#0c8563] block w-full !mt-3 !mb-5">
                (+1) 951-262-3062
              </span>
              <div className="flex items-center gap-2">
                <IoChatbubblesOutline className="text-[40px] text-[#0c8563]" />
                <span className="text-[16px] font-[600] !pl-5">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[50%] flex items-center !pl-15">
              <div className="part2-col1 w-[50%]">
                <h2 className="text-[20px] font-[600] !mb-4">Products</h2>
                <ul className="list !space-y-4">
                  <li className="list-none">
                    <Link to="/" className="link">
                      Prices Drop
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      New Products
                    </Link>
                  </li>

                  <li className="list-none">
                    <Link to="/" className="link">
                      Best Sales
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Contact Us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Site Map
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2-col2 w-[50%]">
                <h2 className="text-[20px] font-[600] !mb-4">Our Company</h2>
                <ul className="list !space-y-4">
                  <li className="list-none">
                    <Link to="/" className="link">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Terms & Conditions of use
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      About Us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Secure Payments
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part3 w-[30%] !mb-9">
              <h2 className="text-[20px] font-[600] !mb-4">
                Subscribe To Newsletter
              </h2>
              <p className="text-[13px] font-[400] !mb-4">
                Subscribe to our newsletter to get news about our special
                discounts.
              </p>
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-[#0c8563] rounded-md !px-5 !py-2 focus:outline-none focus:border-black w-[85%]"
              />
              <Button className="form-btn">SUBSCRIBE</Button>
              <div className="flex items-center gap-5 !pt-5">
                <input
                  id="privacy"
                  type="checkbox"
                  className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-500 py-2"
                />
                <label htmlFor="privacy" className="text-sm text-gray-700">
                  I agree to the{" "}
                  <a href="/privacy" className="text-green-600 underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-green-600 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-black !py-3 bg-[#fff0f5]">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-3">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[#0c8563] flex items-center justify-center group hover:bg-[#0c8563]"
              >
                <FaFacebook className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[#0c8563] flex items-center justify-center group hover:bg-[#0c8563] transition-all"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[#0c8563] flex items-center justify-center group hover:bg-[#0c8563]"
              >
                <FaSquareXTwitter className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[#0c8563] flex items-center justify-center group hover:bg-[#0c8563]"
              >
                <FaReddit className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>

          <p className="text-[13px] text-center">
            © 2025 Emptum. All rights reserved.
          </p>

          <div className="flex items-center gap-3 ">
            <FaCcVisa className="!text-[30px] hover:text-[#0c8563]" />
            <FaCcMastercard className="!text-[30px] hover:text-[#0c8563]" />
            <FaCcPaypal className="!text-[30px] hover:text-[#0c8563]" />
            <FaCcApplePay className="!text-[30px] hover:text-[#0c8563]" />
            <FaGooglePay className="!text-[30px] hover:text-[#0c8563]" />
            <SiPaytm className="!text-[30px] hover:text-[#0c8563]" />
          </div>
        </div>
      </div>

      {/*Cart Panel*/}
      <Drawer
        open={context.open}
        onClose={context.toggleCartPanel(false)}
        anchor={"right"}
        className="cartPanel"
        PaperProps={{
          sx: {
            backgroundColor: "#fff0f5",
          },
        }}
      >
        <div className="flex items-center justify-between !p-5 gap-3 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <h2 className="text-center text-bold font-[500] flex items-center justify-between">
            Shopping Cart
          </h2>
          <IoMdCloseCircleOutline
            className="text-[20px] cursor-pointer"
            onClick={context.toggleCartPanel(false)}
          />
        </div>
        <Divider className="divider" />
        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
