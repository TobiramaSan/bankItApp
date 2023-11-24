import React, { useState } from "react";
import "./adminCustomer.css";
import SmallChart from "../../assets/small chart.png";
import ProfitSvg from "../../svg-component/profitSvg";
import AdminMapHover from "../admin-map-hover/adminMapHover";

const AdminCustomer = ({ title, amount, rate, monthlyRate }) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(!isHover);
  };
  return (
    <>
      <div className="admin-customer-component">
        <div className="customers">
          <h3>{title}</h3>
          <h1>{amount}</h1>
        </div>
        <div className="rate-chart">
          <div className="rate">
            <div className="main-rate">
              <ProfitSvg />
              <span> {rate}</span>
            </div>
            <h3>{monthlyRate}</h3>
          </div>
          <div className="chart">
            {isHover && (
              <AdminMapHover date="Dec 2023" text="140.2k Customers" />
            )}
            <img src={SmallChart} alt="smallchart" onClick={handleHover} />
          </div>
        </div>
      </div>
      {/* <div className="admin-customer-component">
        <div className="customers">
          <h3>{title}</h3>
          <h1>{amount}</h1>
        </div>
        <div className="rate-chart">
          <div className="rate">
            <div className="main-rate">
              <ProfitSvg />
              <span> {rate}</span>
            </div>
            <h3>{monthlyRate}</h3>
          </div>
          <div className="chart">
            <img src={SmallChart} alt="smallchart" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AdminCustomer;
