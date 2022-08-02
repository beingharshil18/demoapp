import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../LandingPage/landingPage.scss";
import CustomHeader from "../../components/CustomHeader/CustomHeader.jsx";
import { image } from "../../Styles/image.js";

export default function LandingPage() {
  return (
    <>
      <CustomHeader />
      <div className="wrapper">
        <div className="container">
          <div className="row cardWrapper">
            <div className="col-7">
              <div className="balance">
                <div className="customCard">
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
            </div>
            <div className="col-5">
              <div className="payments">
                <div className="customCard receive">
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

                <div className="customCard payable">
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

          <div className="row cardWrapper">
            <div className="col-7">
              <div className="notificationWrapper">
                <div className="customCard">
                  <div className="cardHeader">
                    <h3 className="cardHeading">Notifications</h3>
                  </div>
                  <div className="cardBody">
                    <div>
                      <img src={image.Rectangle} alt="" />
                    </div>
                    <div className="cardContent">
                      <div>
                        <p className="cardText">
                          Malu Romero sent an invoice for
                          <a href="/"> Business A.</a>
                        </p>
                      </div>
                      <span>1 hour ago</span>
                    </div>
                  </div>
                  <div className="cardBody">
                    <div>
                      <img src={image.Rectangle} alt="" />
                    </div>
                    <div className="cardContent">
                      <div>
                        <p className="cardText">
                          Malu Romero sent an invoice for
                          <a href="/"> Business A.</a>
                        </p>
                      </div>
                      <span>1 hour ago</span>
                    </div>
                  </div>
                  <div className="cardBody">
                    <div>
                      <img src={image.Rectangle} alt="" />
                    </div>
                    <div className="cardContent">
                      <div>
                        <p className="cardText">
                          Malu Romero sent an invoice for
                          <a href="/"> Business A.</a>
                        </p>
                      </div>
                      <span>1 hour ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="notificationWrapper">
                <div className="customCard">
                  <div className="cardHeader">
                    <h3 className="cardHeading">History</h3>
                  </div>
                  <div className="cardBody">
                    <div>
                      <img src={image.Rectangle} alt="" />
                    </div>
                    <div className="cardContent">
                      <div>
                        <p className="cardText">To Business A</p>
                      </div>
                      <span>Date, Year</span>
                    </div>
                  </div>
                  <div className="cardBody">
                    <div>
                      <img src={image.Rectangle} alt="" />
                    </div>
                    <div className="cardContent">
                      <div>
                        <p className="cardText">To Business A</p>
                      </div>
                      <span>Date, Year</span>
                    </div>
                  </div>
                  <div className="cardBody">
                    <div>
                      <img src={image.Rectangle} alt="" />
                    </div>
                    <div className="cardContent">
                      <div>
                        <p className="cardText">To Business A</p>
                      </div>
                      <span>Date, Year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
