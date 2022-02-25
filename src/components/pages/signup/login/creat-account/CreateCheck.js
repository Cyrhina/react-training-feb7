import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const CreateCheck = () => {
  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper ">
          <header className=" login__header">
            <h2>BTS</h2>
            <div className="login-header">
              <h3>backend</h3>
              <span>training system</span>
            </div>
          </header>
          <div className="login__main t-center">
            <h2>Check Your Inbox!</h2>
          </div>
          <div className=" notif t-center">
            <h3>Please check your registered email for verfication </h3>
          </div>
          <div className=" notif t-center">
            <NavLink to={`${devNavUrl}/login`}>Go back to Login</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateCheck;
