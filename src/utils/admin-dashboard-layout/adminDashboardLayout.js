import React from "react";
import "./adminDashboardLayout.css";
// import Sidebar from "../../components/sidebar/sidebar";
import AdminSidebar from "../../components/admin-sidebar/adminSidebar";
import AdminNavbar from "../../components/admin-navbar/adminNavbar";
import Alert from "../alerts";
import FrozenAlertSuccess from "../alerts/edit-alert/frozenAlertSuccess";
import ModifiedAlertSuccess from "../alerts/modified-alert/modifiedAlertSuccess";
import CloseAlert from "../alerts/close-alert/closeAlert";

const AdminDashboardLayout = ({ children, showSearch }) => {
  return (
    <div className="admin-dashboard-layout-container">
      <AdminSidebar />

      <div className="admin-dashboard-layout-wrapper">
        <AdminNavbar placeholder="search customers" showSearch={showSearch} />
        <div className="alert-bar">
          {Alert().successFrozen.map((item) => (
            <FrozenAlertSuccess style={item} />
          ))}
          {Alert().successModified.map((item) => (
            <ModifiedAlertSuccess style={item} />
          ))}
          {Alert().closeAlert.map((item) => (
            <CloseAlert style={item} />
          ))}
        </div>
        <div className="admin-dashboard-layout-body">{children}</div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
