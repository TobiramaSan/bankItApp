import React, { useEffect, useState } from "react";
import StepOne from "./stepone/stepOne";
import StepTwo from "./steptwo/stepTwo";
import StepThree from "./stepthree/stepThree";
import StepFour from "./stepFour/stepFour";
import Onboardinglayout from "../../utils/onboarding-layout/onboardingLayout";
import StepFive from "./stepFive/stepFive";

const SignupMulti = () => {
  const [count, setCount] = useState(0);
  const [type, setType] = useState("");
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const steps = () => {
    switch (count) {
      case 0:
        return <StepOne submit={add} />;

      case 1:
        return (
          <StepTwo
            back={minus}
            forward={add}
            title="Verify your number"
            text="We’ve sent a verification code to your registered number"
            number="+2348******180"
            text2=". Not the right number?"
            text3="Change number"
          />
        );

      case 2:
        return <StepThree back={minus} forward={add} />;

      case 3:
        return <StepFour back={minus} forward={add} />;
      case 4:
        return <StepFive />;
      default:
        return <StepOne submit={add} />;
    }
  };
  useEffect(() => {
    if (count === 4) {
      setType("final");
    } else {
      setType("");
    }
  }, [count]);
  return <Onboardinglayout type={type}>{steps()}</Onboardinglayout>;
};

export default SignupMulti;
