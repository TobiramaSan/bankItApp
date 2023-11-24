import React, { useState } from "react";
import "./adminTotalCustomers.css";
import SmallChart from "../../assets/small chart.png";
import ProfitSvg from "../../svg-component/profitSvg";
import AdminMapHover from "../admin-map-hover/adminMapHover";

const AdminTotalCustomers = ({ title, amount, rate, monthlyRate }) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <>
      <div className="admin-total-customers">
        <div className="total-customers">
          <h3>{title}</h3>
          <h1>{amount}</h1>
        </div>
        <div className="total-rate-chart">
          <div className="total-rate">
            <div className="total-main-rate">
              <ProfitSvg />
              <span> {rate}</span>
            </div>
            <h3>{monthlyRate}</h3>
          </div>
          <div className="total-chart">
            {isHover && (
              <AdminMapHover date="Sep 2023" text="140.2k Customers" />
            )}
            <img src={SmallChart} alt="smallchart" onClick={handleHover} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTotalCustomers;
