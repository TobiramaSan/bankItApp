import React, { useState } from "react";
import "./forgot.css";
import ForgotOne from "./forgot-one/forgotOne";
import Logo from "../../svg-component/logo";
import Help from "../../svg-component/help";
import StepTwo from "../signup-multistep/steptwo/stepTwo";
import ForgotThree from "./forgot-three/forgotThree";
import ForgotFour from "./forgot-four/forgotFour";
import Support from "../support/support";
import Chat from "../chat/chat";

const Forgot = () => {
  const [count, setCount] = useState(0);
  const [right, setRight] = useState("-700px");
  const [right2, setRight2] = useState("-800px");
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const steps = () => {
    switch (count) {
      case 0:
        return (
          <ForgotOne
            forward={add}
            action={() => {
              setRight("0px");
            }}
          />
        );
      case 1:
        return <StepTwo title="Enter OTP " text="We’ve sent a verification code to your email address" back={minus} forward={add} />;
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
  return (
    <div className="forgot-container">
      <div className="forgot-first">
        <Logo />
        <h2>Let’s get you back in</h2>
      </div>
      <div className="forgot-second">
        <div className="forgot-wrapper">{steps()}</div>
        <div
          className="forgot-help"
          onClick={() => {
            setRight("0px");
          }}>
          <Help />
        </div>
      </div>
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
  );
};

export default Forgot;
