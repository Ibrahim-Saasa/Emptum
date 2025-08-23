import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";
import { createContext } from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ProductZoom from "./components/ProductZoom/ProductZoom.jsx";
import ProductImageGallery from "./components/ProductZoom/ProductImageGallery.jsx";
import ProductInfo from "./components/ProductItem/ProductInfo.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CartPage from "./Pages/Cart/index.jsx";
import Verify from "./Pages/Verify/Verify.jsx";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./Pages/ForgotPassword/Login.jsx";
import Checkout from "./Pages/Checkout/Checkout.jsx";
import MyAccount from "./Pages/myAccount/MyAccount.jsx";
import MyList from "./Pages/myList/index.jsx";

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

  const [isLogin, setIsLogin] = useState(true);

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

  const openAlertBox = (status, msg) => {
    if (status === "success") {
      toast.success(msg);
    }
    if (status === "error") {
      toast.error(msg);
    }
  };

  const values = {
    setOpenProductDetailModal,
    setOpen,
    open,
    toggleCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin,
  };
  return (
    <>
      <div className="App">
        <MyContext.Provider value={values}>
          <Header />
          <main>
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/ProductListing"} element={<ProductListing />} />
              <Route
                path={"/ProductDetails/:id"}
                element={<ProductDetails />}
              />
              <Route path={"/login"} element={<Login />} />
              <Route path={"/register"} element={<Register />} />
              <Route path={"/cart"} element={<CartPage />} />
              <Route path={"/verify"} element={<Verify />} />
              <Route path={"/forgotPassword"} element={<ForgotPassword />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"/my-account"} element={<MyAccount />} />
              <Route path={"/my-list"} element={<MyList />} />
            </Routes>
          </main>
          <Footer classname="ads" />
        </MyContext.Provider>

        <Toaster />
        <Dialog
          // open={openProductDetailModal}
          // onClose={handleCloseProductDetailModal}
          // fullWidth={handleFullWidthChange}
          // maxWidth={handleMaxWidthChange}
          open={openProductDetailModal}
          onClose={handleCloseProductDetailModal}
          fullWidth
          maxWidth="lg"
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
      </div>
    </>
  );
}

export default App;
export { MyContext };
