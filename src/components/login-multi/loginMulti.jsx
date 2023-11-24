import React, { useState } from "react";
import "./loginMulti.css";
import Onboardinglayout from "../../utils/onboarding-layout/onboardingLayout";
import StepTwo from "../signup-multistep/steptwo/stepTwo";
import LoginForm from "./login-form/loginForm";
import { useNavigate } from "react-router-dom";

const LoginMulti = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const steps = () => {
    switch (count) {
      case 0:
        return <LoginForm forward={add} />;
      case 1:
        return (
          <StepTwo
            back={minus}
            title="Verify your number"
            text="We’ve sent a verification code to your registered number"
            number="+2348******180"
            text2=". Not the right number?"
            text3="Change number"
            forward={() => {
              navigate("/dashboard");
            }}
          />
        );
      default:
        return <LoginForm forward={add} />;
    }
  };
  return <Onboardinglayout>{steps()}</Onboardinglayout>;
};

export default LoginMulti;
