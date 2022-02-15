import React from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdLogOut } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import personone from "../svg/jhonny.png";
import SideNav from "./SideNav";
import { NavLink } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general";
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
                <h2>BTS</h2>
                <div className="sidenav-header hide">
                  <h3>backend</h3>
                  <span>training system</span>
                </div>
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

                <div className="dropdown-content">
                  <NavLink to={`${devNavUrl}/login`}>
                    <button>
                      <FiLogOut />
                      <span>Logout</span>
                    </button>
                  </NavLink>
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
