import React from "react";
import "./locationType.css";
import { locationType } from "../../utils/data";

const LocationType = ({ action }) => {
  return (
    <div className="location-type-cont">
      {locationType.map((item, id) => {
        return (
          <div className="location-list" key={id}>
            <p onClick={action}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LocationType;
