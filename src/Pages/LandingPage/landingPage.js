import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../LandingPage/landingPage.scss";
import CustomHeader from "../../components/CustomHeader/CustomHeader.jsx";
// import { images } from "../../Styles/images.js";

export default function LandingPage() {
  return (
    <>
      <CustomHeader />
      <div className="wrapper">
        <div className="container">
          <div className="cardWrapper">
            <div className="balance">
              <div className="card">
                <div className="cardHeader">
                  <h3 className="cardHeading">Your Hopscotch Balance</h3>
                </div>
                <div className="cardBody">
                  <h2 className="pricing">
                    <span>$</span>10,835.55
                  </h2>
                  <p className="aging">Aging: $9,000</p>
                </div>
                <div className="cardFooter">
                  <button className="btnPrimary">Add Funds</button>
                  <button className="btnSecondary">Withdraw Funds</button>
                </div>
              </div>
            </div>

            <div className="payments">
              <div className="card receive">
                <div className="cardHeader">
                  <h3 className="cardHeading">Receivable (AR)</h3>
                </div>
                <div className="cardBody">
                  <h2 className="pricing">
                    <span>$</span>
                    10,835.55
                  </h2>
                  <p className="aging">Aging: $9,000</p>
                </div>
              </div>

              <div className="card payable">
                <div className="cardHeader">
                  <h3 className="cardHeading">Payable (AP)</h3>
                </div>
                <div className="cardBody">
                  <h2 className="pricing">
                    <span>$</span>
                    10,835.55
                  </h2>
                  <p className="aging">Aging: $9,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
