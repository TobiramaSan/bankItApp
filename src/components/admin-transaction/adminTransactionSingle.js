import React from "react";
import LoanManagementSvg from "../../svg-component/loanManagement";
import BigLoanSvg from "../../svg-component/bigLoanSvg";
import "./adminTransactionSingle.css";

const AdminTransactionSingle = ({ title, amount }) => {
  return (
    <div className="admin-transaction-container">
      <div className="admin-transaction-details">
        <div className="detail1">
          <LoanManagementSvg color="#666666" />
          <h3>{title}</h3>
        </div>
        <div className="detail2">
          <h1>{amount}</h1>
        </div>
      </div>
      <div className="admin-transaction-svg">
        <BigLoanSvg />
      </div>
    </div>
  );
};

export default AdminTransactionSingle;
