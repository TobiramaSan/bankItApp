import React from "react";
import "./welcome.css";
import Header from "../header/header";
import PriButton from "../primary-button/priButton";
import SecButton from "../sec-button/secButton";
import Brands from "../brands/brands";
import WelcomeImage from "../../assets/welcome.png";
import Layout from "../../utils/layout/layout";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Header />
      <div className="welcome-wrapper">
        <Layout>
          <div className="welcome-cont">
            <div className="welcome-hero">
              <div className="welcome-text">
                <h2>
                  Banking made just for <span>you</span>
                </h2>
                <p>Seamless Banking at your Fingertrips</p>
              </div>
              <div className="welcome-action">
                <div>
                  <PriButton text="Get started" active={true} />
                </div>
                <div>
                  <SecButton text="Download App" />
                </div>
              </div>
            </div>
            <div className="welcome-img">
              <img src={WelcomeImage} alt="welcome" />
            </div>
          </div>
        </Layout>
      </div>
      <Brands />
    </div>
  );
};

export default Welcome;
