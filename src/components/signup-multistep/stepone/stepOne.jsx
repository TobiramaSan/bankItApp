import React, { useState } from "react";
import "./stepOne.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import PriButton from "../../primary-button/priButton";
import Info from "../../../svg-component/info";
import ClosedEye from "../../../svg-component/closedEye";
import OpenEye from "../../../svg-component/openEye";
import { useNavigate } from "react-router-dom";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";
import PasswordHint from "../../../utils/password";

const StepOne = ({ submit }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);
  const action = () => {
    setState(!state);
  };

  return (
    <div className="step-one-container">
      <div className="back-button">
        <ArrowLeft
          action={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="step-one-body">
        <OnboardingHeader
          title="Get Started"
          text="Enter your details to create a Bankit account"
        />
        <form onSubmit={submit}>
          <div className="step-one-form">
            <div className="step-one-group">
              <div className="step-one-single">
                <div>
                  <input type="text" required />
                  <span>First name</span>
                </div>
                <Info />
              </div>
              <div className="step-one-single">
                <div>
                  <input type="text" required="required" />
                  <span>Last name</span>
                </div>
                <Info />
              </div>
              <div className="step-one-single">
                <div>
                  <input type="tel" required />
                  <span>Phone number</span>
                </div>
                <Info />
              </div>
              <div className="step-one-single">
                <div>
                  <input
                    type={state ? "text" : "password"}
                    required
                    onInput={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <span>Password</span>
                </div>
                {state ? (
                  <OpenEye action={action} color="#474747" />
                ) : (
                  <ClosedEye color="#474747" action={action} />
                )}
              </div>
            </div>
            <PasswordHint
              password={password}
              setActiveTrue={() => {
                setActive(true);
              }}
              setActiveFalse={() => {
                setActive(false);
              }}
            />
          </div>
          <PriButton text="Next" active={active} />
        </form>
      </div>
      <p>
        Already have an account?
        <span
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          Log in
        </span>
      </p>
    </div>
  );
};

export default StepOne;
