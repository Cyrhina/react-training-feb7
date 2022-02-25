import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const CustomerCheckEmail = () => {
  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper ">
          <div className="login__main">
            <header className=" login__header">
              <img src="./logo/bts-logo-black.svg" alt="logo" />
            </header>
            <h2 className="t-center">Check your inbox!</h2>
          </div>
          <div className=" notif">
            <h3>Please check your registered email for verfication </h3>
            <div className="margin-top t-center">
              <NavLink to={`${devNavUrl}/customer`}>
                <span>Go back to Login</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerCheckEmail;
