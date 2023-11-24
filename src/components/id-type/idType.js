import React from "react";
import "./idType.css";
import { idTypeData } from "../../utils/data";

const IdType = ({ action }) => {
  return (
    <div className="id-type-cont">
      {idTypeData?.map((item, id) => {
        return (
          <div className="id-list" key={id}>
            <p onClick={action}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default IdType;
