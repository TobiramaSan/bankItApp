import React, { useState } from "react";
import "./bankList.css";
import Search from "../../svg-component/search";
import { banks } from "../../utils/data";
import GTB from "../../assets/gtb.png";

const BankList = ({ action }) => {
  const [search, setSearch] = useState("");
  return (
    <div className="banklist-container">
      <div className="banklist-search">
        <Search />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      {banks
        ?.filter((items) => items.toLowerCase().includes(search.toLowerCase()))
        ?.map((item, index) => {
          return (
            <div className="banklist-single" key={index}>
              <div>
                <img src={GTB} alt="gtb" />
              </div>
              <p onClick={action}>{item}</p>
            </div>
          );
        })}
    </div>
  );
};

export default BankList;
