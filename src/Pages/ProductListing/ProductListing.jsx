import React from "react";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem/ProductItem";

const ProductListing = () => {
  return (
    <section className="!py-5">
      <div className="container border-b border-black !pb-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition-all"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className="link transition-all"
          >
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="!p-2 !mt-4">
        <div className="container flex gap-3">
          <div className="sidebarwrapper w-[20%] h-full">
            <FilterSidebar />
          </div>
          <div className="rightContent w-[80%]">
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
