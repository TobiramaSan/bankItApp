import React, { useState } from "react";
import "./forgotThree.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";
import OpenEye from "../../../svg-component/openEye";
import ClosedEye from "../../../svg-component/closedEye";
import PriButton from "../../primary-button/priButton";

const ForgotThree = ({ forward, back }) => {
  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);
  const action = () => {
    setState(!state);
  };
  return (
    <div className="forgotone-container">
      <div className="back-arrow">
        <ArrowLeft action={back} />
      </div>
      <div className="forgotone-wrapper">
        <div className="forgotone-cont">
          <OnboardingHeader title="Create Password" text="Create a new password for your account" />
          <div className="step-one-single">
            <div>
              <input
                type={state ? "text" : "password"}
                required
                onInput={(e) => {
                  if (e.target.value.length > 0) {
                    setActive(true);
                  } else {
                    setActive(false);
                  }
                }}
              />
              <span>Password</span>
            </div>
            {state ? <OpenEye action={action} color="#474747" /> : <ClosedEye color="#474747" action={action} />}
          </div>
        </div>
        <PriButton text="Next" active={active} action={forward} />
      </div>
    </div>
  );
};

export default ForgotThree;
