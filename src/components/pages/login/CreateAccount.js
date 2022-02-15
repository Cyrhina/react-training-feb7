import React from "react";
import { Form } from "formik";
import { InputText } from "../../helpers/FormInputs";
import { AiOutlineClose } from "react-icons/ai";

const CreateAccount = () => {
  return (
    <>
      <section className="login">
        <div className="login__wrapper">
          <header className=" login__header">
            <h2>BTS</h2>
            <div className="login-header">
              <h3>backend</h3>
              <span>training system</span>
            </div>
          </header>

          <div className="login__main">
            <h2> Create Account</h2>
            <p>Fill up all Fields</p>
            <form>
              <div className="login-input">
                <input placeholder="First Name" />
              </div>
              <div className="login-input">
                <input placeholder="Last Name" />
              </div>
              <div className="login-input">
                <input placeholder="Email" />
              </div>

              <div>
                <div className="submitte padding-bottom">
                  <button className="submitte__btn">Create Account</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateAccount;
