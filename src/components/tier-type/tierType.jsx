import React from "react";
import "./tierType.css";
import { tierType, tierTypeData } from "../../utils/data";

const TierType = ({ action, type }) => {
  return (
    <div className="tier-type">
      {type ? (
        <div className="tier-type-number">
          {tierTypeData.map((item, id) => {
            return (
              <div className="tier-list" key={id}>
                <p onClick={action}>{item}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="tier-type-cont">
          {tierType.map((item, id) => {
            return (
              <div className="tier-list" key={id}>
                <p onClick={action}>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TierType;
