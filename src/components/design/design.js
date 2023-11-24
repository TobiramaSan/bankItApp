import React from "react";
import "./design.css";
import Layout from "../../utils/layout/layout";
import DesignSingle from "../design-single/designSingle";
import Arrow from "../../assets/quick-share.png";

const Design = () => {
  return (
    <div className="design-container">
      <Layout>
        <div className="design-cont">
          <div className="design-header">
            <p>WHY CHOOSE US</p>
            <h2>
              Designed for your <span>generation in mind </span>
            </h2>
          </div>
          <div className="design-body">
            <div className="design-wrapper">
              <div>
                <DesignSingle
                  color="white"
                  img={Arrow}
                  bgColor="#021031"
                  title="Digital at Heart"
                  text="Embrace the digital age with an app that fits your tech-savvy lifestyle."
                />
              </div>
              <div>
                <DesignSingle
                  color="white"
                  img={Arrow}
                  bgColor="#6083DD"
                  title="Digital at Heart"
                  text="Embrace the digital age with an app that fits your tech-savvy lifestyle."
                />
              </div>
            </div>
            <DesignSingle
              color="white"
              img={Arrow}
              bgColor="#E46C0B"
              title="Your Voice Matters"
              text="We understand what you value, and we've tailored our app to reflect your needs."
              type="long"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Design;
