import React, { useState } from "react";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import { BsGrid3X3Gap } from "react-icons/bs";
import { BsGrid1X2 } from "react-icons/bs";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem/ProductItem";
import ProductItemListView from "../../components/ProductItemListView/ProductItemListView";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SortIcon from "@mui/icons-material/Sort";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <section className="!py-5 !pb-0">
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
            <div className="sort !p-2 w-full !mb-3 flex items-center justify-between shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <div className="col1 flex items-center !gap-1">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full transition-all duration-300 ${
                    itemView === "list"
                      ? "!bg-[#0c8563] !text-white hover:!bg-[#0c8563]"
                      : "!text-[#000] hover:!bg-gray-100"
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <BsGrid1X2 className="text-[20px]" />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full transition-all duration-300 ${
                    itemView === "grid"
                      ? "!bg-[#0c8563] !text-white hover:!bg-[#0c8563]"
                      : "!text-[#000] hover:!bg-gray-100"
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <BsGrid3X3Gap className="text-[20px]" />
                </Button>
                <span className="text-[14px] font-[500]">
                  There Are 52 Products
                </span>
              </div>
              <div className="col2 !ml-auto flex items-center justify-end">
                {/* <span className="text-[14px] font-[500]">Sort By</span> */}
                <Box sx={{ minWidth: 160 }}>
                  <FormControl
                    fullWidth
                    size="small"
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "8px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                    }}
                  >
                    <InputLabel id="sort-by-label">
                      <SortIcon sx={{ mr: 1 }} /> Sort By
                    </InputLabel>
                    <Select
                      labelId="sort-by-label"
                      id="sort-by"
                      value={age}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Relevance</MenuItem>
                      <MenuItem value={10}>Name: A to Z</MenuItem>
                      <MenuItem value={10}>Name: Z to A</MenuItem>
                      <MenuItem value={10}>Price: Low to High</MenuItem>
                      <MenuItem value={20}>Price: High to Low</MenuItem>
                      <MenuItem value={30}>Newest First</MenuItem>
                      <MenuItem value={40}>Customer Rating</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              }  gap-4`}
            >
              {itemView === "grid" ? (
                <>
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
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center !mt-10">
              <Stack spacing={2}>
                <Pagination
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        previous: ArrowBackIcon,
                        next: ArrowForwardIcon,
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
