import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../store/StoreContext";
import { InputTextLogin } from "../../../helpers/FormInputs";
import { getUrlParam } from "../../../helpers/functions-general";
import {
  setError,
  setIsPassCreated,
  setMessage,
} from "../../../store/StoreAction";
import ModalError from "../../../modal/ModalError";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import SpinnerButton from "../../../widget/SpinnerButton";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../../helpers/fetchData";

const CreatePass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const { result } = useLoadAll(
    "/admin/account/read-user-key.php",
    getUrlParam().get("key")
  );

  const initVal = {
    users_password: "",
    users_confirmpassword: "",
    users_key: getUrlParam().get("key"),
  };

  const yupSchema = Yup.object({
    users_password: Yup.string().required("Required"),
    users_confirmpassword: Yup.string().required("Required"),
  });
  React.useEffect(() => {
    dispatch(setIsPassCreated(true));
  }, [store.isPassCreated]);

  if (getUrlParam().get("key") === null || getUrlParam().get("key") === "") {
    return <p>The page you're trying to view has expired or invalid.</p>;
  }

  return (
    <>
      <section className="login bg-primary">
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
                if (values.users_password !== values.users_confirmpassword) {
                  dispatch(setError(true));
                  dispatch(setMessage("Your password did not match."));
                  return;
                }
                console.log(values);
                fetchData(
                  setLoading,
                  "/admin/account/update-user-new-pass.php",
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
                    <div className="login-input">
                      <InputTextLogin
                        label={"New Password"}
                        type="text"
                        name="users_password"
                        required
                      />
                    </div>
                    <div className="login-input">
                      <InputTextLogin
                        label={"Confirm Password"}
                        type="text"
                        name="users_confirmpassword"
                        required
                      />
                    </div>

                    <div>
                      <div className="submit">
                        <button className="submit__btn" type="submit">
                          submit
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
};

export default CreatePass;
