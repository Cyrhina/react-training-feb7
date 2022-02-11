import React from "react";
import Header from "../Header";
import SideNav from "../SideNav";
import OrderTable from "./OrderTable";

const Order = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <div className=" sidenav-disapper">
            <SideNav />
          </div>
          <div className="parentbox__main">
            <Header />
            <div className=" sidenav-show">
              <SideNav />
            </div>
            <OrderTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;