import React, { useEffect, useState } from "react";
import "./modifiedAlertSuccess.css";

const ModifiedAlertSuccess = ({ style }) => {
  const [showModifiedAlert, setShowModifiedAlert] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModifiedAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    showModifiedAlert && (
      <div
        className="modified-alert-success"
        style={{ background: style.backgroundColor }}
      >
        <span
          style={{
            background: style.spanBackgroundColor,
            color: style.spanColor,
          }}
        >
          {style.title}
        </span>
        <p style={{ color: style.textColor }}>{style.text}</p>
      </div>
    )
  );
};
export default ModifiedAlertSuccess;
