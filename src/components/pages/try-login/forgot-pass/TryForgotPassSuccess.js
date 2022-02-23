import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";
import SpinnerButton from "../../../widget/SpinnerButton";

const TryForgotPassSuccess = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper ">
          <header className=" login__header">
            <img src="./logo/bts-logo-black.svg" alt="logo" />
          </header>
          <div className="login__main t-center">
            <h2>All Set!</h2>
          </div>
          <div className=" notif__success t-center">
            <h3>Your password has been successfully reset</h3>
            <h3>Your can now log in using your new password</h3>
          </div>

          <div className=" notif t-center">
            <NavLink to={`${devNavUrl}/login`}>
              <div>
                <div className="submit">
                  <button
                    className="submit__btn"
                    type="submit"
                    disabled={loading}
                  >
                    Proceed to Login
                    {loading && <SpinnerButton />}
                  </button>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default TryForgotPassSuccess;
