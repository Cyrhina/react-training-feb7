import React from "react";
import { FaCaretDown, FaCog } from "react-icons/fa";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../../store/StoreAction";
import ModalAddEmail from "./modal/ModalAddEmail";
import Spinner from "../../../widget/Spinner";
import Nodata from "../../../widget/Nodata";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import ModalSuccess from "../../../modal/ModalSuccess";
import ModalConfirm from "../../../modal/ModalConfirm";
import { AiOutlineEdit, AiOutlineMail } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import SpinnerButton from "../../../widget/SpinnerButton";
import { BsPlusLg } from "react-icons/bs";
import ModalError from "../../../modal/ModalError";

const EmailTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { loading, result } = useLoadAll("/fbs_email/read-email.php");
  const [itemEdit, setItemEdit] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [isDel, setDel] = React.useState(false);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsConfirm(true));
    setDel(true);
    setId(item.email_aid);
  };
  let count = 0;

  return (
    <>
      <div className="profile__wrapper">
        <div className="flex">
          <span>
            <AiOutlineMail />
          </span>
          <h2>email</h2>
        </div>
        <button className="border-color" onClick={handleAdd}>
          <span>
            <BsPlusLg />
          </span>
          <h2>Email</h2>
        </button>
      </div>

      <div className="table">
        <div className="table__wrapper">
          {loading && <Spinner />}
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th className="t-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {result.length > 0 ? (
                result.map((item, key) => {
                  count += 1;
                  return (
                    <tr key={item.email_aid}>
                      <td>{count}</td>
                      <td>{item.email_name}</td>
                      <td>{item.email_email}</td>

                      <td className="t-right">
                        <div className="dropdown dropdown-border">
                          <span>
                            <FaCog />
                            <FaCaretDown />
                          </span>
                          <div className="dropdown-content">
                            <button onClick={() => handleEdit(item)}>
                              <AiOutlineEdit />
                              <span>Edit</span>
                            </button>
                            <button onClick={() => handleDelete(item)}>
                              <RiDeleteBin5Line />
                              <span>Delete</span>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="row__nodata">
                    <Nodata />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="load-more">
          <button disabled={loading ? true : false}>
            Load More {loading && <SpinnerButton />}
          </button>
        </div>
      </div>
      {/* {store.success && <ModalSuccess msg={"Success"} />} */}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddEmail itemEdit={itemEdit} />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiDelete={"/fbs_email/delete-email.php"}
          msg={
            isDel
              ? "Are you sure you want to delete this "
              : "Are you sure you want to archive this"
          }
        />
      )}
    </>
  );
};

export default EmailTable;
