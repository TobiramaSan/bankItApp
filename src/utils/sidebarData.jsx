import React from "react";
import AnalyticsSvg from "../svg-component/analyticsSvg";
import CardsSvg from "../svg-component/cardsSvg";
import DashboardSvg from "../svg-component/dashboardSvg";
import HelpCenter from "../svg-component/helpCenter";
import Logout from "../svg-component/logout";
import SettingsSvg from "../svg-component/settingsSvg";
import TransactionSvg from "../svg-component/transactionSvg";

const SideBarData = (color1, color2, color3, color4, color5) => {
  return {
    links: [
      {
        img: <DashboardSvg color={color1} />,
        text: "Dashboard",
        link: "/dashboard",
      },
      {
        img: <TransactionSvg color={color2} />,
        text: "Transaction",
        link: "/transactions",
      },
      {
        img: <AnalyticsSvg color={color3} />,
        text: "Analytics",
        link: "/analytics",
      },
      {
        img: <CardsSvg color={color4} />,
        text: "Cards",
        link: "/cards",
      },
      {
        img: <SettingsSvg color={color5} />,
        text: "Settings",
        link: "/settings",
      },
    ],
    subLinks: [
      {
        img: <HelpCenter />,
        text: "Help Center",
      },
      {
        img: <Logout />,
        text: "Logout",
      },
    ],
  };
};

export default SideBarData;
