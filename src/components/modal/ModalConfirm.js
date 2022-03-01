import React from "react";
import {
  RiCloseCircleFill,
  RiCloseLine,
  RiInboxArchiveLine,
} from "react-icons/ri";
import { BsPlus } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { setError, setIsConfirm, setMessage } from "../store/StoreAction";
import { fetchData } from "../helpers/fetchData";
import { StoreContext } from "../store/StoreContext";
import SpinnerButton from "../widget/SpinnerButton";
import ModalError from "./ModalError";

const ModalConfirm = ({
  id,
  isDel,
  stripeApiDelete,
  stripeApiArchive,
  mysqlApiDelete,
  mysqlApiArchive,
  msg,
  item,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(false);
  let pId = id;

  const handleClose = (e) => {
    e.preventDefault();
    dispatch(setIsConfirm(false));
  };

  const handleYes = async () => {
    setLoading(true);

    fetchData(
      setLoading,
      isDel ? mysqlApiDelete : mysqlApiArchive,
      { id: pId },
      null,
      "",
      "",
      dispatch,
      store,
      false,
      false
    );
  };

  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header ">
            <button className="modaldashClose" onClick={handleClose}>
              <RiCloseLine />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <p className="text--center dashmodal__body__msg ">
              <span className="dashmodal__body__error">
                {isDel ? <RiCloseCircleFill /> : <RiInboxArchiveLine />}
              </span>
              <h2>
                <strong>Are you sure</strong>?
              </h2>
              {msg}
            </p>

            <div className="dashmodal__footer">
              <button
                className="dashmodal__btn btn--gray"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="dashmodal__btn bg--error"
                disabled={loading}
                onClick={handleYes}
              >
                Yes {loading && <SpinnerButton />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {store.error && <ModalError />}
    </>
  );
};

export default ModalConfirm;
