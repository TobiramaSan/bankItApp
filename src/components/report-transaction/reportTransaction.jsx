import React, { useState } from "react";
import "./reportTransaction.css";
import { report } from "../../utils/data";
import SidePopup from "../side-popup/sidePopup";
import PriButton from "../primary-button/priButton";
import TransactionDetails from "../transaction-details/transactionDetails";

const ReportTransaction = ({ right, closeAction, buttonAction }) => {
  const [active, setActive] = useState(false);
  return (
    <SidePopup closeAction={closeAction} right={right}>
      <div className="report-transaction">
        <h2>Report Transaction</h2>
        <TransactionDetails report={report} />
        <div className="report-feedback">
          <label>Got a feedback or request?</label>
          <textarea
            placeholder="Type description about this transaction..."
            onChange={(e) => {
              if (e.target.value.length > 0) {
                setActive(true);
              } else {
                setActive(false);
              }
            }}></textarea>
        </div>
        <PriButton text="Submit" active={active} action={buttonAction} />
      </div>
    </SidePopup>
  );
};

export default ReportTransaction;
