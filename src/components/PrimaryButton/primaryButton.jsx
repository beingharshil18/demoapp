import React from "react";
import "../PrimaryButton/primaryButton.scss";
// import { ReactComponent as NavBtn } from "../../Assets/Images/navbtn.svg";

export default function primaryButton({ btn, icon }) {
  return (
    <>
      <button className="btnPrimary">
        {btn} <span>{icon}</span>
      </button>
    </>
  );
}
