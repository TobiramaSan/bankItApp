import React from "react";
import "./beneficiaries.css";
import Profile from "../../assets/profile-pic.png";

const Beneficiaries = ({ array, title, img }) => {
  return (
    <div className="beneficiaries-container">
      <h2>{title}</h2>
      {array.length === 0 ? (
        <>
          <div className="beneficiaries-user">{img}</div>
          <div className="beneficiaries-text">
            <h2>You have no {title}</h2>
            <p>Your {title} will appear here</p>
          </div>
        </>
      ) : (
        <div className="beneficiaries-wrapper">
          {array?.map((item, index) => {
            return (
              <div className="beneficiaries-single" key={index}>
                <img src={Profile} alt="profile" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Beneficiaries;
