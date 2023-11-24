import React, { useState } from "react";
import "./accountSummary.css";
import OpenEye from "../../svg-component/openEye";
import ClosedEye from "../../svg-component/closedEye";
// import { formatter } from "../../utils/formatter/formatter";
import Copy from "../../svg-component/copy";
import Plus from "../../svg-component/plus/plus";
import FundWallet from "../fund-wallet/fundWallet";
import FundSuccess from "../fund-success/fundSuccess";

const AccountSummary = () => {
  const [state, setState] = useState(false);
  const [right2, setRight2] = useState("-700px");
  const [right3, setRight3] = useState("-700px");
  const action = () => {
    setState(!state);
  };
  //   const [amount, setAmount] = useState(0);
  return (
    <div className="account-summary-container">
      <div className="summary-container">
        <div className="summary-wrapper">
          <div className="total-balance">
            <h2>Total Balance</h2>
            {state ? <OpenEye action={action} color="white" /> : <ClosedEye action={action} color="white" />}
          </div>
          <div className="balance">
            <h1> N </h1>
            <h2>{state ? "7,000,000.00" : "****"}</h2>
          </div>
        </div>
        <div className="account-number">
          <p>09287282929</p>
          <Copy />
        </div>
      </div>
      <div className="action-container">
        <Plus color="#E6E6E6" />
        <h2
          onClick={() => {
            setRight2("0px");
          }}>
          Fund wallet
        </h2>
      </div>
      <FundWallet
        right={right2}
        closeAction={() => {
          setRight2("-700px");
        }}
        fundAction={() => {
          setRight3("0px");
        }}
      />
      <FundSuccess
        right={right3}
        closeAction={() => {
          setRight3("-700px");
        }}
        action={() => {
          setRight3("-700px");
          setRight2("-700px");
        }}
      />
    </div>
  );
};

export default AccountSummary;
