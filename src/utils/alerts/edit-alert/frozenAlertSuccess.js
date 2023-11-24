import React, { useState, useEffect } from "react";
import "./frozenAlertSuccess.css";

const FrozenAlertSuccess = ({ style }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   if (!showAlert) {
  //     setTimeout(() => {
  //       setShowAlert(false);
  //     }, 5500);
  //   }
  // }, [showAlert]);

  return (
    showAlert && (
      <div
        className="frozen-alert-success"
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

export default FrozenAlertSuccess;
