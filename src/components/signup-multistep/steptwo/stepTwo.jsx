import React, { useState } from "react";
import "./stepTwo.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import PriButton from "../../primary-button/priButton";
import OpenEye from "../../../svg-component/openEye";
import ClosedEye from "../../../svg-component/closedEye";

const StepTwo = ({ back, forward, text, title, number, text2, text3 }) => {
  const [active, setActive] = useState(false);
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
          setActive(true);
        }
      }
    }
    console.log(fieldName);
  };
  return (
    <div className="steptwo-container">
      <div className="steptwo-back">
        <ArrowLeft action={back} />
      </div>
      <div className="steptwo-cont">
        <div className="steptwo-header">
          <h2>{title}</h2>
          <p>
            {text} <span>{number}</span> {text2}
          </p>
          {title === "Enter OTP" ? null : <h3>{text3}</h3>}
        </div>
        <div className="steptwo-otp">
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
          <div className="otp-duration">
            <p>00:00</p>
            <h3>
              This code will expire in 3 minutes. Did not receive code? <span>Resend code</span>
            </h3>
          </div>
        </div>
        <PriButton text="Next" active={active} action={forward} />
      </div>
    </div>
  );
};

export default StepTwo;
