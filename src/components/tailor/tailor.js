import React from "react";
import "./tailor.css";
import Layout from "../../utils/layout/layout";
import DesignSingle from "../design-single/designSingle";
import Financial from "../../assets/financial.png";
import Instant from "../../assets/instant.png";
import Rewards from "../../assets/rewards.png";

const Tailor = () => {
  return (
    <div className="tailor-container">
      <Layout>
        <div className="tailor-wrapper">
          <div className="tailor-header">
            <p>FEATURES THAT SPEAK YOUR LANGUAGE</p>
            <h2>
              Tailored to Meet Your <span>Daily Needs</span>
            </h2>
          </div>
          <div className="tailor-body">
            <div className="tailor-cont">
              <div>
                <DesignSingle
                  color="#062983"
                  img={Financial}
                  title="Financial Insights"
                  text="Get personalized insights into your spending and make informed decisions."
                  bgColor="#fff"
                />
              </div>
              <div>
                <DesignSingle color="#062983" img={Instant} title="Instant Transfers" text="Send money to friends and loved ones, and manage expenses instantly." bgColor="#fff" />
              </div>
            </div>
            <div className="tailor-cont">
              <div>
                <DesignSingle color="#062983" img={Rewards} title="Rewards" text="Earn points to compete amongst your friends" bgColor="#fff" />
              </div>
              <div>
                <DesignSingle color="#062983" img={Rewards} title="Security First" text="Security copy content needed here" bgColor="#fff" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Tailor;
