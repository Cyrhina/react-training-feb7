import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineClose } from "react-icons/ai";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { fetchData } from "../../../../helpers/fetchData";
import SpinnerButton from "../../../../widget/SpinnerButton";
import { InputText } from "../../../../helpers/FormInputs";

const ModalAddOrder = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    dispatch(setIsAdd(false));
    // console.log("234");
  };

  const initVal = {
    order_aid: itemEdit ? itemEdit.order_aid : "",
    order_name: itemEdit ? itemEdit.order_name : "",
    order_date: itemEdit ? itemEdit.order_date : "",
    order_datetime: itemEdit ? itemEdit.order_datetime : "",
  };

  const yupSchema = Yup.object({
    order_name: Yup.string().required("Required"),
    order_date: Yup.string().required("Required"),
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
                      ? "/fbs_orders/update-order.php"
                      : "/fbs_orders/create-order.php",
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
                          <h4>{itemEdit ? "Edit Order" : "Add Order"}</h4>
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
                            name="order_name"
                            disabled={loading ? true : false}
                          />
                        </div>
                      </div>
                      <div className="inputaddform">
                        <div className="inputaddname">
                          <InputText
                            label="Date"
                            type="text"
                            placeholder="M/D/Y"
                            name="order_date"
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
                            {loading && <SpinnerButton />}
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

export default ModalAddOrder;
