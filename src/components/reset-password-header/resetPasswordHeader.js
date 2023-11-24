import React from "react";
import "./resetPasswordHeader.css";
const ResetPasswordHeader = ({ title, description }) => {
  return (
    <div className="reset-password-header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ResetPasswordHeader;
