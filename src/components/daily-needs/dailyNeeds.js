import React from "react";
import "./dailyNeeds.css";
import Layout from "../../utils/layout/layout";
import DesignSingle from "../design-single/designSingle";
import Arrow from "../../assets/quick-share.png";

const DailyNeeds = () => {
  return (
    <div className="daily-needs-container">
      <Layout>
        <div className="daily-needs-wrapper">
          <div className="daily-needs-header">
            <p>BANKING AT IT’S FINEST</p>
            <h2>
              Bank that gets your <span>Daily Needs</span>
            </h2>
          </div>
          <div className="design-body">
            <div className="design-wrapper">
              <div>
                <DesignSingle img={Arrow} color="#062983" bgColor="#fff" title="Express Yourself" text="Embrace the digital age with an app that fits your tech-savvy lifestyle." />
              </div>
              <div>
                <DesignSingle img={Arrow} color="#fff" bgColor="#5482F7" title="Student Friendly" text="Take control of your finances and achieve your goals with ease" />
              </div>
            </div>
            <DesignSingle
              img={Arrow}
              color="#062983"
              bgColor="#FFF1CC"
              title="No Hidden Fees"
              text="Embrace the digital age with an app that fits your tech-savvy lifestyle."
              type="long"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DailyNeeds;
