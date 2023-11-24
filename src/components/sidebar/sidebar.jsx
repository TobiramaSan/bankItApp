import React from "react";
import "./sidebar.css";
import Logo from "../../svg-component/logo";
import { NavLink, useLocation } from "react-router-dom";
import SideBarData from "../../utils/sidebarData";

const Sidebar = ({ action, action2 }) => {
  const location = useLocation();
  const color1 = location.pathname === "/dashboard" ? "#062983" : "#666666";
  const color2 = location.pathname === "/transactions" ? "#062983" : "#666666";
  const color3 = location.pathname === "/analytics" ? "#062983" : "#666666";
  const color4 = location.pathname === "/cards" ? "#062983" : "#666666";
  const color5 = location.pathname === "/settings" ? "#062983" : "#666666";
  return (
    <div className="sidebar-container">
      <div className="sidebar-cont">
        <Logo />
        <div className="sidebar-links">
          {SideBarData(color1, color2, color3, color4, color5)?.links?.map(
            (item, index) => {
              return (
                <NavLink to={item.link} key={index}>
                  <div
                    className={
                      item.link === location.pathname
                        ? "sidebar-single active"
                        : "sidebar-single"
                    }
                  >
                    {item.img}
                    <p>{item.text}</p>
                  </div>
                </NavLink>
              );
            }
          )}
        </div>
      </div>
      <div className="sidebar-wrapper">
        {SideBarData()?.subLinks?.map((item, index) => {
          return (
            <div
              className={
                item.text === "Logout"
                  ? "sidebar-single logout"
                  : "sidebar-single"
              }
              key={index}
              onClick={item.text === "Help Center" ? action : action2}
            >
              {item.img}
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
