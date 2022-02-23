import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../store/StoreContext";
import { InputTextLogin } from "../../../helpers/FormInputs";
import { fetchData } from "../../../helpers/fetchData";
import ModalError from "../../../modal/ModalError";
import { setIsSignup } from "../../../store/StoreAction";
import { NavLink, useNavigate } from "react-router-dom";
import SpinnerButton from "../../../widget/SpinnerButton";
import { devNavUrl } from "../../../helpers/functions-general";

const TryCreateAccount = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const initVal = {
    account_fname: itemEdit ? itemEdit.account_fname : "",
    account_lname: itemEdit ? itemEdit.account_lname : "",
    account_email: itemEdit ? itemEdit.account_email : "",
  };

  const yupSchema = Yup.object({
    account_fname: Yup.string().required("Required"),
    account_lname: Yup.string().required("Required"),
    account_email: Yup.string().email("Invalid Email").required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsSignup(true));
  }, []);

  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper">
          <header className=" login__header">
            <img src="./logo/bts-logo-black.svg" alt="logo" />
          </header>
          <div className="login__main">
            <h2> Create Account</h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/fbs_account/create-account.php",
                  values,
                  null,
                  "",
                  "Email aleady exist.",
                  dispatch,
                  store,
                  true,
                  false,
                  navigate
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
                          label="First Name"
                          type="text"
                          name="account_fname"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div className="login-input">
                        <InputTextLogin
                          label="Last Name"
                          type="text"
                          name="account_lname"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div className="login-input">
                        <InputTextLogin
                          label="Email"
                          type="text"
                          name="account_email"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div>
                        <div className="submit">
                          <button
                            type="create acocunt"
                            className="submit__btn"
                            disabled={loading}
                          >
                            Create Account
                            {loading && <SpinnerButton />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div className="other-page padding-bottom t-center">
              <h3>
                Already have an Account?
                <NavLink to={`${devNavUrl}/login`}>
                  <span>Sign In</span>
                </NavLink>
              </h3>
            </div>
          </div>
        </div>
      </section>
      {store.error && <ModalError />}
    </>
  );
};

export default TryCreateAccount;
