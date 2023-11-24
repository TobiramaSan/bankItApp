import React, { useState } from "react";
import "./loginForm.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import OpenEye from "../../../svg-component/openEye";
import ClosedEye from "../../../svg-component/closedEye";
import Info from "../../../svg-component/info";
import PriButton from "../../primary-button/priButton";
import { useNavigate } from "react-router-dom";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";

const LoginForm = ({ forward }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [active, setActive] = useState(false);
  const action = () => {
    setState(!state);
  };
  return (
    <div className="loginform-container">
      <div className="back-button">
        <ArrowLeft
          action={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="loginform-wrapper">
        <OnboardingHeader title="Login" text="Enter your details to login to your Bankit account." />
        <div className="loginform-content">
          <div className="loginform-cont">
            <div className="loginform-group">
              <div className="step-one-single">
                <div>
                  <input type="text" required="required" />
                  <span>Phone or email</span>
                </div>
                <Info />
              </div>
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
            <div className="loginform-forgot">
              <h2
                onClick={() => {
                  navigate("/auth/forgot-password");
                }}>
                Forgot password?
              </h2>
            </div>
          </div>
          <PriButton text="Next" active={active} action={forward} />
        </div>
      </div>
      <p>
        Don’t have an account?
        <span
          onClick={() => {
            navigate("/auth/signup");
          }}>
          Get Started
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
