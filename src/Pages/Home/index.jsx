import React from "react";
import Slider from "../../components/slider/slider";
import CatSlider from "../../components/CatSlider/CatSlider";
import AdsBanner from "../../components/AdsBanner/AdsBanner";

const Home = () => {
  return (
    <>
      <Slider />
      <CatSlider />

      <section className="py-8">
        <div className="container-fluid">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h3 className="text-[30px] font-600">Popular Products</h3>
              <p>Snatch these offers as fast as you can</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ads !py-5 !mt-6">
        <div className="container">
          <AdsBanner items={4} />
        </div>
      </section>
    </>
  );
};

export default Home;
