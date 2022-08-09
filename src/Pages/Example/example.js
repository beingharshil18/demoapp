import React from "react";
import "../../Styles/variables.scss";
import "../../Styles/app.scss";
import "../Example/example.scss";
import CustomHeader from "../../components/CustomHeader/customHeader";
import { Link } from "react-router-dom";

export default function example() {
  return (
    <>
      <CustomHeader />
      <div className="exampleWrapper">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="customCard">
                <div className="row">
                  <div className="col-4">
                    <Link to="/example/page" className="btnPrimary">
                      Page-1
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/example/page" className="btnPrimary">
                      Page-2
                    </Link>
                  </div>
                  <div className="col-4">
                    <Link to="/example/page" className="btnPrimary">
                      Page-3
                    </Link>
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
