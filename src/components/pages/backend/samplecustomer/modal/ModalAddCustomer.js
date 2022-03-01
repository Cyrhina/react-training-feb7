import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { fetchData } from "../../../../helpers/fetchData";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { InputText } from "../../../../helpers/FormInputs";
import ModalError from "../../../../modal/ModalError";

const ModalAddCustomer = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
    // console.log("234");
  };

  const initVal = {
    customer_aid: itemEdit ? itemEdit.customer_aid : "",
    customer_fullname: itemEdit ? itemEdit.customer_fullname : "",
    customer_date: itemEdit ? itemEdit.customer_date : "",
    customer_active: itemEdit ? itemEdit.customer_active : "",
    customer_datetime: itemEdit ? itemEdit.customer_datetime : "",
  };

  const yupSchema = Yup.object({
    customer_fullname: Yup.string().required("Required"),
    customer_date: Yup.string().required("Required"),
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
                      ? "/fbs_customer/update-customer.php"
                      : "/fbs_customer/create-customer.php",
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
                          <h4>{itemEdit ? "Edit Customer" : "Add Customer"}</h4>
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
                            name="customer_fullname"
                            disabled={loading ? true : false}
                          />
                        </div>
                      </div>
                      <div className="inputaddform">
                        <div className="inputaddname">
                          <InputText
                            label="Created Date"
                            type="date"
                            name="customer_date"
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

      {store.error && <ModalError />}
    </>
  );
};

export default ModalAddCustomer;
