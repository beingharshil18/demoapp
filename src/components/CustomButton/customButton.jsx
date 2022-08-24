import React from "react";
import "./customButton.scss";
// import { ReactComponent as NavBtn } from "../../Assets/Images/navbtn.svg";

export default function customButton({ btnClass, btnLabel, icon }) {
  return (
    <button className={`btn ${btnClass}`}>
      {btnLabel} <span>{icon}</span>
    </button>
  );
}
