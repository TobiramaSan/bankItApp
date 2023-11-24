import React from "react";
import "./adminTransactionFeed.css";
import AdminDashboardLayout from "../../../utils/admin-dashboard-layout/adminDashboardLayout";
import AdminTransactionHead from "../../../components/admin-transaction-head/adminTransactionHead";

const AdminTransactionFeed = () => {
  return (
    <>
      <AdminDashboardLayout>
        <AdminTransactionHead />
      </AdminDashboardLayout>
    </>
  );
};

export default AdminTransactionFeed;
