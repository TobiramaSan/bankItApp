import React from "react";
import "./secButton.css";

const SecButton = ({ text, action }) => {
  return (
    <button onClick={action} className="sec-button">
      {text}
    </button>
  );
};

export default SecButton;
