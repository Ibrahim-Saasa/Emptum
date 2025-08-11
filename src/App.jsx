import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer/Footer.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Home />} />
          <Route
            path={"/ProductListing"}
            exact={true}
            element={<ProductListing />}
          />
        </Routes>
        <Footer classname="ads" />
      </BrowserRouter>
    </>
  );
}

export default App;
