import React, { useState } from "react";
import "./selectDateOption.css";

const SelectDataOption = () => {
  const [selectionValue, setSelectionValue] = useState("");
  const selectOptions = [
    { label: "2023", value: 1 },
    { label: "2022", value: 2 },
    { label: "2021", value: 3 },
  ];
  const handleSelect = (e) => {
    setSelectionValue(e.target.value);
  };
  return (
    <div className="select-date-container">
      <select className="selection" onChange={handleSelect}>
        {selectOptions.map((item) => {
          return <option key={item.value}>{item.label}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectDataOption;
