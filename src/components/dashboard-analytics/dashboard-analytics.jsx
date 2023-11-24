import React from "react";
import "./dashboard-analytics.css";
import Cube from "../../svg-component/cube";
import { formatter } from "../../utils/formatter/formatter";
import Chart from "../../assets/chart.png";

const DashboardAnalytics = () => {
  return (
    <div className="dashboard-analytics">
      <h2>Account analytics</h2>
      <div className="dashboard-wrapper">
        <div className="dashboard-overview">
          <div>
            <Cube />
          </div>
          <h2>Overview</h2>
        </div>
        <select>
          <option value="">Week</option>
        </select>
      </div>
      <div className="dashboard-line"></div>
      <div className="dashboard-flow">
        <div className="dashboard-inflow">
          <label>Total Inflow</label>
          <p>{formatter.format(200000)}</p>
        </div>
        <div className="dashboard-outflow">
          <label>Total outflow</label>
          <p>{formatter.format(200000)}</p>
        </div>
      </div>
      <img src={Chart} alt="chart" />
    </div>
  );
};

export default DashboardAnalytics;
