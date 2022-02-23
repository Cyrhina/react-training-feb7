import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { StoreContext } from "../../../store/StoreContext";
import { InputTextLogin } from "../../../helpers/FormInputs";
import { fetchFormData } from "../../../helpers/functions-general";

const ForgotPass = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  const initVal = {
    email_aid: itemEdit ? itemEdit.email_aid : "",
    email_name: itemEdit ? itemEdit.email_name : "",
    email_email: itemEdit ? itemEdit.email_email : "",
    email_datetime: itemEdit ? itemEdit.email_datetime : "",
  };

  const yupSchema = Yup.object({
    email_name: Yup.string().required("Required"),
    email_email: Yup.string().email("Invalid Email").required("Required"),
  });

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
            <h2> Forget Password</h2>
            <p>Provide email to continue</p>
            <Formik
              initialValues={initVal}
              validationSchema={yupSchema}
              // value = initVal = state
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                fetchFormData(
                  setLoading,
                  itemEdit
                    ? "/fbs_email/update-email.php"
                    : "/fbs_email/create-email.php",
                  values,
                  null,
                  "",
                  "Email aleady exist.",
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
                    <div className="login-input">
                      <InputTextLogin
                        label={"User Name / Email"}
                        type="text"
                        name="email_name"
                        required
                      />
                    </div>
                    <div>
                      <div className="submit">
                        <button className="submit__btn">submit</button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPass;
