import React from "react";
import PrimaryButton from "../../components/PrimaryButton/primaryButton";

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
import { Link } from "react-router-dom";

export default function CustomHeader() {
  return (
    <header>
      <div className="container">
        <div className="headerWrapper">
          <div className="logo">
            <Logo />
          </div>

          <div className="headerRight">
            <div className="navBar">
              <Link to="/" className="navLink home">
                <HomeIcon className="homeBtn" /> Homepage
              </Link>
              <Link to="/clientpage" className="navLink">
                <PeopleIcon /> Client List
              </Link>
            </div>

            <div className="navIcon">
              <Link to="/example">
                <BellIcon />
              </Link>
            </div>

            <div className="navBtn">
              <div className="profileDrpDown">
                <button className="profileBtn">
                  <UnionIcon />
                </button>
                <DropIcon />
              </div>

              <PrimaryButton btn="Send Invoice " icon={<NavBtn />} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
