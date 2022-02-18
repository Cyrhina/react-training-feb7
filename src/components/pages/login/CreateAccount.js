import React from "react";
import { Formik, Form } from "formik";
import { InputText, ModernInputText } from "../../helpers/FormInputs";
import { AiOutlineClose } from "react-icons/ai";
import * as Yup from "yup";
import { fetchData } from "../../helpers/fetchData";
import { StoreContext } from "../../store/StoreContext";
import { setIsSignup } from "../../store/StoreAction";
import { useNavigate } from "react-router-dom";
import ModalError from "../../modal/ModalError";

const CreateAccount = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(null);
  const navigate = useNavigate();

  const initVal = {
    users_name: "",
    users_email: "",
  };

  const yupSchema = Yup.object({
    users_name: Yup.string().required("Required"),
    users_email: Yup.string().required("Required"),
  });

  React.useEffect(() => {
    dispatch(setIsSignup(true));
  }, []);

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
                  "",
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
                        label="Name"
                        type="text"
                        name="users_name"
                        required
                      />
                    </div>
                    <div className="login-input">
                      <ModernInputText
                        label="Email"
                        type="text"
                        name="users_email"
                        required
                      />
                    </div>

                    <div>
                      <div className="submitte padding-bottom">
                        <button className="submitte__btn">
                          Create Account
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
