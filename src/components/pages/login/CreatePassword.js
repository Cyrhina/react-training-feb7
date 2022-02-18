import React from "react";
import { Formik, Form } from "formik";
import { InputText, ModernInputText } from "../../helpers/FormInputs";
import { AiOutlineClose } from "react-icons/ai";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import ModalError from "../../modal/ModalError";
import {
  setError,
  setIsPassCreated,
  setMessage,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import { getUrlParam } from "../../helpers/functions-general";
import useLoadAll from "../../custom-hooks/useLoadAll";
import { fetchData } from "../../helpers/fetchData";
import SpinnerButton from "../../widget/SpinnerButton";

function CreatePassword() {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();

  const { result } = useLoadAll(
    "/admin/account/read-user-key.php",
    getUrlParam().get("key")
  );
  const initVal = {
    users_key: getUrlParam().get("key"),
    users_password: "",
    users_confirm_password: "",
  };

  const yupSchema = Yup.object({
    users_password: Yup.string().required("Required"),
    users_confirm_password: Yup.string().required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsPassCreated(true));
  }, []);

  //check if the url has a key
  if (getUrlParam().get("key") === null || getUrlParam().get("key") === "") {
    return <p>The page you're trying to view has expired or invalid.</p>;
  }

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
            <h2> Create Password</h2>
            <p>Fill up all Fields</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state

              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);

                if (values.users_password !== values.users_confirm_password) {
                  dispatch(setError(true));
                  dispatch(setMessage("Your password did not match."));
                  return;
                }
                fetchData(
                  setLoading,
                  "/admin/account/update-user-new-pass.php",
                  values,
                  null,
                  "",
                  "Email aleady exist.",
                  dispatch,
                  store,
                  true,
                  false,
                  navigate //Redirect to the checkInbox
                );
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
                        label="New Password"
                        type="password"
                        name="users_password"
                        required
                      />
                    </div>
                    <div className="login-input">
                      <ModernInputText
                        label="Confirm Password"
                        type="password"
                        name="users_confirm_password"
                        required
                      />
                    </div>

                    <div>
                      <div className="submitte padding-bottom">
                        <button className="submitte__btn" type="submit">
                          Reset Password
                          {loading && <SpinnerButton />}
                        </button>
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
}

export default CreatePassword;
