import React, { useState } from "react";
import "./forgotOne.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import PriButton from "../../primary-button/priButton";
import Info from "../../../svg-component/info";
import OnboardingHeader from "../../onboarding-header/onboardingHeader";
import { useNavigate } from "react-router-dom";

const ForgotOne = ({ forward, action, page }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  return (
    <div className="forgotone-container">
      <div className="back-arrow">
        <ArrowLeft
          action={() => {
            page === "admin"
              ? navigate("/admin/login")
              : navigate("/auth/login");
          }}
        />
      </div>
      <div className="forgotone-wrapper">
        <div className="forgotone-cont">
          <OnboardingHeader
            title="Reset Password"
            text="We’ll send a code to your email address to reset your password."
          />
          <div className="step-one-single">
            <div>
              <input
                type="text"
                required="required"
                onChange={(e) => {
                  if (e.target.value.length > 0) {
                    setActive(true);
                  } else {
                    setActive(false);
                  }
                }}
              />
              <span>Phone or email</span>
            </div>
            <Info />
          </div>
        </div>
        <PriButton text="Next" active={active} action={forward} />
      </div>
      <p>
        Still having trouble logging in?{" "}
        <span onClick={action}>contact support</span>
      </p>
    </div>
  );
};

export default ForgotOne;
