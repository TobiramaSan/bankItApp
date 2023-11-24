import React from "react";
import "./adminTransactionHeadDetails.css";
import BigTransaction from "../../svg-component/bigTransaction";
import SmallTransaction from "../../svg-component/smallTransaction";

const AdminTransactionHeadDetails = ({ text, amount }) => {
  return (
    <div className="admin-transaction-details-cont">
      {/* <div className="admin-transaction-details-body"> */}
      <div className="main">
        <div className="transaction-type">
          <SmallTransaction />
          <p>{text}</p>
        </div>
        <div className="transaction-amount">
          <h1>{amount}</h1>
        </div>
      </div>
      <div className="svg-class">
        <BigTransaction />
      </div>

      {/* </div> */}
    </div>
  );
};

export default AdminTransactionHeadDetails;
