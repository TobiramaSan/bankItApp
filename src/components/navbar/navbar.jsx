import React from "react";
import "./navbar.css";
import ProfilePic from "../../assets/profile-pic.png";
import Bell from "../../svg-component/bell";
import Coins from "../../assets/coins.png";
import Search from "../../svg-component/search";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-text">
        <h2>Hello Adam, Welcome back!</h2>
        <p>Wednesday August 23rd, 2023.</p>
      </div>
      <div className="navbar-body">
        <div className="navbar-cont">
          <div className="navbar-search">
            <Search />
            <input type="text" placeholder="Search" />
          </div>
          <div className="navbar-other">
            <div className="navbar-points">
              <h2>200</h2>
              <img src={Coins} alt="coins" />
            </div>
            <div className="navbar-notifications">
              <Bell />
            </div>
          </div>
        </div>
        <div className="navbar-profile">
          <img src={ProfilePic} alt="profilepic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
