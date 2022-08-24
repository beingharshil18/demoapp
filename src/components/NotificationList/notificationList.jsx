import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../NotificationList/notificationList.scss";

export default function notificationList({
  photo,
  batchClass,
  cardtext,
  cardlink,
  revenue,
  time,
}) {
  return (
    <div className="notificationList">
      <div className="profilePhoto">
        <img src={photo} alt="" />
      </div>
      <div className={`cardContent ${batchClass}`}>
        <div className="notificationMsg">
          <p className="cardText">
            {cardtext} <a href="/"> {cardlink}</a>
          </p>
          <span>{time}</span>
        </div>
        {revenue ? <button className="revenue">{revenue}</button> : null}
      </div>
    </div>
  );
}
