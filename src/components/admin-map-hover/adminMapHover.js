import React from "react";
import "./adminMapHover.css";
import Polygon from "../../svg-component/polygon";

const AdminMapHover = ({ date, text }) => {
  return (
    <div className="admin-hover-main-container">
      <div className="admin-map-hover-container">
        <span>{date}</span>
        <h2>{text}</h2>
      </div>
      <div className="map-svg">
        <Polygon />
      </div>
    </div>
  );
};

export default AdminMapHover;
