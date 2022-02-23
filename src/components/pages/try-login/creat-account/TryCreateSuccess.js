import React from "react";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";
import SpinnerButton from "../../../widget/SpinnerButton";

const TryCreateSuccess = () => {
  const [loading, setLoading] = React.useState(false);
  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper ">
          <div className="login__main t-center">
            <header className=" login__header">
              <img src="./logo/bts-logo-black.svg" alt="logo" />
            </header>
            <h2>Welcome Aboard!</h2>
            <div className=" notif__success t-center">
              <h3>
                Your account has been successfully verified
                <br />
                <br />
                You can now log in using your account.
              </h3>
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
        </div>
      </section>
    </>
  );
};

export default TryCreateSuccess;
