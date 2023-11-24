import React from "react";
import "./fundSuccess.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import Success from "../success/success";
import PriButton from "../primary-button/priButton";

const FundSuccess = ({ right, action, closeAction }) => {
  return (
    <SupportStyled right={right}>
      <div className="fund-success">
        <div className="fund-close">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="fund-success-wrapper">
          <div className="fund-success-text">
            <Success />
            <div>
              <h2>Your account has been funded successfully</h2>
              <p>
                You have deposited <span>N70,000</span> into your Bankit account
              </p>
            </div>
          </div>
          <PriButton active={true} text="Great, Thanks" action={action} />
        </div>
      </div>
    </SupportStyled>
  );
};

export default FundSuccess;
