import React from "react";
import "./success.css";
import SuccessCheck from "../../svg-component/successCheck";

const Success = ({ type }) => {
  return (
    <div className="success-container">
      <div className={type === "small" ? "first-ellipses" : "first-ellipse"}>
        <div className={type === "small" ? "second-ellipses" : "second-ellipse"}>
          <div className={type === "small" ? "third-ellipses" : "third-ellipse"}>
            <SuccessCheck />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
