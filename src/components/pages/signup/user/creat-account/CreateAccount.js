import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ModalError from "../../../../modal/ModalError";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { fetchData } from "../../../../helpers/fetchData";
import { InputTextLogin } from "../../../../helpers/FormInputs";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsUserCreate } from "../../../../store/StoreAction";
import { NavLink, useNavigate } from "react-router-dom";
import { devNavUrl } from "../../../../helpers/functions-general";

const CreateUser = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const initVal = {
    user_name: itemEdit ? itemEdit.user_name : "",
    user_date: itemEdit ? itemEdit.user_date : "",
    user_email: itemEdit ? itemEdit.user_email : "",
  };

  const yupSchema = Yup.object({
    user_name: Yup.string().required("Required"),
    user_date: Yup.string().required("Required"),
    user_email: Yup.string().email("Invalid Email").required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsUserCreate(true));
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
                  "/admin/user_account/create-user.php",
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
                          label="Full Name"
                          type="text"
                          name="user_name"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div className="login-input">
                        <InputTextLogin
                          label="Date Create"
                          type="date"
                          name="user_date"
                          disabled={loading}
                          required
                        />
                      </div>
                      <div className="login-input">
                        <InputTextLogin
                          label="Email"
                          type="text"
                          name="user_email"
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
          </div>
          <div className="other-page padding-bottom t-center">
            <h3>
              Already have an Account?
              <NavLink to={`${devNavUrl}/user`}>
                <span>Sign In</span>
              </NavLink>
            </h3>
          </div>
        </div>
      </section>
      {store.error && <ModalError />}
    </>
  );
};

export default CreateUser;
