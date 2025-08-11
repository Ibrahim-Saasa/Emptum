import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterSidebar = () => {
  return (
    <>
      <aside className="sidebar">
        <div className="box">
          <h3 className="mb-3 text-[16px] font-[600]">Filter Products</h3>
          <div className="scroll">
            <h4>Brands</h4>
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Emptum Special"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Allen Solly"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Jockey"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Van Heusen"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Peter England"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="U.S. POLO ASSN."
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Levi's"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Lymio"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="XYXX"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              className="w-full"
              label="Vincent Chase Eyewear"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
