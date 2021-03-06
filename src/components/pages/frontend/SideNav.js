import React from "react";

import { Link, NavLink } from "react-router-dom";
import { AiOutlineMail, AiOutlineUnorderedList } from "react-icons/ai";
import { devNavUrl } from "../../helpers/functions-general";
import { BsFillPersonFill } from "react-icons/bs";

const SideNav = () => {
  return (
    <>
      <aside className="sidenav">
        <div className="sidenav__wrapper">
          <header className=" sidenav__header">
            <div className="hide-logo">
              <img src="./logo/bts-logo-white.svg" alt="logo" />
            </div>
          </header>

          <main className="sidenav__main">
            <ul>
              <li>
                <NavLink
                  to={`${devNavUrl}/employee`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <BsFillPersonFill />
                  <span>employee</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${devNavUrl}/order`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <AiOutlineUnorderedList />
                  <span>order</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${devNavUrl}/email`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <AiOutlineMail />
                  <span>email</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${devNavUrl}/sample`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <AiOutlineMail />
                  <span>sample</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`${devNavUrl}/sample-costumer`}
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  <AiOutlineMail />
                  <span>Costumer</span>
                </NavLink>
              </li>
            </ul>
          </main>
        </div>
      </aside>
    </>
  );
};

export default SideNav;
