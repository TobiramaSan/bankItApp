import React from "react";
import "./adminDashboard.css";
import AdminDashboardLayout from "../../../utils/admin-dashboard-layout/adminDashboardLayout";
import AdminTransactionSingle from "../../../components/admin-transaction/adminTransactionSingle";
import Analytics from "../../../assets/Analytics.png";

const AdminDashboard = () => {
  return (
    <>
      <AdminDashboardLayout>
        <div className="admin-dashboard-container">
          <div className="admin-dashboard-overview">
            <h1>Dashboard Overview</h1>
            <div className="admin-flex">
              <div className="info-container">
                <AdminTransactionSingle
                  title="Net Balance"
                  amount="N999,187,519"
                />
                <AdminTransactionSingle
                  title="Total Liabilities"
                  amount="N999,187,519"
                />
              </div>
              <div className="info-container">
                <AdminTransactionSingle
                  title="Total Number of Accounts"
                  amount="N999,187,519"
                />
                <AdminTransactionSingle
                  title="Net Balance"
                  amount="N999,187,519"
                />
              </div>
            </div>
          </div>
          <div className="admin-dashboard-chart">
            <img src={Analytics} alt="" />
          </div>
        </div>
      </AdminDashboardLayout>
    </>
  );
};

export default AdminDashboard;
