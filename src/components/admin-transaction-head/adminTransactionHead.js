import React from "react";
import "./adminTransactionHead.css";
import AdminTransactionHeadDetails from "../admin-transaction-head-details/adminTransactionHeadDetails";

const AdminTransactionHead = () => {
  return (
    <div className="admin-transaction-feed-container">
      <h1>Transaction Feed</h1>
      <div className="total-pending-failed">
        <AdminTransactionHeadDetails
          text="Total Transactions"
          amount="190.25m"
        />
        <AdminTransactionHeadDetails text="Pending Transactions" amount="280" />
        <AdminTransactionHeadDetails text="Failed Transactions" amount="690" />
      </div>
    </div>
  );
};

export default AdminTransactionHead;
