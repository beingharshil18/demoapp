import React from "react";
import "../SecondaryButton/secondaryButton.scss";

export default function secondaryButton({ btn }) {
  return (
    <>
      <button className="btnSecondary">{btn}</button>
    </>
  );
}
