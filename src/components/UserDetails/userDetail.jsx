import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../UserDetails/userDetail.scss";
import { ReactComponent as Verified } from "../../Assets/Images/verified_star.svg";

export default function userDetail({ username, address, company, website }) {
  return (
    <>
      <div className="userDetail">
        <h3>
          {username}
          <span>
            <Verified />
          </span>
        </h3>
        <a href="/">{address}</a>
        <span>{company}</span>
        <a href="/" className="webLink">
          {website}
        </a>
      </div>
    </>
  );
}
