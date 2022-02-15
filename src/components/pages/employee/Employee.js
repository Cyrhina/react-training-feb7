import React from "react";
import Header from "../Header";
import SideNav from "../SideNav";
import EmployeeTable from "./EmployeeTable";

const Employee = () => {
  return (
    <>
      <section className="parentbox">
        <div className="parentbox__wrapper">
          <div className="disapper">
            <SideNav />
          </div>
          <div className="parentbox__main">
            <Header />
            <EmployeeTable />
          </div>
        </div>
      </section>
    </>
  );
};

export default Employee;
