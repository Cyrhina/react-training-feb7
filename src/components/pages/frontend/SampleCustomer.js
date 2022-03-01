import React from "react";
import CustomerTable from "../backend/samplecustomer/CustomerTable";
import Header from "./Header";
import SideNav from "./SideNav";

const SampleCustomer = () => {
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
                <CustomerTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SampleCustomer;
