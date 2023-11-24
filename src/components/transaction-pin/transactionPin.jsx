import React, { useState } from "react";
import "./transactionPin.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import OnboardingHeader from "../onboarding-header/onboardingHeader";
import Otp from "../otp/otp";
import PriButton from "../primary-button/priButton";

const TransactionPin = ({ right, closeAction, action }) => {
  const [active, setActive] = useState(false);
  return (
    <SupportStyled right={right}>
      <div className="transactionpin-container">
        <div className="close-icon">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="transactionpin-wrapper">
          <OnboardingHeader title="Enter PIN" text="Enter your pin to authorise transaction" />
          <Otp
            completed={() => {
              setActive(true);
            }}
          />
          <PriButton text="Proceed" active={active} action={action} />
        </div>
      </div>
    </SupportStyled>
  );
};

export default TransactionPin;
