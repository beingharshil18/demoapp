import React from "react";

import { ReactComponent as Logo } from "../../Assets/Images/logo.svg";
import { ReactComponent as HomeIcon } from "../../Assets/Images/HomeIcon.svg";
import { ReactComponent as PeopleIcon } from "../../Assets/Images/people.svg";
import { ReactComponent as BellIcon } from "../../Assets/Images/bell.svg";
import { ReactComponent as UnionIcon } from "../../Assets/Images/Union.svg";
import { ReactComponent as DropIcon } from "../../Assets/Images/drpdown.svg";
import { ReactComponent as NavBtn } from "../../Assets/Images/navbtn.svg";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../CustomHeader/customHeader.scss";

export default function CustomHeader() {
  return (
    <header>
      <div className="container">
        <div className="headerWrapper">
          <div className="row">
            <div className="col-xl-6 col-md-4">
              <div className="logo">
                <Logo />
              </div>
            </div>
            <div className="col-xl-6 col-md-8">
              <div className="navRight">
                <div className="row">
                  <div className="col-6">
                    <div className="navBar">
                      <a href="/" className="navLink home">
                        <HomeIcon className="homeBtn" /> Homepage
                      </a>
                      <a href="/" className="navLink">
                        <PeopleIcon /> Client List
                      </a>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="navIcon">
                      <a href="/">
                        <BellIcon />
                      </a>
                    </div>
                  </div>
                  <div className="col-5">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
