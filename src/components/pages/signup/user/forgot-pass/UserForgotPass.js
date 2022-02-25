import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputTextLogin } from "../../../../helpers/FormInputs";
import { fetchData } from "../../../../helpers/fetchData";
import ModalError from "../../../../modal/ModalError";
import { setIsUserForgotEmail } from "../../../../store/StoreAction";
import { NavLink, useNavigate } from "react-router-dom";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { devNavUrl } from "../../../../helpers/functions-general";
import { StoreContext } from "../../../../store/StoreContext";

const UserForgotPass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const Navigate = useNavigate();

  const initVal = {
    user_email: itemEdit ? itemEdit.user_email : "",
  };

  const yupSchema = Yup.object({
    user_email: Yup.string().email("Invalid Email").required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsUserForgotEmail(true));
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
                  "/admin/user_account/update-user-forgot-pass.php",
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
                          name="user_email"
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
                        <NavLink to={`${devNavUrl}/user`}>
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

export default UserForgotPass;
