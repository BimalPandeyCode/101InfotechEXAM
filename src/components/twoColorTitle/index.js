import "./index.css";
import React from "react";

const Title = ({ one, two }) => {
  return (
    <>
      <div className="Title">
        <h1 className="Title__one">{one}&nbsp;</h1>
        <h1 className="Title__two">{two}</h1>
      </div>
    </>
  );
};

export default Title;
