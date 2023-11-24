import React from "react";
import "./services.css";
import Airtime from "../../svg-component/airtime";
import Data from "../../svg-component/data";
import Nepa from "../../svg-component/nepa";
import Cable from "../../svg-component/cable";

const Services = () => {
  return (
    <div className="services-container">
      <h2>Services</h2>
      <div className="services-wrapper">
        <div className="services-single">
          <div>
            <Airtime />
          </div>
          <p>Buy airtime</p>
        </div>
        <div className="services-single">
          <div>
            <Data />
          </div>
          <p>Buy data</p>
        </div>
        <div className="services-single">
          <div>
            <Nepa />
          </div>
          <p>Pay for electricity</p>
        </div>
        <div className="services-single">
          <div>
            <Cable />
          </div>
          <p>Pay for cable</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
