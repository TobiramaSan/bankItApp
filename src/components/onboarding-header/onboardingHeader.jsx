import React from "react";
import "./onboardingHeader.css";

const OnboardingHeader = ({ text, title }) => {
  return (
    <div className="onboarding-header">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default OnboardingHeader;
