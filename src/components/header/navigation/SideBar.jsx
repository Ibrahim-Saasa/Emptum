// import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const SideBar = ({ open, toggleDrawer }) => {
  // const [open, setOpen] = useState(false);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  //   props.setIsOpenSideBar(newOpen);
  // };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <h2 className="text-center text-bold text-[500] !p-5 flex items-center justify-between">
        Shop By Categories{" "}
        <IoMdCloseCircleOutline
          className="text-[20px] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h2>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Button className="w-full !justify-start !text-left">
              Fashion
            </Button>
            <FaRegPlusSquare className="absolute top-[10px] right-[5px] cursor-pointer" />
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      {" "}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBar;
