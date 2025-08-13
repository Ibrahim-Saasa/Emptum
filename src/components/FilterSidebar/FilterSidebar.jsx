// import React from "react";
// import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import "../FilterSidebar/filtersidebar.css";

// const FilterSidebar = () => {
//   return (
//     <>
//       <aside className="sidebar">
//         <div className="box">
//           <h3 className="mb-3 text-[16px] font-[600] border-b-1">
//             Filter Products
//           </h3>
//           <div className="scroll">
//             <h4>Brands</h4>
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Emptum Special"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Allen Solly"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Jockey"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Van Heusen"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Peter England"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="U.S. POLO ASSN."
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Levi's"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Lymio"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="XYXX"
//             />
//             <FormControlLabel
//               control={<Checkbox size="small" />}
//               className="w-full"
//               label="Vincent Chase Eyewear"
//             />
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default FilterSidebar;
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Rating from "@mui/material/Rating";
import Slider from "@mui/material/Slider";
import "../FilterSidebar/filtersidebar.css";

const brands = [
  "Emptum Special",
  "Allen Solly",
  "Jockey",
  "Van Heusen",
  "Peter England",
  "U.S. POLO ASSN.",
  "Levi's",
  "Lymio",
  "XYXX",
  "Vincent Chase Eyewear",
];

const categories = [
  "Men's Clothing",
  "Women's Clothing",
  "Footwear",
  "Accessories",
];

const discounts = [10, 25, 50, 70];

const colors = [
  "#000000",
  "#ffffff",
  "#ff0000",
  "#0000ff",
  "#008000",
  "#ffff00",
];

export default function FilterSidebar() {
  return (
    <aside className="filter border rounded-md w-full shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      {/* Brands */}
      <section className="!mb-6">
        <h3 className="font-semibold border-b pb-2 mb-3">Brand</h3>
        <div className="scroll max-h-40 overflow-y-auto pr-2 space-y-1">
          {brands.map((brand) => (
            <FormControlLabel
              key={brand}
              control={<Checkbox size="small" />}
              label={brand}
              className="text-sm"
            />
          ))}
        </div>
      </section>

      {/* Price Range */}
      <section className="!mb-6">
        <h3 className="font-semibold border-b pb-2 mb-3">Price Range</h3>
        <Slider
          sx={{
            color: "#4CAF50", // changes thumb and track color
            "& .MuiSlider-thumb": {
              backgroundColor: "#4CAF50",
            },
            "& .MuiSlider-track": {
              backgroundColor: "#4CAF50",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#ccc",
            },
          }}
          getAriaLabel={() => "Price range"}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          defaultValue={[500, 2000]}
        />
      </section>

      {/* Ratings */}
      <section className="!mb-6">
        <h3 className="font-semibold border-b pb-2 mb-3">Customer Rating</h3>
        {[4, 3, 2, 1].map((stars) => (
          <div key={stars} className="flex items-center mb-1">
            <Checkbox size="small" />
            <Rating value={stars} readOnly size="small" />
            <span className="ml-1 text-sm">& Up</span>
          </div>
        ))}
      </section>

      {/* Discounts */}
      <section className="!mb-6">
        <h3 className="font-semibold border-b pb-2 mb-3">Discount</h3>
        {discounts.map((d) => (
          <FormControlLabel
            key={d}
            control={<Checkbox size="small" />}
            label={`${d}% or more`}
            className="block text-sm"
          />
        ))}
      </section>

      {/* Categories */}
      <section className="!mb-6">
        <h3 className="font-semibold border-b pb-2 mb-3">Category</h3>
        {categories.map((cat) => (
          <FormControlLabel
            key={cat}
            control={<Checkbox size="small" />}
            label={cat}
            className="block text-sm"
          />
        ))}
      </section>

      {/* Colors */}
      <section className="!mb-6">
        <h3 className="font-semibold border-b !pb-2 !mb-3">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map((color, idx) => (
            <div
              key={idx}
              className="w-6 h-6 rounded-full border cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </section>

      {/* Availability */}
      <section>
        <h3 className="font-semibold border-b !pb-2 !mb-3">Availability</h3>
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="In Stock Only"
          className="block text-sm"
        />
      </section>
    </aside>
  );
}
