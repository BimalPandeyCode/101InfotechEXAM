import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import logo from "../../Assets/logo.png";
import down from "../../Assets/down.png";
import hamburgermenu from "../../Assets/Hamburger Menu.png";
import gsap from "gsap";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServiceOpenMobile, setIsServiceOpenMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSideMenuOpen, stIsSideMenuOpen] = useState(false);
  useEffect(() => {
    if (isSideMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isSideMenuOpen]);
  useEffect(() => {
    if (window.innerWidth <= 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      stIsSideMenuOpen(false);
      setIsServiceOpenMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        stIsSideMenuOpen(false);
        setIsServiceOpenMobile(false);
      }
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);
  function OutsideClickDetector(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsServicesOpen(false);
          setIsServiceOpenMobile(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const dropdownRef = useRef(null);
  const mobileDropDown = useRef(null);
  OutsideClickDetector(dropdownRef);
  OutsideClickDetector(mobileDropDown);
  return (
    <>
      {isSideMenuOpen ? (
        <SideNavBar
          stIsSideMenuOpen={stIsSideMenuOpen}
          isServiceOpenMobile={isServiceOpenMobile}
          setIsServiceOpenMobile={setIsServiceOpenMobile}
          mobileDropDown={mobileDropDown}
        />
      ) : (
        <></>
      )}
      <div className="Navbar">
        <div className="Navbar__logo">
          <div className="Navbar__logo__container">
            <img className="Navbar__logo__container__img" alt="" src={logo} />
          </div>
        </div>
        {!isMobile ? (
          <div className="Navbar__navigation">
            <div className="Navbar__navigation__home">
              <div className="Navbar__navigation__home__txt">Home</div>
              <span className="Navbar__navigation__home__span"></span>
            </div>
            <div className="Navbar__navigation__about">
              <div className="Navbar__navigation__about__txt">About</div>
              <span className="Navbar__navigation__about__span"></span>
            </div>
            <div
              className="Navbar__navigation__services"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onBlur={() => setIsServicesOpen(false)}
              ref={dropdownRef}
            >
              <div className="Navbar__navigation__services__txt">
                <p>Services</p>
                <div>
                  <img src={down} alt="" />
                </div>
                {isServicesOpen ? <Dropdown /> : <></>}
              </div>
              <span className="Navbar__navigation__services__span"></span>
            </div>
            <div className="Navbar__navigation__blogs">
              <div className="Navbar__navigation__blogs__txt">Blogs</div>
              <span className="Navbar__navigation__blogs__span"></span>
            </div>
            <div className="Navbar__navigation__contact">
              <div className="Navbar__navigation__contact__txt">Contact</div>
              <span className="Navbar__navigation__contact__span"></span>
            </div>
          </div>
        ) : (
          <SideMenu
            isSideMenuOpen={isSideMenuOpen}
            stIsSideMenuOpen={stIsSideMenuOpen}
          />
        )}
        <div className="Navbar__login">
          <div className="Navbar__login__button">
            <div className="Navbar__login__button__txt">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

const SideMenu = ({ isSideMenuOpen, stIsSideMenuOpen }) => {
  return (
    <>
      <div
        className="sideMenu"
        onClick={() => stIsSideMenuOpen(!isSideMenuOpen)}
      >
        <img src={hamburgermenu} alt="menu" />
      </div>
    </>
  );
};

const SideNavBar = ({
  stIsSideMenuOpen,
  isServiceOpenMobile,
  setIsServiceOpenMobile,
  mobileDropDown,
}) => {
  useEffect(() => {
    gsap.fromTo(
      ".sideNavbar__right",
      {
        x: "100%",
        duration: 0.5,
      },
      {
        x: 0,
      }
    );
  }, []);
  return (
    <>
      <div className="sideNavbar">
        <div
          className="sideNavbar__left"
          onClick={() => {
            stIsSideMenuOpen(false);

            setIsServiceOpenMobile(false);
          }}
        ></div>
        <div className="sideNavbar__right">
          <div className="sideNavbar__right__div">
            <div className="sideNavbar__right__div__home">Home</div>
            <div className="sideNavbar__right__div__about">About</div>
            <div className="sideNavbar__right__div__service">
              <div
                className="sideNavbar__right__div__service__titleContainer"
                onClick={() => setIsServiceOpenMobile(!isServiceOpenMobile)}
                ref={mobileDropDown}
              >
                <div>Services</div>
                <div>
                  <img src={down} alt="" />
                </div>
              </div>
              <div className="sideNavbar__right__div__service__menuContainer">
                {isServiceOpenMobile ? <DropdownMobile /> : <></>}
              </div>
            </div>
            <div className="sideNavbar__right__div__blog">Blogs</div>
            <div className="sideNavbar__right__div__contact">Contact</div>
          </div>
        </div>
      </div>
    </>
  );
};

const Dropdown = () => {
  return (
    <>
      <div className="dropdown">
        <div className="dropdown__container">
          <span></span>
          <div
            className="dropdown__container__one"
            onMouseEnter={() => mouseEnterAnim("dropdown__container__one")}
            onMouseLeave={() => mouseLeaveAnim("dropdown__container__one")}
          >
            Service 1
          </div>
          <div
            className="dropdown__container__two"
            onMouseEnter={() => mouseEnterAnim("dropdown__container__two")}
            onMouseLeave={() => mouseLeaveAnim("dropdown__container__two")}
          >
            Service 2
          </div>
          <div
            className="dropdown__container__three"
            onMouseEnter={() => mouseEnterAnim("dropdown__container__three")}
            onMouseLeave={() => mouseLeaveAnim("dropdown__container__three")}
          >
            Service 3
          </div>
        </div>
      </div>
    </>
  );
};
const DropdownMobile = () => {
  useEffect(() => {
    gsap.fromTo(
      ".dropdownMobile",
      {
        height: 0,
        duration: 0.1,
      },
      {
        height: "auto",
        duration: 0.1,
      }
    );
  }, []);
  return (
    <>
      <div className="dropdownMobile">
        <div className="dropdownMobile__div">
          <div className="dropdownMobile__div__one">Service 1</div>
          <div className="dropdownMobile__div__two">Service 2</div>
          <div className="dropdownMobile__div__three">Service 3</div>
        </div>
      </div>
    </>
  );
};
const mouseEnterAnim = (className) => {
  gsap.to(`.${className}`, {
    x: 3,
    backgroundColor: "#f0f0f0",
    color: "#383838",
    duration: 0.2,
    paddingRight: 8,
  });
};
const mouseLeaveAnim = (className) => {
  gsap.to(`.${className}`, {
    x: 0,
    backgroundColor: "#ffffff",
    color: "#00000",
    duration: 0.2,
    paddingRight: 15,
  });
};
export default Navbar;
