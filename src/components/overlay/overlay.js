import React from "react";
import "./overlay.css";

const Overlay = ({ overlay, children }) => {
  return <div className={overlay ? "main-overlay" : "noshow"}>{children}</div>;
};

export default Overlay;
