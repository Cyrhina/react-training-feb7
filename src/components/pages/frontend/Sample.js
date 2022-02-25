import React from "react";
import SampleTable from "../backend/sample/SampleTable";
import Header from "../frontend/Header";
import SideNav from "../frontend/SideNav";

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

            <div className="profile">
              <div className="container">
                <SampleTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sample;
