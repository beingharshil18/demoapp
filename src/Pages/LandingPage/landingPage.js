import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../LandingPage/landingPage.scss";
import CustomHeader from "../../components/CustomHeader/customHeader";
import { ReactComponent as LargeUnionIcon } from "../../Assets/Images/largeUnion.svg";
import { ReactComponent as ZigZag } from "../../Assets/Images/zigzag.svg";
import { image } from "../../Styles/image";

export default function LandingPage() {
  return (
    <>
      <CustomHeader />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="userDetailWrapper">
                <div className="userProfile">
                  <LargeUnionIcon />
                </div>
                <div className="userDetail">
                  <h3>Hooli HQ</h3>
                  <a href="../../components/CustomHeader/customHeader">
                    @hooliheadquarters
                  </a>
                  <span>Tech Company • NYC </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row  cardWrapper">
            <div className="col-7 col-md-">
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
            <div className="col-5 col-md-">
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
            <div className="col-lg-7 col-md-12">
              <div className="notificationWrapper">
                <div className="customCard">
                  <div className="cardHeader">
                    <h3 className="cardHeading">Notifications</h3>
                  </div>
                  <div className="cardBody">
                    <div className="notificationList">
                      <div>
                        <img src={image.Rectangle} alt="" />
                      </div>
                      <div className="cardContent">
                        <div>
                          <p className="cardText">
                            Malu Romero sent an invoice for{" "}
                            <a href="/"> Business A.</a>
                          </p>
                        </div>
                        <span>1 hour ago</span>
                      </div>
                    </div>
                    <div className="notificationList">
                      <div>
                        <img src={image.Rectangle} alt="" />
                      </div>
                      <div className="cardContent">
                        <div>
                          <p className="cardText">
                            Malu Romero sent an invoice for{" "}
                            <a href="/"> Business A.</a>
                          </p>
                        </div>
                        <span>1 hour ago</span>
                      </div>
                    </div>
                    <div className="notificationList">
                      <div>
                        <img src={image.Rectangle} alt="" />
                      </div>
                      <div className="cardContent">
                        <div>
                          <p className="cardText">
                            Malu Romero sent an invoice for{" "}
                            <a href="/"> Business A.</a>
                          </p>
                        </div>
                        <span>1 hour ago</span>
                      </div>
                    </div>
                    <div className="notificationList">
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
                    <div className="notificationList">
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
                  <div className="cardFooter">
                    <div>
                      <a href="/">view all</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="notificationWrapper historyWrapper">
                <div className="customCard">
                  <div className="cardHeader">
                    <h3 className="cardHeading">History</h3>
                  </div>
                  <div className="cardBody">
                    <div className="notificationList">
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
                    <div className="notificationList">
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
                    <div className="notificationList">
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
                  <div className="cardFooter">
                    <div>
                      <a href="/">view all</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hooliWrapper">
                <div className="heroImg">
                  <img src={image.Lady} alt="hero" />
                </div>
                <div className="hooliContent">
                  <p>Refer someone and win $500</p>
                  <h4>
                    HooliHQ
                    <span>
                      <ZigZag className="zigZag" />
                    </span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
