import React from "react";
import "./transactions.css";
import DashboardLayout from "../../utils/dashboard-layout/dashboardLayout";
import TransactionsSingle from "../../components/transactions-single/transactionsSingle";
import TransactionsTable from "../../components/transactions-table/transactionsTable";

const Transactions = () => {
  return (
    <DashboardLayout>
      <div className="transactions-container">
        <div className="transactions-cont">
          <h2>Transaction</h2>
          <div>
            <TransactionsSingle money={487500} date="September, 2023" text="Inflow" />
            <TransactionsSingle money={189500} date="September, 2023" text="Outflow" />
          </div>
        </div>
        <TransactionsTable />
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
