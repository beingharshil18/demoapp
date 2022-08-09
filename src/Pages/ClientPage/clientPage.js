import React from "react";
import CustomHeader from "../../components/CustomHeader/customHeader";
import "../ClientPage/clientPage.scss";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import { image } from "../../Styles/image";
import { ReactComponent as LargeUnionIcon } from "../../Assets/Images/largeUnion.svg";

export default function clientPage() {
  return (
    <>
      <CustomHeader />
      <div className="clientWrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="wallBanner">
                <img src={image.Banner} alt="" />
                <div className="userProfile">
                  <div className="profilePhoto">
                    <LargeUnionIcon />
                  </div>
                </div>
              </div>
              <div className="userDetailWrapper">
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
          <div className="row">
            <div className="col-7">
              <div className="customCard">
                <div className="cardHeader">
                  <h4 className="cardHeading">About</h4>
                </div>
                <div className="cardBody">
                  <p>
                    Pied Piper is a molecular diagnostics company, which focuses
                    on the early detection and prevention of colorectal cancer.
                    It developed Cologuard, a screening test for the early
                    detection of colorectal cancer and pre-cancer.
                  </p>
                </div>
                <div className="cardFooter">
                  <div className="btnSecondary">Cancel</div>
                  <div className="btnPrimary">Add Funds</div>
                </div>
              </div>
            </div>

            <div className="col-5">
              <div className="addBanner">
                <div className="bannerVector">
                  <img src={image.BannerVector} alt="" />
                </div>
                <div className="bannerHero">
                  <img src={image.HeroBanner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
