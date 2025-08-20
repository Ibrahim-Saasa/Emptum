import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import { createContext } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "./components/ProductZoom/ProductZoom.jsx";
import InnerImageZoom from "react-inner-image-zoom";
import ProductImageGallery from "./components/ProductZoom/ProductImageGallery.jsx";
import ProductInfo from "./components/ProductItem/ProductInfo.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

import { IoMdCloseCircleOutline } from "react-icons/io";
import CartPanel from "./components/CartPanel/CartPanel.jsx";
import CartPage from "./Pages/Cart/index.jsx";

const MyContext = createContext();

function App() {
  const [openProductDetailModal, setOpenProductDetailModal] = useState(false);
  const productImages = [
    "https://m.media-amazon.com/images/I/41BO9xuN4+L._MCnd_AC_.jpg",
    "https://m.media-amazon.com/images/I/81Pvqcn0HPL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81qTkwmkEpL._SX522_.jpg",
    "https://m.media-amazon.com/images/I/81NSYrwxbjL._SX522_.jpg",
  ];
  const [selectedSize, setSelectedSize] = useState("42mm");
  const [selectedColor, setSelectedColor] = useState("Black");

  const sizes = ["38mm", "42mm", "45mm"];
  const colors = ["Black", "Silver", "Gold"];

  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  const handleClickOpenProductDetailModal = () => {
    setOpenProductDetailModal(true);
  };

  const handleCloseProductDetailModal = () => {
    setOpenProductDetailModal(false);
  };
  const [maxWidth, setMaxWidth] = useState("lg");
  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
  const [open, setOpen] = useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpen(newOpen);
  };

  const values = { setOpenProductDetailModal, setOpen, open, toggleCartPanel };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/ProductListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/ProductDetails/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
            <Route path={"/cart"} exact={true} element={<CartPage />} />
          </Routes>
          <Footer classname="ads" />
        </MyContext.Provider>
      </BrowserRouter>
      <Dialog
        open={openProductDetailModal}
        onClose={handleCloseProductDetailModal}
        fullWidth={handleFullWidthChange}
        maxWidth={handleMaxWidthChange}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogContent>
          <div className="flex items-center w-full relative gap-5">
            <Button className="!absolute top-[0px] right-[0px] !w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] ">
              <IoMdCloseCircleOutline
                className="!text-[25px]"
                onClick={handleCloseProductDetailModal}
              />
            </Button>
            <div className="col1 w-[40%]">
              <div className="productZoomContainer flex !gap-4 flex-shrink-0">
                <ProductImageGallery
                  images={productImages}
                  onSelectImage={setSelectedImage}
                  selectedImage={selectedImage}
                />
                <div className="flex-1 flex !justify-center !items-center !w-[500px] !h-[500px] relative overflow-hidden rounded-lg product-zoom-wrapper ">
                  <ProductZoom
                    imageSrc={selectedImage}
                    alt="Victorinox Swiss Army Watch"
                    zoomType="hover"
                  />
                </div>
              </div>
            </div>
            <div className="col2 w-[60%]">
              <ProductInfo />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
export { MyContext };
