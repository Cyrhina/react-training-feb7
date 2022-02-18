import React from "react";
import { Link } from "react-router-dom";

const WelcomeAboard = () => {
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
          <h2> Welcome Aboard</h2>
          <p>Your account has been successfully verified!</p>
          <p>You can now log in using your account</p>
          <div className="submitte padding-bottom">
            <Link to="/" className="submitte__btn">
              Proceed to Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeAboard;
