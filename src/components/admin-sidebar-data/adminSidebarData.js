import React from "react";
import CustomerManagementSVG from "../../svg-component/customerManagement";
import DashboardSvg from "../../svg-component/dashboardSvg";
import TransactionSvg from "../../svg-component/transactionSvg";
import AnalyticsSvg from "../../svg-component/analyticsSvg";
import SettingsSvg from "../../svg-component/settingsSvg";
import LoanManagementSvg from "../../svg-component/loanManagement";
import UserManagementSvg from "../../svg-component/userManagement";
import HelpCenter from "../../svg-component/helpCenter";
import Username from "../username/username";
import Logout from "../../svg-component/logout";
// import profile from "../../assets/profilepicture.png";

const AdminSidebarData = (
  colour1,
  colour2,
  colour3,
  colour4,
  colour5,
  colour6,
  colour7,
  colour8
) => {
  return {
    links: [
      {
        img: <DashboardSvg color={colour1} />,
        text: "Dashboard",
        link: "/admin/dashboard",
      },
      {
        img: <CustomerManagementSVG color={colour2} />,
        text: "Customer Management",
        link: "/admin/customer-management",
      },

      {
        img: <TransactionSvg color={colour3} />,
        text: "Transaction Feed",
        link: "/admin/transaction-feed",
      },

      {
        img: <AnalyticsSvg color={colour4} />,
        text: "Reporting & Analytics",
        link: "/admin/reporting-anaalytics",
      },

      {
        img: <SettingsSvg color={colour5} />,
        text: "Configuration",
        link: "/admin/configuration",
      },

      {
        img: <LoanManagementSvg color={colour6} />,
        text: "Loan Management",
        link: "/admin/loan-management",
      },

      {
        img: <UserManagementSvg color={colour7} />,
        text: "User Management",
        link: "/admin/user-management",
      },

      {
        img: <HelpCenter color={colour8} />,
        text: "Feedback & Support",
        link: "/admin/feedback-supoort",
      },
    ],
    subLinks: [
      {
        img: "",
        text: (
          <Username
            username="Uthman Fodio"
            useremail="Uthmanfodio@bankit.com"
          />
        ),
      },
      {
        img: <Logout />,
        text: "Logout",
        link: "/admin/login",
      },
    ],
    // subLinks: [
    //   {
    //     img: <HelpCenter />,
    //     text: "Help Center",
    //   },
    //   {
    //     img: <Logout />,
    //     text: "Logout",
    //   },
    // ],
  };
};

export default AdminSidebarData;
