import React from "react";
import "./gender.css";
import { genderData } from "../../utils/data";

const Gender = ({ action }) => {
  return (
    <div className="gender-cont">
      {genderData?.map((item, id) => {
        return (
          <div className="gender-card" key={id}>
            <p onClick={action}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Gender;
