import React from "react";
import { Link } from "react-router-dom";

const CheckInbox = () => {
  return (
    <section className="login">
      <div className="login__wrapper">
        <header className=" login__header">
          <h2>BTS</h2>
          <div className="login-header">
            <h3>backend</h3>
            <span>training system</span>
          </div>
        </header>

        <div className="login__main text--center">
          <h2> Check Your Inbox</h2>
          <p>Please check your registered email for verification</p>
          <div className="submitte padding-bottom">
            <Link to="/" className="submitte__btn">
              Go back to login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckInbox;
