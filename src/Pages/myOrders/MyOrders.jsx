import React from "react";
import AccountSideBar from "../../components/AccountSideBar/AccountSideBar";
import { Divider } from "@mui/material";
import CollapsibleTable from "../../components/ReactTable/ReactTable";

const MyOrders = () => {
  return (
    <section className="section !py-10 flex w-full">
      <div className="container w-[100%] max-w-[100%] flex gap-5">
        <div className="leftPart w-[25%] max-w-[30%]">
          <AccountSideBar />
        </div>
        <div className="rightPart w-[75%] shadow-[0_0_15px_rgba(0,0,0,0.3)]">
          <div className="rounded-md  !p-5 bg-[#fff0f5]">
            <h2 className="font-[600]">My List</h2>
            <p className="!mt-0 !pb-5">
              There are <span className="font-bold text-[#0c8563] ">2</span>{" "}
              Products in your list
            </p>
            <Divider className="divider" />
            <div className=" !w-full !p-6 rounded-md">
              <CollapsibleTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOrders;
