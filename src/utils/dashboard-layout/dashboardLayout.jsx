import React, { useState } from "react";
import "./dashboardLayout.css";
import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/navbar";
import Support from "../../components/support/support";
import Chat from "../../components/chat/chat";

const DashboardLayout = ({ children }) => {
  const [right, setRight] = useState("-700px");
  const [right2, setRight2] = useState("-800px");
  return (
    <div className="dashboardlayout-container">
      <Sidebar
        action={() => {
          setRight("0px");
        }}
      />
      <div className="dashboardlayout-wrapper">
        <Navbar />
        <div className="dashboardlayout-body">{children}</div>
      </div>
      {
        <Support
          right={right}
          messageAction={() => {
            setRight2("0px");
          }}
          closeAction={() => {
            setRight("-700px");
          }}
        />
      }
      {
        <Chat
          right={right2}
          closeAction={() => {
            setRight2("-800px");
          }}
        />
      }
    </div>
  );
};

export default DashboardLayout;
