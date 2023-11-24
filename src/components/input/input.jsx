import React from "react";
import "./input.css";
import ClosedEye from "../../svg-component/closedEye";
import Info from "../../svg-component/info";
import OpenEye from "../../svg-component/openEye";

const Input = ({ type, placeholder, text, action }) => {
  return (
    <div className="step-one-single">
      <div>
        <input type={type} required onChange={action} />
        <span>{placeholder}</span>
      </div>
      {text ? type === "password" ? <ClosedEye color="#474747" /> : <OpenEye color="#474747" /> : <Info />}
    </div>
  );
};

export default Input;
