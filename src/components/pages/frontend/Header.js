import React from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdLogOut } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import personone from "../../img/jhonny.png";
import SideNav from "./SideNav";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../../helpers/functions-general";
function Header() {
  const [isShow, setIsShow] = React.useState(false);

  const handleShow = () => setIsShow(!isShow);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__mobile">
            <div className="header-show">
              <header className="sidenav__header">
                <img src="./logo/bts-black.svg" alt="logo" />
              </header>
            </div>
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
                <div className="dropdown-content box-shadow">
                  <NavLink to={`${devNavUrl}/login`}>
                    <button>
                      <FiLogOut />
                      <span>Logout</span>
                    </button>
                  </NavLink>
                  <NavLink to={`${devNavUrl}/customer`}>
                    <button>
                      <AiFillSetting />
                      <span>Customer</span>
                    </button>
                  </NavLink>
                  <NavLink to={`${devNavUrl}/user`}>
                    <button>
                      <AiFillSetting />
                      <span>Login</span>
                    </button>
                  </NavLink>
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
      </div>
      {isShow && (
        <div className="show">
          <SideNav />
        </div>
      )}
    </>
  );
}

export default Header;
