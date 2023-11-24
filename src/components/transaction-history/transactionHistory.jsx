import React from "react";
import "./transactionHistory.css";
import { transactionHistories } from "../../utils/data";
import Reload from "../../svg-component/reload";
import Inflow from "../../svg-component/inflow";
import Outflow from "../../svg-component/outflow";

const TransactionHistory = () => {
  return (
    <div className="transaction-history">
      <div className="transaction-history-header">
        <div className="transaction-history-title">
          <h2>Transaction history</h2>
          <p>View all &gt;</p>
        </div>
        <p>24 Jul, 2023</p>
      </div>
      <div className="transaction-history-body">
        {transactionHistories?.map((item, index) => {
          return (
            <div className="transaction-single" key={index}>
              <div className="transaction-single-user">
                <div className={item.status === "inflow" ? "transaction-single-inflow" : "transaction-single-outflow"}>{item.status === "inflow" ? <Inflow /> : <Outflow />}</div>
                <div className="transaction-single-name">
                  <h2>{item.name}</h2>
                  <p>{item.time}</p>
                </div>
              </div>
              <div className="transaction-single-amount">
                <p>{item.amount}</p>
                <Reload />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransactionHistory;
