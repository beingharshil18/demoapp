import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../ToastMsg/toast.scss";

export default function toast() {
  return (
    <>
      <div className="container">
        <div className="toastMsg">
          <p className="msg">
            👋 <span>Hello there</span>, you had some cash coming in. You go,
            girl
          </p>
        </div>
      </div>
    </>
  );
}
