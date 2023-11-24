import React from "react";
import "./onboardingLayout.css";
import Slider from "react-slick";
import One from "../../assets/onboarding1.png";
import Two from "../../assets/onboarding2.png";
import Three from "../../assets/onboarding3.png";
import Fourth from "../../assets/onboarding4.png";
import Fifth from "../../assets/onboarding5.png";
import Qr from "../../svg-component/qr";
import GooglePlay from "../../svg-component/googlePlay";
import AppleStore from "../../svg-component/appleStore";
import Logo from "../../svg-component/logo";
import BlueFolder from "../../assets/BlueFolder.png";

const Onboardinglayout = ({ children, type }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3500,
    cssEase: "cubic-bezier(0,0,0.58,1)",
    pauseOnHover: false,
    arrows: false,
    useTransform: true,
  };
  return (
    <div className="onboarding-layout-container">
      <div
        className={
          type === "final"
            ? "onboarding-layout-first"
            : type === "admin"
            ? "onboarding-layout-first"
            : "onboarding-layout-image"
        }
      >
        {type === "final" ? (
          <div className="onboarding-layout-family">
            <div className="onboarding-layout-text">
              <Qr />
              <h2>Download our app with QR Code</h2>
              <p>
                Scan this code with your phone camera to download our app
                instantly.
              </p>
            </div>
            <div className="appstore-buttons">
              <GooglePlay />
              <AppleStore />
            </div>
          </div>
        ) : type === "admin" ? (
          <div className="onboarding-layout-admin">
            <Logo />
            <div className="folder-container">
              <img src={BlueFolder} alt="bluefolder" />

              <div className="admin-header">
                <h1>
                  Elevate Bank<span>It</span>, Simplify Administration
                </h1>

                <h3>Live your best life</h3>
              </div>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            <img src={One} alt="one" />
            <img src={Two} alt="two" />
            <img src={Three} alt="two" />
            <img src={Fourth} alt="Fourth" />
            <img src={Fifth} alt="Fifth" />
          </Slider>
        )}
      </div>
      <div className="onboarding-layout-body">
        <div className="onboarding-layout-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Onboardinglayout;
