import React, { useState } from "react";
import "./forgotTwo.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";
import PriButton from "../../primary-button/priButton";
import OpenEye from "../../../svg-component/openEye";
import ClosedEye from "../../../svg-component/closedEye";

const ForgotTwo = ({ back, forward }) => {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(false);
  return (
    <div className="forgottwo-container">
      <div className="back-arrow">
        <ArrowLeft action={back} />
      </div>
      <div className="forgottwo-wrapper">
        <OnboardingHeader title="Enter OTP " text="We’ve sent a verification code to your email address or phone number" />
        <div className="steptwo-otp">
          <div className="otp-container">
            <div className="otp-form">
              <input type={state ? "number" : "password"} name="ssn-1" maxLength={1} onChange={handleChange} />
              <input type={state ? "number" : "password"} name="ssn-2" maxLength={1} onChange={handleChange} />
              <input type={state ? "number" : "password"} name="ssn-3" maxLength={1} onChange={handleChange} />
              <input type={state ? "number" : "password"} name="ssn-4" maxLength={1} onChange={handleChange} />
              <input type={state ? "number" : "password"} name="ssn-5" maxLength={1} onChange={handleChange} />
            </div>
            {state ? <OpenEye action={action} color="#474747" /> : <ClosedEye color="#474747" action={action} />}
          </div>
          <div className="otp-duration">
            <p>00:00</p>
            <h3>
              This code will expire in 3 minutes. Did not receive code? <span>Resend code</span>
            </h3>
          </div>
        </div>
        <PriButton text="confirm oTP" active={active} action={forward} />
      </div>
    </div>
  );
};

export default ForgotTwo;
