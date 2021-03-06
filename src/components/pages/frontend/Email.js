import React from "react";
import EmailTable from "../backend/email/EmailTable";
import Header from "./Header";
import SideNav from "./SideNav";

const Email = () => {
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
                <EmailTable />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Email;
