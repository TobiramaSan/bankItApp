import React from "react";
import "./adminSidebar.css";
import Logo from "../../svg-component/logo";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./adminSidebar.css";
import AdminSidebarData from "../admin-sidebar-data/adminSidebarData";

const AdminSidebar = ({ action, action2 }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const colour1 =
    location.pathname === "/admin/dashboard" ? "#062983" : "#666666";
  const colour2 =
    location.pathname === "/admin/customer-management" ? "#062983" : "#666666";
  const colour3 =
    location.pathname === "/admin/transaction-feed" ? "#062983" : "#666666";
  const colour4 =
    location.pathname === "/admin/reporting-anaalytics" ? "#062983" : "#666666";
  const colour5 =
    location.pathname === "/admin/configuration" ? "#062983" : "#666666";
  const colour6 =
    location.pathname === "/admin/loan-management" ? "#062983" : "#666666";
  const colour7 =
    location.pathname === "/admin/user-management" ? "#062983" : "#666666";
  const colour8 =
    location.pathname === "/admin/feedback-supoort" ? "#062983" : "#666666";
  return (
    <div className="admin-sidebar-container">
      <div className="admin-sidebar-cont">
        <Logo />
        <div className="admin-sidebar-links">
          {AdminSidebarData(
            colour1,
            colour2,
            colour3,
            colour4,
            colour5,
            colour6,
            colour7,
            colour8
          )?.links?.map((item, index) => {
            return (
              <NavLink to={item.link} key={index}>
                <div
                  className={
                    item.link === location.pathname
                      ? "admin-sidebar-single active"
                      : "admin-sidebar-single"
                  }
                >
                  {item.img}
                  <p>{item.text}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="admin-sidebar-wrapper">
        {AdminSidebarData(
          colour1,
          colour2,
          colour3,
          colour4,
          colour5,
          colour6,
          colour7,
          colour8
        )?.subLinks?.map((item, index) => {
          return (
            <div
              className={
                item.text === "Logout"
                  ? "admin-sidebar-single logout"
                  : "admin-sidebar-single"
              }
              key={index}
              onClick={item.text === "Help Center" ? action : action2}
            >
              {item.img}
              {<div onClick={() => navigate(item?.link)}>{item.text}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminSidebar;
