import React from "react";
import "./forgotFour.css";
import Success from "../../success/success";
import PriButton from "../../primary-button/priButton";
import { useNavigate } from "react-router-dom";

const ForgotFour = () => {
  const navigate = useNavigate();
  return (
    <div className="forgotfour-container">
      <div className="forgotfour-wrapper">
        <Success />
        <div>
          <h2>Password change successful!</h2>
          <p>You have changed the password for your account</p>
        </div>
      </div>
      <PriButton
        text="Login to your account"
        active={true}
        action={() => {
          navigate("/auth/login");
        }}
      />
    </div>
  );
};

export default ForgotFour;
