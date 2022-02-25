import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const CustomerForgotEmail = () => {
  return (
    <>
      <section className="login bg-primary">
        <div className="min-heigh30 login__wrapper ">
          <header className=" login__header">
            <img src="./logo/bts-logo-black.svg" alt="logo" />
          </header>
          <div className="login__main t-center">
            <h2>Almost done!</h2>
          </div>
          <div className=" notif">
            <h3>Please check your registered email to reset your password. </h3>
            <div className="margin3 t-center">
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

export default CustomerForgotEmail;
