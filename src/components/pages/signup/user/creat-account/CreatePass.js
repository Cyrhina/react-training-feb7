import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import { InputTextLogin } from "../../../../helpers/FormInputs";
import { getUrlParam } from "../../../../helpers/functions-general";
import {
  setError,
  setIsUserCreatedPass,
  setMessage,
} from "../../../../store/StoreAction";
import ModalError from "../../../../modal/ModalError";
import useLoadAll from "../../../../custom-hooks/useLoadAll";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../../helpers/fetchData";

const UserCreatePass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const { result } = useLoadAll(
    "/admin/user_account/read-user-key.php",
    getUrlParam().get("key")
  );

  const initVal = {
    user_password: "",
    user_confirmpassword: "",
    user_key: getUrlParam().get("key"),
  };

  const yupSchema = Yup.object({
    user_password: Yup.string().required("Required"),
    user_confirmpassword: Yup.string().required("Required"),
  });
  React.useEffect(() => {
    dispatch(setIsUserCreatedPass(true));
  }, []);

  if (getUrlParam().get("key") === null || getUrlParam().get("key") === "") {
    return <p>The page you're trying to view has expired or invalid.</p>;
  }

  return (
    <>
      <section className="login bg-primary">
        <div className="login__wrapper">
          <header className=" login__header">
            <img src="./logo/bts-logo-black.svg" alt="logo" />
          </header>
          <div className="login__main">
            <h2> Create Password</h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                if (values.user_password !== values.user_confirmpassword) {
                  dispatch(setError(true));
                  dispatch(setMessage("Your password did not match."));
                  return;
                }
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/user_account/update-user-newpass.php",
                  values,
                  null,
                  "Access granted",
                  "Access denied",
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
                          label={"New Password"}
                          type="password"
                          name="user_password"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div className="login-input">
                        <InputTextLogin
                          label={"Confirm Password"}
                          type="password"
                          name="user_confirmpassword"
                          disabled={loading}
                          required
                        />
                      </div>

                      <div>
                        <div className="submit">
                          <button
                            className="submit__btn"
                            type="submit"
                            disabled={loading}
                          >
                            Submit
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
        </div>
      </section>
      {store.error && <ModalError />}
    </>
  );
};

export default UserCreatePass;
