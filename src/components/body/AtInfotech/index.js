import "./index.css";
import React from "react";
//
import oppertunity from "../../../Assets/oppertunity.png";
import location from "../../../Assets/location.png";
import award from "../../../Assets/award.png";
//
import Card from "./card";
import InfoTechInfo from "./infotechINFO";

const AtInfoTech = () => {
  return (
    <>
      <div className="AtInfoTech">
        <div className="AtInfoTech__cardContainer">
          <div className="AtInfoTech__cardContainer__div">
            <div className="AtInfoTech__cardContainer__div__one">
              <div className="AtInfoTech__cardContainer__div__one__one">
                <Card
                  logo={""}
                  title={"Great Co workers"}
                  txt={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                  }
                />
              </div>
              <div className="AtInfoTech__cardContainer__div__one__two">
                <Card
                  logo={oppertunity}
                  title={"Education Opportunity"}
                  txt={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                  }
                />
              </div>
            </div>
            <div className="AtInfoTech__cardContainer__div__two">
              <div className="AtInfoTech__cardContainer__div__two__one">
                <Card
                  logo={location}
                  title={"Easy Location"}
                  txt={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                  }
                />
              </div>
              <div>
                <Card
                  logo={award}
                  title={"Performance Award"}
                  txt={
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae beatae natus eveniet ratione temporibus aperiam harum alias officiis "
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="AtInfoTech__infoContainer">
          <InfoTechInfo />
        </div>
      </div>
    </>
  );
};
export default AtInfoTech;
