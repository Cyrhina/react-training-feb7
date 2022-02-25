import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { fetchData } from "../../../../helpers/fetchData";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { InputText } from "../../../../helpers/FormInputs";

const ModalAddEmployee = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
    // console.log("234");
  };

  const initVal = {
    profile_aid: itemEdit ? itemEdit.profile_aid : "",
    profile_fname: itemEdit ? itemEdit.profile_fname : "",
    profile_lname: itemEdit ? itemEdit.profile_lname : "",
    profile_datetime: itemEdit ? itemEdit.profile_datetime : "",
  };

  const yupSchema = Yup.object({
    profile_fname: Yup.string().required("Required"),
    profile_lname: Yup.string().required("Required"),
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
                      ? "/fbs_profile/update-profile.php"
                      : "/fbs_profile/create-profile.php",
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
                          <h4>{itemEdit ? "Edit Employee" : "Add Employee"}</h4>
                        </div>
                        <button onClick={() => handleClose()}>
                          <AiOutlineClose />
                        </button>
                      </div>

                      <div className="inputaddform">
                        <div className="inputaddname">
                          <InputText
                            label="First Name"
                            type="text"
                            name="profile_fname"
                            disabled={loading ? true : false}
                          />
                        </div>
                      </div>
                      <div className="inputaddform">
                        <div className="inputaddname">
                          <InputText
                            label="Last Name"
                            type="text"
                            name="profile_lname"
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
                            className="dashmodal__btn btn-mw btn--error"
                            disabled={loading ? true : false}
                          >
                            {itemEdit ? "Change" : "Add Change"}
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

export default ModalAddEmployee;
