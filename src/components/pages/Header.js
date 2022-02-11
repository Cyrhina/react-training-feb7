import React from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdLogOut } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import personone from "../../img/jhonny.png";
import SideNav from "./SideNav";
function Header() {
  const [isShow, setIsShow] = React.useState(false);

  const handleShow = () => {
    setIsShow(isShow);
    console.log("123");
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <img src={personone} alt="profile-picture" />
            <div className="header__main">
              <div className="header-profile">
                <h2>Juan Dela Cruz</h2>
                <span>IT supervisor</span>
              </div>
            </div>
            <div className="dropdown dropdown-color">
              <span>
                <IoIosArrowDown />
              </span>

              <div className="dropdown-content">
                <button>
                  <FiLogOut />
                  <span>Logout</span>
                </button>
                <button>
                  <AiFillSetting />
                  <span>Setting</span>
                </button>
              </div>
            </div>
            <div className="burger-menu">
              <button onClick={handleShow}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sidenav-show">
        <SideNav />
      </div>
    </>
  );
}

export default Header;
