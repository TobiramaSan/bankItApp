import React from "react";
import "./callToAction.css";

const CallToAction = ({ action, action2, action5, action4 }) => {
  return (
    <div className="call-action-container">
      <div className="call-action-main">
        <p onClick={action}>View Accounts</p>
        <p onClick={action2}>Edit Accounts</p>
        <p onClick={action5}>Freeze Accounts</p>
        <p onClick={action4}>Close Accounts</p>
      </div>
    </div>
  );
};

export default CallToAction;
