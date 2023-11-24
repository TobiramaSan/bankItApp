import React from "react";
import "./username.css";

const Username = ({ username, useremail }) => {
  return (
    <div className="username-container">
      <p className="usernaame">{username}</p>
      <span className="useremail">{useremail}</span>
    </div>
  );
};

export default Username;
