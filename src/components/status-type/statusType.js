import React from "react";
import "./statusType.css";
import { statusType } from "../../utils/data";

const StatusType = ({ action }) => {
  return (
    <div className="status-type-cont">
      {statusType?.map((item, id) => {
        return (
          <div className="status-list" key={id}>
            <p onClick={action}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatusType;
