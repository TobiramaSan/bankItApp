import React from "react";
import "./revolute.css";
import Phone from "../../assets/iPhone.png";
import Layout from "../../utils/layout/layout";
import PlayStore from "../../svg-component/play-store/playStore";
import AppStore from "../../svg-component/app-store/appStore";

const Revolute = () => {
  return (
    <Layout>
      <div className="revolute-container">
        <div className="revolute-text">
          <div className="revolute-text1">
            <h2>
              Revolutionize Your <span>Finances</span>
            </h2>
            <p>Download BankIt App</p>
          </div>
          <div className="revolute-text-store">
            <div className="revolute-store">
              <PlayStore />
              <div>
                <h2>Get it on</h2>
                <p>Play store</p>
              </div>
            </div>
            <div className="revolute-store">
              <AppStore />
              <div>
                <h2>Get it on</h2>
                <p>App store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="revolute-img">
          <img src={Phone} alt="phone" />
        </div>
      </div>
    </Layout>
  );
};
export default Revolute;
