import React from "react";
import "./transactionsSingle.css";
import { formatter } from "../../utils/formatter/formatter";
import Hand from "../../assets/hand-wallet.png";

const TransactionsSingle = ({ money, text, date }) => {
  return (
    <div className={text === "Inflow" ? "transactions-single-container" : "transactions-single-containers"}>
      <div className="transactions-single-text">
        <div>
          <p>{text}</p> <h3>{date}</h3>
        </div>
        <h2>{formatter.format(money)}</h2>
      </div>
      <img src={Hand} alt="hand" />
    </div>
  );
};

export default TransactionsSingle;
