import React, { useEffect, useState } from "react";
import "./closeAlert.css";

const CloseAlert = ({ style }) => {
  const [showCloseAlert, setShowCloseAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCloseAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    showCloseAlert && (
      <div
        className="close-alert-success"
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
export default CloseAlert;
