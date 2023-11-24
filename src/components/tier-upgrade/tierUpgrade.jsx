import React from "react";
import "./tierUpgrade.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import Rocket from "../../assets/rocket.png";
import PriButton from "../primary-button/priButton";

const TierUpgrade = ({ right, action }) => {
  return (
    <SupportStyled right={right}>
      <div className="tierupgrade-container">
        <div className="tierupgrade-header">
          <Close action={action} color="#474747" />
        </div>
        <div className="tierupgrade-wrapper">
          <div>
            <img src={Rocket} alt="rocket" />
            <h2>Tier Upgrade</h2>
            <p>Continue your tier upgrade on our mobile app</p>
          </div>
          <PriButton text="Open app" active={true} />
        </div>
      </div>
    </SupportStyled>
  );
};

export default TierUpgrade;
