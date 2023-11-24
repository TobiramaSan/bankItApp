import React from "react";
import "./dashboard.css";
import DashboardLayout from "../../utils/dashboard-layout/dashboardLayout";
import PowerUp from "../../components/power-up/powerUp";
import AccountSummary from "../../components/account-summary/accountSummary";
import SendMoney from "../../components/send-money/sendMoney";
import Beneficiaries from "../../components/beneficiaries/beneficiaries";
import Services from "../../components/services/services";
import User from "../../svg-component/user";
import Contact from "../../svg-component/contact";
import DashboardAnalytics from "../../components/dashboard-analytics/dashboard-analytics";
import TransactionHistory from "../../components/transaction-history/transactionHistory";

const Dashboard = () => {
  const array = [];
  return (
    <DashboardLayout>
      <div className="dashboard-container">
        <div className="dashboard-first">
          <PowerUp />
          <AccountSummary />
          <SendMoney />
          <DashboardAnalytics />
        </div>
        <div className="dashboard-second">
          <Services />
          <Beneficiaries title="Recent beneficiaries" img={<User />} array={array} />
          <Beneficiaries title="Saved contacts" img={<Contact />} array={array} />
          <TransactionHistory />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
