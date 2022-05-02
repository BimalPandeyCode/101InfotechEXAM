import "./index.css";
import React from "react";

const Card = ({ logo, title, txt }) => {
  return (
    <>
      <div className="Card">
        <div className="Card__logo">
          <img className="Card__logo__img" src={logo} alt={""} />
        </div>
        <div className="Card__container">
          <div className="Card__container__div">
            <div className="Card__container__title">{title}</div>
            <div className="Card__container__txt">{txt}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
