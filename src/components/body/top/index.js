import "./index.css";
import React from "react";
import workingGuy from "../../../Assets/workingGuy.png";
import Button from "../../button";
const Top = () => {
  return (
    <>
      <div className="top">
        <div className="top__joinContainer">
          <div className="top__joinContainer__div">
            <div className="top__joinContainer__join">
              <h1>Join Our Team At</h1>
              <h1 className="top__joinContainer__join__companyName">
                101 Infotech
              </h1>
            </div>
            <div className="top__joinContainer__txtContainer">
              <p>
                What is Lorem ipsum dolor sit amet consectetuer adipiscing elit
              </p>
            </div>
            <div className="top__joinContainer__buttonContainer">
              <Button txt={"View Openings"} />
            </div>
          </div>
        </div>
        <div className="top__imgContainer">
          <div className="top__imgContainer__div">
            <img
              className="top__imgContainer__div__img"
              src={workingGuy}
              alt="Working Guy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Top;
