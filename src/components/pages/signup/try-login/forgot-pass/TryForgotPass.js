import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputTextLogin } from "../../../../helpers/FormInputs";
import { fetchData } from "../../../../helpers/fetchData";
import ModalError from "../../../../modal/ModalError";
import { setIsEmailcheck } from "../../../../store/StoreAction";
import { NavLink, useNavigate } from "react-router-dom";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { devNavUrl } from "../../../../helpers/functions-general";
import { StoreContext } from "../../../../store/StoreContext";

const TryForgotPass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const Navigate = useNavigate();

  const initVal = {
    account_email: itemEdit ? itemEdit.account_email : "",
  };

  const yupSchema = Yup.object({
    account_email: Yup.string().email("Invalid Email").required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsEmailcheck(true));
  }, []);

  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper">
          <header className=" login__header">
            <img src="./logo/bts-logo-black.svg" alt="logo" />
          </header>
          <div className="login__main">
            <h2> Forget Password</h2>
            <p>Provide email to continue</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/fbs_account/update-user-forgot-pass.php",
                  values,
                  null,
                  "",
                  "Email is not existing.",
                  dispatch,
                  store,
                  true,
                  false,
                  Navigate
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
                          label={"User Name / Email"}
                          type="email"
                          name="account_email"
                          disabled={loading}
                          required
                        />
                      </div>

                      <div className="submit">
                        <button
                          className="submit__btn"
                          disabled={loading}
                          type="submit"
                        >
                          Submit
                          {loading && <SpinnerButton />}
                        </button>
                      </div>
                    </div>

                    <div className="other-page padding-bottom t-center">
                      <h3>
                        Go Back to
                        <NavLink to={`${devNavUrl}/login`}>
                          <span>Sign In</span>
                        </NavLink>
                      </h3>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
      {store.error && <ModalError />}
    </>
  );
};

export default TryForgotPass;
