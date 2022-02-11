import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCheckLg, BsPlus } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { setSuccess } from "../store/StoreAction";
import { StoreContext } from "../store/StoreContext";

const ModalSuccess = ({ msg }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setSuccess(false));
  };

  return (
    <>
      <div className="dashmodal">
        <div className="dashmodal__main">
          <div className="dashmodal__header">
            <button className="modaldashClose" onClick={handleClose}>
              <RiCloseLine />
            </button>
          </div>

          <div className="dashmodal__body fixed--height  ">
            <p className="text--center dashmodal__body__msg ">
              <span className="dashmodal__body__icon">
                <FaCheckCircle />
              </span>
              <h2>{(msg = "Success Alerts")}</h2>
              {(msg = "A simple Success alert--check it out!")}
            </p>

            <div className="dashmodal__footer">
              <ul>
                <li>
                  <button
                    className="dashmodal__btn btn--error"
                    onClick={handleClose}
                  >
                    Okey
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSuccess;
