import React from "react";
import "../CustomLink/customLink.scss";

export default function customLink({ link }) {
  return (
    <div className="customLink">
      <a href="/">{link}</a>
    </div>
  );
}
