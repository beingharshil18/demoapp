import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../LandingPage/landingPage.scss";
import NotificationList from "../../components/NotificationList/notificationList";
import CustomHeader from "../../components/CustomHeader/customHeader";
import ToastMsg from "../../components/ToastMsg/toast";
import UserDetails from "../../components/UserDetails/userDetail";
import PaymentCard from "../../components/PaymentCard/paymentCard";
import CustomLink from "../../components/CustomLink/customLink";
import CustomButton from "../../components/CustomButton/customButton";
import { ReactComponent as UnionLogo } from "../../Assets/Images/YellowLogo.svg";
import { ReactComponent as ZigZag } from "../../Assets/Images/zigzag.svg";
import { image } from "../../Styles/image";

export default function LandingPage() {
  return (
    <>
      <CustomHeader />
      <ToastMsg />
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="userDetailWrapper">
                <div className="userProfile">
                  <UnionLogo />
                </div>
                <UserDetails
                  username="Hooli HQ"
                  address="@hooliheadquarters"
                  company="Tech Company • NYC "
                />
              </div>
            </div>
          </div>
          <div className="row  cardWrapper">
            <div className="col-lg-7 col-md-7  col-xs-12">
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
                    <CustomButton btnClass="btnPrimary" btnLabel="Add Funds" />
                    <CustomButton
                      btnClass="btnSecondary"
                      btnLabel="Withdraw Funds"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5  col-xs-12">
              <div className="payments">
                <PaymentCard
                  paymentCard="paymentCard"
                  heading="Receivable (AR)"
                  price="10,835.55"
                  aging="$9,000"
                />
                <PaymentCard
                  heading="Payable (AP)"
                  price="10,835.55"
                  aging="$9,000"
                />
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
                  <div className="cardBody notificationCardBody">
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      cardtext={"Malu Romero sent an invoice for"}
                      cardlink={" Business A."}
                      time={"1 hour ago"}
                    />
                  </div>
                  <div className="cardFooter">
                    <CustomLink link="view all (230)" />
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
                  <div className="cardBody historyCardBody">
                    <NotificationList
                      photo={image.Rectangle}
                      batchClass="batchClass"
                      cardtext={"To Business A"}
                      time={"1 hour ago"}
                      revenue={"-$50.00"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      batchClass="batchClass"
                      cardtext={"To Business A"}
                      time={"1 hour ago"}
                      revenue={"-$60.00"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      batchClass="batchClass"
                      cardtext={"To Business A"}
                      time={"1 hour ago"}
                      revenue={"-$70.00"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      batchClass="batchClass"
                      cardtext={"To Business A"}
                      time={"1 hour ago"}
                      revenue={"-$80.00"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      batchClass="batchClass"
                      cardtext={"To Business A"}
                      time={"1 hour ago"}
                      revenue={"-$10.00"}
                    />
                    <NotificationList
                      photo={image.Rectangle}
                      batchClass="batchClass"
                      cardtext={"To Business A"}
                      time={"1 hour ago"}
                      revenue={"-$20.00"}
                    />
                  </div>
                  <div className="cardFooter">
                    <CustomLink link="view all (230)" />
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
