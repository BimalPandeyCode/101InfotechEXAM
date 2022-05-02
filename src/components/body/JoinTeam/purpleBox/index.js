import "./index.css";
import React from "react";

const AboutOurUsers = () => {
  return (
    <>
      <div className="customer">
        <div className="customer__div">
          <div className="customer__div__container">
            <div className="customer__div__spanContainer">
              <span className="customer__div__one"></span>
            </div>
            <div className="customer__div__spanContainer2">
              <span className="customer__div__two"></span>
            </div>
          </div>
          <div className="customer__div__infoContainer">
            <div className="customer__div__infoContainer__div">
              <div className="customer__div__infoContainer1">
                <h1 className="customer__div__infoContainer1__num">45+</h1>
                <div className="customer__div__infoContainer1__txt">
                  Team Members
                </div>
              </div>
              <div className="customer__div__infoContainer2">
                <h1 className="customer__div__infoContainer2__num">35+</h1>
                <div className="customer__div__infoContainer2__txt">
                  Projects
                </div>
              </div>
              <div className="customer__div__infoContainer3">
                <h1 className="customer__div__infoContainer3__num">250+</h1>
                <div className="customer__div__infoContainer3__txt">
                  Happy Users
                </div>
              </div>
              <div className="customer__div__infoContainer4">
                <h1 className="customer__div__infoContainer4__num">25K</h1>
                <div className="customer__div__infoContainer4__txt">
                  Happy Moments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutOurUsers;
