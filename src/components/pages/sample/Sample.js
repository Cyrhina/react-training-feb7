import React from "react";
import Header from "../Header";
import SideNav from "../SideNav";
import SampleTable from "./SampleTable";

const Sample = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <div className="disapper">
            <SideNav />
          </div>
          <div className="parentbox__main">
            <Header />

            <SampleTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sample;
