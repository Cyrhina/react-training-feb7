import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputTextLogin } from "../../../helpers/FormInputs";
import { fetchData } from "../../../helpers/fetchData";
import { StoreContext } from "../../../store/StoreContext";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../../helpers/functions-general";
import SpinnerButton from "../../../widget/SpinnerButton";
import { setIsLoginSuccess } from "../../../store/StoreAction";
import ModalError from "../../../modal/ModalError";

const Login = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const initVal = {
    account_aid: itemEdit ? itemEdit.account_aid : "",
    account_email: itemEdit ? itemEdit.account_email : "",
    account_password: itemEdit ? itemEdit.account_password : "",
  };

  const yupSchema = Yup.object({
    account_email: Yup.string().email("Invalid Email").required("Required"),
    account_password: Yup.string().required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsLoginSuccess(true));
  }, [store.isLoginSuccess]);

  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper">
          <div className="login__main">
            <header className=" login__header">
              <img src="./logo/bts-logo-black.svg" alt="logo" />
            </header>
            <h2> Login Account </h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/fbs_account/read-user-login.php",
                  values,
                  null,
                  "",
                  "Don't have account",
                  dispatch,
                  store,
                  true,
                  false
                );
              }}
            >
              {(props) => {
                // props.values.users_password = Math.random().toString(36).substr(7);

                return (
                  <Form>
                    <div className="form__wrapper">
                      <div className="login-input">
                        <InputTextLogin
                          label={"Email"}
                          type="text"
                          name="account_email"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div className="login-input">
                        <InputTextLogin
                          label={"Password"}
                          type="password"
                          name="account_password"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div>
                        <div className="submit ">
                          <button
                            className="submit__btn"
                            type="submit"
                            disabled={loading}
                          >
                            Log In
                            {loading && <SpinnerButton />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="other-page padding-bottom t-center">
            <h3>
              Need an Account?
              <NavLink to={`${devNavUrl}/createaccount`}>
                <span>Create an account</span>
              </NavLink>
            </h3>
            <h3>
              Did you forget your password?
              <NavLink to={`${devNavUrl}/forgotpass`}>
                <span>Forget password</span>
              </NavLink>
            </h3>
          </div>
        </div>
      </section>

      {store.error && <ModalError />}
    </>
  );
};

export default Login;
