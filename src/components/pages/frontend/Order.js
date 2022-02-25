import React from "react";
import OrderTable from "../backend/order/OrderTable";
import Header from "../frontend/Header";
import SideNav from "../frontend/SideNav";

const Order = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <div className="disapper">
            <SideNav />
          </div>
          <div className="parentbox__main">
            <Header />
            <div className="profile">
              <div className="container">
                <OrderTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Order;
