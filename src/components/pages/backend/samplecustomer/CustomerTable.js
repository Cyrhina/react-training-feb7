import React from "react";
import { BsFillPersonFill, BsPlusLg } from "react-icons/bs";
import { FaCog, FaSearch } from "react-icons/fa";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../../store/StoreAction";
import ModalAddEmployee from "./modal/ModalAddCustomer";
import Spinner from "../../../widget/Spinner";
import Nodata from "../../../widget/Nodata";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import ModalSuccess from "../../../modal/ModalSuccess";
import ModalConfirm from "../../../modal/ModalConfirm";
import { AiOutlineEdit, AiOutlineUnorderedList } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut, FiSearch } from "react-icons/fi";
import ModalError from "../../../modal/ModalError";

const CustomerTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { loading, result } = useLoadAll("/fbs_customer/read-customer.php");
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
    setId(item.customer_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsConfirm(true));
    setDel(false);
    setId(item.customer_aid);
  };
  let count = 0;

  return (
    <>
      <div className="profile__wrapper">
        <div className="flex">
          <span>
            <AiOutlineUnorderedList />
          </span>
          <h2>Customer</h2>
        </div>
        <button className="border-color" onClick={handleAdd}>
          <span>
            <BsPlusLg />
          </span>
          <h2>Customer</h2>
        </button>
      </div>

      <div className="table">
        <div className="table__wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Created Date</th>
                <th>Active</th>
                <th className="t-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {result.length > 0 ? (
                result.map((item, key) => {
                  count += 1;
                  return (
                    <tr key={item.customer_aid}>
                      <td>{count}</td>
                      <td>{item.customer_fullname}</td>
                      <td>{item.customer_date}</td>
                      <td>{item.customer_active}</td>

                      <td className="t-center">
                        <div className="dropdown dropdown-border">
                          <span>
                            <FaCog />
                            <IoIosArrowDown />
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
                            <button onClick={() => handleArchive(item)}>
                              <RiDeleteBin5Line />
                              <span>Archive</span>
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
                    {loading && <Spinner />}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* <div className="load-more">
              <button>Load More</button>
            </div> */}
      </div>
      {/* {store.success && <ModalSuccess />} */}
      {store.error && <ModalError />}
      {store.isAdd && <ModalAddEmployee itemEdit={itemEdit} />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiDelete={"/fbs_customer/delete-customer.php"}
          mysqlApiArchive={"/fbs_customer/active-customer.php"}
          msg={
            isDel
              ? "A simple Delete alert--check it out!"
              : "A simple Archive alert--check it out!"
          }
        />
      )}
    </>
  );
};

export default CustomerTable;
