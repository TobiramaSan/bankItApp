import React from "react";
import "./adminMap.css";
import AdminMapData from "../admin-map-data/adminMapData";

const AdminMap = () => {
  const color1 = "#245EF5";
  const color2 = "#FFC633";
  const color3 = "#DBDBDB";

  const data = AdminMapData(color1, color2, color3);

  return (
    <div className="admin-map-container">
      {data?.colorData.map((item, id) => {
        return (
          <div className="admin-map-single" key={id}>
            {item?.dot}
            <div className="div">
              <span>{item?.mode}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdminMap;
