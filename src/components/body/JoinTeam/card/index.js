import "./index.css";
import React from "react";
import Button from "../../../button";
const ReadyCard = ({ title, txt, isIntern }) => {
  return (
    <>
      <div className="ReadyCard">
        <div className="ReadyCard__div">
          <div className="ReadyCard__div__title">
            <div className="ReadyCard__div__title__txt">{title}</div>
            {isIntern ? (
              <div className="ReadyCard__div__title__intern">(Intern)</div>
            ) : (
              <></>
            )}
          </div>
          <div className="ReadyCard__div__txt">
            <div className="ReadyCard__div__txt__name">101 Infotech |</div>
            <div className="ReadyCard__div__txt__time">
              Full-time, Temporary or Contact
            </div>
          </div>
          <div className="ReadyCard__div__button">
            <Button txt={"Apply Now"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ReadyCard;
