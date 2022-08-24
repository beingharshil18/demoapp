import React from "react";
import "../PaymentCard/paymentCard.scss";

export default function paymentCrad({ paymentCard, heading, price, aging }) {
  return (
    <div className="paymentCardWrapper">
      <div className={`customCard ${paymentCard}`}>
        <div className="cardHeader">
          <h3 className="cardHeading">{heading}</h3>
        </div>
        <div className="cardBody">
          <h2 className="pricing">
            <span>$</span>
            {price}
          </h2>
          <p className="aging">Aging: {aging}</p>
        </div>
      </div>
    </div>
  );
}
