import React from "react";

import { ReactComponent as Logo } from "../../Assets/images/logo.svg";
import { ReactComponent as HomeIcon } from "../../Assets/images/HomeIcon.svg";
import { ReactComponent as PeopleIcon } from "../../Assets/images/people.svg";
import { ReactComponent as BellIcon } from "../../Assets/images/bell.svg";
import { ReactComponent as UnionIcon } from "../../Assets/images/Union.svg";
import { ReactComponent as DropIcon } from "../../Assets/images/drpdown.svg";
import { ReactComponent as NavBtn } from "../../Assets/images/navbtn.svg";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "./CustomHeader.scss";

export default function CustomHeader() {
  return (
    <header>
      <div className="container">
        <div className="navBar">
          <div className="logo">
            <Logo />
          </div>

          <div className="navRight">
            <div className="navLinks">
              <a href="/">
                <HomeIcon /> Homepage
              </a>
              <a href="/">
                <PeopleIcon /> PeopleIcon
              </a>
            </div>

            <div className="navIcon">
              <a href="/">
                <BellIcon />
              </a>
            </div>

            <div className="navBtn">
              <div className="profileDrpDown">
                <button className="profileBtn">
                  <UnionIcon />
                </button>
                <DropIcon />
              </div>

              <button className="btnPrimary">
                <span>Send Invoice</span>
                <NavBtn />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
