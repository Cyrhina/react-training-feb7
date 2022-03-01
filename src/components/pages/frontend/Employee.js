import React from "react";
import EmployeeTable from "../backend/employee/EmployeeTable";
import Header from "./Header";
import SideNav from "./SideNav";

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
            <div className="profile">
              <div className="container">
                <EmployeeTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Employee;
