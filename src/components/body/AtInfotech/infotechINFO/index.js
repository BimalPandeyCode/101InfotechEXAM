import "./index.css";
import React from "react";
import Button from "../../../button";
import Title from "../../../twoColorTitle";

const InfoTechInfo = () => {
  return (
    <>
      <div className="infotechInfo">
        <div className="infotechInfo__div">
          <div className="infotechInfo__div__title">
            <Title one={"Your Life At"} two={"101 Infotech"} />
          </div>
          <div className="infotechInfo__div__txt">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!ratione temporibus aperiam harum alias
            officiis assumenda officia quibusdam deleniti eos cupiditate dolore
            doloribus!
          </div>
          <div className="infotechInfo__div__button">
            <Button txt={"Learn More"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoTechInfo;
