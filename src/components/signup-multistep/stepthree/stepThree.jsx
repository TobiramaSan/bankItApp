import React, { useState } from "react";
import "./stepThree.css";
import PriButton from "../../primary-button/priButton";
import ArrowLeft from "../../../svg-component/arrowLeft";
import Info from "../../../svg-component/info";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";

const StepThree = ({ back, forward }) => {
  const [active, setActive] = useState(false);
  const [suggesstions, setSuggestions] = useState(["@adolf", "@adam", "@aadolfus"]);
  const [value, setValue] = useState("");
  return (
    <div className="stepthree-container">
      <div className="stepthree-wrapper">
        <div className="back-button">
          <ArrowLeft action={back} />
        </div>
        <div className="stepthree-cont">
          <OnboardingHeader title="Just One More Thing..." text="Create your Bankit User name" />
          <div className="step-one-single">
            <div>
              <input
                type="text"
                required
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setActive(true);
                  setSuggestions((arr) => [...arr, e.target.value]);
                }}
              />
              <span>Create a username</span>
            </div>
            <Info />
          </div>
        </div>
        <div className="stepthree-suggestions">
          {suggesstions?.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  setValue(item);
                  setActive(true);
                }}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <PriButton text="Next" active={active} action={forward} />
    </div>
  );
};

export default StepThree;
