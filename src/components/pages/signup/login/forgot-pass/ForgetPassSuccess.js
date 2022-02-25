import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const ForgetPassSuccess = () => {
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
            <h2>All Set!</h2>
          </div>
          <div className=" notif__success t-center">
            <h3>Your password has been successfully reset</h3>
            <h3>Your can now log in using your new password</h3>
          </div>

          <div className=" notif t-center">
            <div className="submit">
              <NavLink to={`${devNavUrl}/login`}>
                <button className="submit__btn">Proceed to Login</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetPassSuccess;
