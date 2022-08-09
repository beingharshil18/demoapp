import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";

export default function notificationList({ photo, cardtext, cardlink, time }) {
  return (
    <>
      <div className="notificationList">
        <div>{photo}</div>
        <div className="cardContent">
          <div>
            <p className="cardText">
              {cardtext} <a href="/"> {cardlink}</a>
            </p>
          </div>
          <span>{time}</span>
        </div>
      </div>
    </>
  );
}
