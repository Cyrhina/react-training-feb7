import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";

const CreateSuccess = () => {
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
            <h2>Welcome Aboard!</h2>
          </div>
          <div className=" notif__success t-center">
            <h3>Please check your registered email for verfication oioioi</h3>
          </div>

          <div className=" notif t-center">
            <NavLink to={`${devNavUrl}/login`}>
              <div className="submit">
                <button className="submit__btn">Proceed to Login</button>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateSuccess;
