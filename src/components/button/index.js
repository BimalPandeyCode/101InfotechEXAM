import "./index.css";
import React from "react";
const Button = ({ txt }) => {
  return (
    <button className="Button" type="button">
      {txt}
    </button>
  );
};

export default Button;
