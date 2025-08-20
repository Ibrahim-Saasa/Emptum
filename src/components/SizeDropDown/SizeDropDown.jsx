import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SizeDropDown = () => {
  const [size, setSize] = useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
      <InputLabel id="size-label">Size</InputLabel>
      <Select labelId="size-label" value={size} onChange={handleChange}>
        <MenuItem value="38">38 mm</MenuItem>
        <MenuItem value="42">42 mm</MenuItem>
        <MenuItem value="45">45 mm</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SizeDropDown;
