import React, { useState } from "react";
import "./powerUp.css";
import Rocket from "../../assets/rocket.png";
import Right from "../../svg-component/right";
import TierUpgrade from "../tier-upgrade/tierUpgrade";

const PowerUp = () => {
  const [right, setRight] = useState("-700px");
  return (
    <>
      <div
        className="powerup-container"
        onClick={() => {
          setRight("0px");
        }}>
        <div className="powerup-img">
          <img src={Rocket} alt="rocket" />
        </div>
        <div className="powerup-text">
          <h2>Power up to Tier 1</h2>
          <p>Upgrade your account and do more on BankIT. Tap to proceed.</p>
        </div>
        <Right color="#245EF5" />
      </div>
      <TierUpgrade
        right={right}
        action={() => {
          setRight("-700px");
        }}
      />
    </>
  );
};

export default PowerUp;
