import React from "react";
import "./transactionDetails.css";
import { formatter } from "../../utils/formatter/formatter";

const TransactionDetails = ({ report }) => {
  return (
    <div className="report-transaction-body">
      {report?.map((item, index) => {
        return (
          <div className="report-transaction-single" key={index}>
            <h3>{item.title}</h3>
            <p>{item.title === "Fee" ? formatter.format(item.value) : item.value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionDetails;
