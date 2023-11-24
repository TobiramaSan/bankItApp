import React from "react";
import "./adminNavbar.css";
import Search from "../../svg-component/search";

const AdminNavbar = ({ placeholder, showSearch }) => {
  return (
    <div className="admin-naavbar-container">
      <div className="navbar-text">
        <h2>Hello Uthman, Welcome back!</h2>
        <p>Tuesday September 26th, 2023.</p>
      </div>

      {showSearch && (
        <div className="search-container">
          <Search />
          <input type="text" placeholder={placeholder} />
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
