import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../NotificationList/notificationList.scss";

export default function notificationList({ photo, cardtext, cardlink, time }) {
  return (
    <>
      <div className="notificationList">
        <div>
          <img src={photo} alt="" />
        </div>
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
