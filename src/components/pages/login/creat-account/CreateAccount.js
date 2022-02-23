import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../store/StoreContext";
import { InputTextLogin } from "../../../helpers/FormInputs";
import { fetchData } from "../../../helpers/fetchData";
import { setIsSignup } from "../../../store/StoreAction";
import ModalError from "../../../modal/ModalError";
import SpinnerButton from "../../../widget/SpinnerButton";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const initVal = {
    users_name: itemEdit ? itemEdit.users_name : "",
    users_email: itemEdit ? itemEdit.users_email : "",
  };

  const yupSchema = Yup.object({
    users_name: Yup.string().required("Required"),
    users_email: Yup.string().email("Invalid Email").required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsSignup(true));
  }, [store.isSignup]);

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
                  "/admin/account/create-user.php",
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
                    <div className="login-input">
                      <InputTextLogin
                        label={"First Name"}
                        type="text"
                        name="users_name"
                        required
                      />
                    </div>
                    <div className="login-input">
                      <InputTextLogin
                        label={"Email"}
                        type="text"
                        name="users_email"
                        required
                      />
                    </div>
                    <div>
                      <div className="submit">
                        <button
                          type="submit"
                          className="submit__btn"
                          disabled={loading ? true : false}
                        >
                          Create Account
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

export default CreateAccount;
