import React from "react";
import Slider from "../../components/slider/slider";
import CatSlider from "../../components/CatSlider/CatSlider";
import AdsBanner from "../../components/AdsBanner/AdsBanner";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
// import "../../components/ProductItem/product.css";
import adBanner from "../../assets/ad-banner.webp";
import AdsDivider from "../../components/AdsBanner/AdsDivider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Slider />
      <CatSlider />

      <section className="py-8">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[20px] font-[600]">Popular Products</h3>
              <p className="text-[14px] font-[400]">
                Snatch these offers as fast as you can
              </p>
            </div>

            <div className="rightSec !w-[80%] border-l border-black-300 pl-4">
              <Box
                sx={{
                  width: "100%",
                  overflowX: "auto",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Electronics" />
                  <Tab label="Shirts" />
                  <Tab label="Rings" />
                  <Tab label="Necklaces" />
                  <Tab label="Pants" />
                  <Tab label="Jeans" />
                  <Tab label="Loafers" />
                  <Tab label="Sneakers" />
                  <Tab label="Tables" />
                  <Tab label="Chairs" />
                  <Tab label="Desks" />
                  <Tab label="Controller" />
                  <Tab label="Keyboard" />
                  <Tab label="Stationary" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductSlider products={[{}, {}, {}, {}, {}, {}]} />
        </div>
      </section>

      <section className="ads !py-5 !mt-6">
        <div className="container">
          <AdsBanner items={4} />
        </div>
      </section>

      <section className="ads !py-5 !pt-0">
        <div className="container">
          <h3 className="text-[20px] font-[600] !ml-7">Latest Products</h3>

          <ProductSlider products={[{}, {}, {}, {}, {}, {}]} />
        </div>
      </section>

      <section className="!py-5 w-full">
        <img src={adBanner} alt="AD-BANNER" />
      </section>

      <section className="ads !py-5">
        <div className="container">
          <h3 className="text-[20px] font-[600] !ml-7">Featured Products</h3>

          <ProductSlider products={[{}, {}, {}, {}, {}, {}]} />
          <AdsDivider />
        </div>
      </section>
    </>
  );
};

export default Home;
