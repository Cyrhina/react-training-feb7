import React from "react";
import { BsFillPersonFill, BsPlusLg } from "react-icons/bs";
import { FaCaretDown, FaCog } from "react-icons/fa";
import { StoreContext } from "../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../store/StoreAction";
import Spinner from "../../widget/Spinner";
import Nodata from "../../widget/Nodata";
import useLoadAll from "../../custom-hooks/useLoadAll";
import ModalSuccess from "../../modal/ModalSuccess";
import ModalConfirm from "../../modal/ModalConfirm";
import ModalAddOrder from "./modal/ModalAddOrder";
import { AiOutlineEdit, AiOutlineUnorderedList } from "react-icons/ai";
import SpinnerButton from "../../widget/SpinnerButton";
import { RiDeleteBin5Line } from "react-icons/ri";

const OrderTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { loading, result } = useLoadAll("/fbs_orders/read-order.php");
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
    setId(item.order_aid);
  };
  let count = 0;

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="profile__wrapper">
            <div className="flex">
              <span>
                <AiOutlineUnorderedList />
              </span>
              <h2>order</h2>
            </div>
            <button className="border-color" onClick={handleAdd}>
              <span>
                <BsPlusLg />
              </span>
              <h2>Order</h2>
            </button>
          </div>

          <div className="table">
            <div className="table__wrapper">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th className="t-center">Created Date</th>
                    <th className="t-right">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {result.length > 0 ? (
                    result.map((item, key) => {
                      count += 1;
                      return (
                        <tr key={item.profile_aid}>
                          <td>{count}</td>
                          <td>{item.order_name}</td>
                          <td className="t-center">{item.order_date}</td>

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
                        {loading && <Spinner />}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* <div className="load-more">
              <button disabled={loading ? true : false}>
                Load More {loading && <SpinnerButton />}
              </button> 
            </div>*/}
          </div>
        </div>
      </div>
      {/* {store.success && <ModalSuccess msg={"Success"} />} */}
      {store.isAdd && <ModalAddOrder itemEdit={itemEdit} />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiDelete={"/fbs_orders/delete-order.php"}
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

export default OrderTable;
