import React, { useState, useEffect } from "react";
import "./adminMultiStep.css";
import ForgotOne from "../forgot/forgot-one/forgotOne";
import StepTwo from "../signup-multistep/steptwo/stepTwo";
import ForgotThree from "../forgot/forgot-three/forgotThree";
import ForgotFour from "../forgot/forgot-four/forgotFour";
import Onboardinglayout from "../../utils/onboarding-layout/onboardingLayout";
import Help from "../../svg-component/help";
import Chat from "../chat/chat";
import Support from "../support/support";
const AdminMultiStep = () => {
  const [right, setRight] = useState("-700px");
  const [right2, setRight2] = useState("-700px");

  const [count, setCount] = useState(0);
  const [type, setType] = useState("admin");

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const adminSteps = () => {
    switch (count) {
      case 0:
        return (
          <ForgotOne
            forward={add}
            action={() => {
              setRight("0px");
            }}
            page="admin"
          />
        );

      case 1:
        return (
          <StepTwo
            title="Enter OTP "
            text="We’ve sent a verification code to your email address"
            back={minus}
            forward={add}
          />
        );

      case 2:
        return <ForgotThree forward={add} back={minus} />;
      case 3:
        return <ForgotFour />;

      default:
        return (
          <ForgotOne
            forward={add}
            action={() => {
              setRight("0px");
            }}
          />
        );
    }
  };

  useEffect(() => {
    if (count === 4) {
      setType("admin");
    } else {
      setType("admin");
    }
  }, [count]);
  return (
    <>
      <Onboardinglayout type={type}>{adminSteps()}</Onboardinglayout>
      <div
        className="forgot-help"
        onClick={() => {
          setRight("0px");
        }}
      >
        <Help />
      </div>
      <div>
        {
          <Support
            right={right}
            messageAction={() => {
              setRight2("0px");
            }}
            closeAction={() => {
              setRight("-700px");
            }}
          />
        }
        {
          <Chat
            right={right2}
            closeAction={() => {
              setRight2("-800px");
            }}
          />
        }
      </div>
    </>
  );
};

export default AdminMultiStep;
