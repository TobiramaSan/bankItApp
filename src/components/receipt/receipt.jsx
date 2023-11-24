import React from "react";
import "./receipt.css";
import SidePopup from "../side-popup/sidePopup";
import Success from "../success/success";
import { formatter } from "../../utils/formatter/formatter";
import ProfileSvg from "../../svg-component/profile";
import TransactionDetails from "../transaction-details/transactionDetails";
import { report } from "../../utils/data";
import Share from "../../svg-component/share";

const Receipt = ({ right, closeAction }) => {
  return (
    <SidePopup closeAction={closeAction} right={right}>
      <div className="receipt-container">
        <div className="receipt-header">
          <Success type="small" />
          <div>
            <h2>{formatter.format(189500)}</h2>
            <p>Credit</p>
          </div>
        </div>
        <div className="receipt-sub">
          <div className="receipt-contact">
            <ProfileSvg />
          </div>
          <div className="receipt-owner">
            <p>Recipient</p>
            <h2>Sky money</h2>
          </div>
        </div>
        <TransactionDetails report={report} />
        <div className="receipt-footer">
          <p>Report transaction</p>
          <div>
            <Share />
          </div>
        </div>
      </div>
    </SidePopup>
  );
};

export default Receipt;
