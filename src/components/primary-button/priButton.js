import React from "react";
import "./priButton.css";

const PriButton = ({ text, action, type, active, white }) => {
  return (
    <React.Fragment>
      {active ? (
        <button
          onClick={action}
          className={white === "white" ? "pri-button-white" : "pri-button"}
          type={type}
        >
          {text}
        </button>
      ) : (
        <button disabled className="pri-disabled">
          {text}
        </button>
      )}
    </React.Fragment>
  );
};

export default PriButton;
