import "./index.css";
import React from "react";
import bigDummy from "../../../Assets/bigdummy.png";
const Newsletter = () => {
  return (
    <>
      <div className="newsletter">
        <div className="newsletter__div">
          <div className="newsletter__div__container">
            <div className="newsletter__div__container__top">
              <div className="newsletter__div__container__top__titleContainer">
                <h2 className="newsletter__div__container__top__titleContainer__title">
                  Join our newsletter
                </h2>
                <div className="newsletter__div__container__top__titleContainer__txt">
                  Sign up to stay updated with the latest insights, news, and
                  more.
                </div>
              </div>
              <div className="newsletter__div__container__top__input">
                <div className="newsletter__div__container__top__input__container">
                  <div className="newsletter__div__container__top__input__container__inputDiv">
                    <input
                      className="newsletter__div__container__top__input__container__inputDiv__input"
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                    />
                  </div>
                  <div className="newsletter__div__container__top__input__container__container">
                    <button
                      className="newsletter__div__container__top__input__container__container__button"
                      type="button"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="newsletter__div__container__middle">
              <Card
                title={"Company"}
                texts={[
                  { txt: "About Us", link: "#" },
                  { txt: "What We Do", link: "#" },
                  { txt: "Contact", link: "#" },
                ]}
              />
              <Card
                title={"Services"}
                texts={[
                  { txt: "Web Design", link: "#" },
                  { txt: "App Development", link: "#" },
                  { txt: "Graphics Designing", link: "#" },
                  { txt: "Digital Marketing", link: "#" },
                  { txt: "SEO Optimization", link: "#" },
                ]}
              />
              <Card
                title={"Join"}
                texts={[
                  { txt: "Careers at 101Infotech", link: "#" },
                  { txt: "Internships", link: "#" },
                ]}
              />
              <Card
                title={"Connect With Us"}
                texts={[
                  { txt: "Blog", link: "#" },
                  { txt: "Facebook", link: "#" },
                  { txt: "Instagram", link: "#" },
                  { txt: "Twitter", link: "#" },
                  { txt: "Linkedin", link: "#" },
                  { txt: "Youtube", link: "#" },
                ]}
              />
            </div>
            <div className="newsletter__div__container__bottom">
              <div className="newsletter__div__container__bottom__left">
                <div className="newsletter__div__container__bottom__left__copyright">
                  Copyright 2022 101InfoTech. All rights reserved.&nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp;
                </div>
                <div className="newsletter__div__container__bottom__left__privacy">
                  Privacy Policy
                </div>
              </div>
              <div className="newsletter__div__container__bottom__logo">
                <div className="newsletter__div__container__bottom__logo__div">
                  <img src={bigDummy} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ title, texts }) => {
  let TextHTML = [];
  for (let i = 0; i < texts.length; i++) {
    TextHTML.push(
      <a
        href={texts[i].link}
        className="newsletterCard__div__texts__each"
        key={i + Math.random()}
      >
        {texts[i].txt}
      </a>
    );
  }

  return (
    <>
      <div className="newsletterCard">
        <div className="newsletterCard__div">
          <div className="newsletterCard__div__titleContainer">
            <div className="newsletterCard__div__titleContainer__title">
              {title}
            </div>
          </div>
          <div className="newsletterCard__div__texts">{TextHTML}</div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
