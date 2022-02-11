import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
import { fetchData } from "../../../helpers/fetchData";
import SpinnerButton from "../../../widget/SpinnerButton";
import { InputText } from "../../../helpers/FormInputs";

const ModalEditOrder = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

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
      <div className="modal">
        <div className="display-center">
          <div className="bg--white">
            <div className="addform">
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                // value = initVal = state
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  console.log(values);
                  fetchData(
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
                      <div className="modal-title bg-green">
                        <div className="modal-title__wrapper">
                          <h4>{itemEdit ? "Edit Email" : "Add Email"}</h4>
                        </div>
                        <button onClick={() => handleClose()}>
                          <AiOutlineClose />
                        </button>
                      </div>

                      <div className="inputaddform">
                        <div className="inputaddname">
                          <InputText
                            label="Name"
                            type="text"
                            name="email_name"
                            disabled={loading ? true : false}
                          />
                        </div>
                      </div>
                      <div className="inputaddform">
                        <div className="inputaddname">
                          <InputText
                            label="Email"
                            type="text"
                            name="email_email"
                            disabled={loading ? true : false}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="button-container">
                          <button
                            className="dashmodal__btn"
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                          <button
                            className="dashmodal__btn btn--error"
                            disabled={loading ? true : false}
                          >
                            {itemEdit ? "Change" : "Add"}
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
        </div>
      </div>
    </>
  );
};

export default ModalEditOrder;
