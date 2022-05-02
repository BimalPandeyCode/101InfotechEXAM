import "./index.css";
import React from "react";
import Title from "../../twoColorTitle/index";
import Card from "./card";
import Card2 from "../AtInfotech/card";
import Button from "../../button";
import AboutOurUsers from "./purpleBox";
//
import cvSubmission from "../../../Assets/cvSubmission.png";
import phoneScreening from "../../../Assets/PhoneScreening.png";
import skillAssesment from "../../../Assets/skillAssesment.png";
import finalInterview from "../../../Assets/FinalInterview.png";

const ReadyToJoin = () => {
  return (
    <>
      <div className="ready">
        <div className="ready__div">
          <div className="ready__div__container">
            <div className="ready__div__container__title">
              <Title one={"Are You Ready To Join our"} two={"Team"} />
            </div>
            <div className="ready__div__container__cardHolder">
              <div className="ready__div__container__cardHolder__container">
                <Card title={"Word Press Designer"} isIntern={true} />
                <Card title={"Digital Marketing"} isIntern={false} />
                <Card title={"Graphic Designer"} isIntern={false} />
                <Card title={"Front-End Developer"} isIntern={false} />
                <Card title={"Back-End Developer"} isIntern={false} />
              </div>
            </div>
            <div className="ready__div__container__button">
              <div>
                <Button txt={"View All Openings"} />
              </div>
            </div>
          </div>
          <div className="">
            <AboutOurUsers />
          </div>
        </div>
        <div className="ready__recruitment">
          <div className="ready__recruitment__titleContainer">
            <Title one={"Learn Our Recruitment"} two={"Process"} />
          </div>
          <div className="ready__recruitment__cardsContainer">
            <div className="ready__recruitment__cardsContainer__div">
              <Card2
                logo={cvSubmission}
                title={"CV Submission"}
                txt={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                }
              />
              <Card2
                logo={phoneScreening}
                title={"Phone Screnning"}
                txt={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                }
              />
              <Card2
                logo={skillAssesment}
                title={"Skill Assessment"}
                txt={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                }
              />
              <Card2
                logo={finalInterview}
                title={"Final Interview"}
                txt={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadyToJoin;
