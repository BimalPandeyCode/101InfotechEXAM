import "./index.css";
import React from "react";

const Title = ({ one, two }) => {
  return (
    <>
      <div className="Title">
        <h1 className="Title__one">
          {one}&nbsp;
          <span className="Title__two">{two}</span>
        </h1>
      </div>
    </>
  );
};

export default Title;
