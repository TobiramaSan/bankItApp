import React, { useState } from "react";
import "./adminGeographic.css";
import SelectDataOption from "../select-date-option/selectDateOption";
import MapSvg from "../../svg-component/MapSvg";
import AdminMap from "../admin-map/adminMap";
import AdminMapHover from "../admin-map-hover/adminMapHover";

const AdminGeographic = () => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => {
    setIsHover(!isHover);
  };

  return (
    <>
      <div className="admin-geographic-container">
        <div className="admin-geographic-header">
          <h3>Geographical Summary</h3>
          <div className="date">
            <SelectDataOption />
          </div>
        </div>
        <div className="admin-map">
          {isHover && <AdminMapHover date="Kaduna" text="140.2k Customers" />}
          <div className="mapsvg" onClick={handleHover}>
            <MapSvg />
          </div>
        </div>
        <div className="admin-map-details">
          <AdminMap />
        </div>
      </div>
    </>
  );
};

export default AdminGeographic;
