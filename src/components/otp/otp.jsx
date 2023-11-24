import React, { useState } from "react";
import "./otp.css";
import ClosedEye from "../../svg-component/closedEye";
import OpenEye from "../../svg-component/openEye";

const Otp = ({ completed }) => {
  const [state, setState] = useState(false);
  const [value, setValue] = useState([""]);
  console.log(value);
  const action = () => {
    setState(!state);
  };
  const handleChange = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    // Check if they hit the max character length
    if (value.length >= maxLength) {
      // Check if it's not the last input field
      if (parseInt(fieldIndex, 10) <= 5) {
        // Get the next input field
        const nextSibling = document.querySelector(`input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`);
        setValue((prevValue) => [...prevValue, value]);

        //  //console.log(ssnValues);

        // If found, focus the next field
        if (nextSibling !== null) {
          nextSibling.focus();
        } else {
          completed();
        }
      }
    }
    console.log(fieldName);
  };
  return (
    <div className="otp-container">
      <div className="otp-form">
        <input type={state ? "number" : "password"} name="ssn-1" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-2" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-3" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-4" maxLength={1} onChange={handleChange} />
        <input type={state ? "number" : "password"} name="ssn-5" maxLength={1} onChange={handleChange} />
      </div>
      {state ? <OpenEye action={action} color="#474747" /> : <ClosedEye color="#474747" action={action} />}
    </div>
  );
};

export default Otp;
