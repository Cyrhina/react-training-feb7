import React from "react";
import { Formik, Form } from "formik";
import { InputText, ModernInputText } from "../../helpers/FormInputs";
import { AiOutlineClose } from "react-icons/ai";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  const initVal = {
    user_username: "",
    user_password: "",
  };

  const yupSchema = Yup.object({
    user_username: Yup.string().required("Required"),

    user_password: Yup.string().required("Required"),
  });

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
            <h2> Welcome</h2>
            <p>Sign in to continue</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              novalidate
              // value = initVal = state

              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                // fetchData(
                //   setLoading,
                //   itemEdit
                //     ? "/fbs_profile/update-profile.php"
                //     : "/fbs_profile/create-profile.php",
                //   values,
                //   null,
                //   "",
                //   "Email aleady exist.",
                //   dispatch,
                //   store,
                //   true,
                //   false
                // );
              }}
            >
              {(props) => {
                // props.values.users_password = Math.random().toString(36).substr(7);

                return (
                  <Form>
                    {/* <div className="login-input input--error">
                <input type="text " required />
                <label htmlFor="">Email</label>
                <small className="error-msg">*Required</small>
              </div> */}
                    <div className="login-input">
                      <ModernInputText
                        label="User Name"
                        type="text"
                        name="user_username"
                        required
                      />
                    </div>

                    <div className="login-input">
                      <ModernInputText
                        label="Password"
                        type="password"
                        name="user_password"
                        required
                      />
                    </div>
                    {/* <div className="login-input input--error">
                      <input type="password" required />
                      <label htmlFor="">Password</label>
                      <small className="error-msg">*Required</small>
                    </div> */}

                    <div>
                      <div className="submitte padding-bottom">
                        <button className="submitte__btn">Login</button>
                      </div>

                      <p>
                        Need an account? <Link to="/">Sign Up</Link>
                      </p>
                      <p>
                        Did you forgot your password?
                        <Link to="/">Recover Password</Link>
                      </p>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
