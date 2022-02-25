import React from "react";
import { BsFillPersonFill, BsPlusLg } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd, setIsConfirm } from "../../../store/StoreAction";
import ModalAddEmployee from "./modal/ModalAddEmployee";
import Spinner from "../../../widget/Spinner";
import Nodata from "../../../widget/Nodata";
import useLoadAll from "../../../custom-hooks/useLoadAll";
import ModalSuccess from "../../../modal/ModalSuccess";
import ModalConfirm from "../../../modal/ModalConfirm";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const EmployeeTable = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { loading, result } = useLoadAll("/fbs_profile/read-profile.php");
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
    setId(item.profile_aid);
  };
  let count = 0;

  return (
    <>
      <div className="profile__wrapper">
        <div className="flex">
          <span>
            <BsFillPersonFill />
          </span>
          <h2>profile</h2>
        </div>
        <button className="border-color" onClick={handleAdd}>
          <span>
            <BsPlusLg />
          </span>
          <h2>Employee</h2>
        </button>
      </div>

      <div className="table">
        <div className="table__wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
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
                      <td>{item.profile_fname}</td>
                      <td>{item.profile_lname}</td>

                      <td className="t-right">
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
          <button>Load More</button>
        </div>
      </div>
      {/* {store.success && <ModalSuccess />} */}
      {store.isAdd && <ModalAddEmployee itemEdit={itemEdit} />}
      {store.isConfirm && (
        <ModalConfirm
          id={id}
          isDel={isDel}
          mysqlApiDelete={"/fbs_profile/delete-profile.php"}
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

export default EmployeeTable;
