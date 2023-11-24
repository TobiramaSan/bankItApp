import React, { useState } from "react";
import "./adminStepTwo.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import PriButton from "../../primary-button/priButton";
import OpenEye from "../../../svg-component/openEye";
import ClosedEye from "../../../svg-component/closedEye";

const AdminStepTwo = ({ backward, forward, text, title }) => {
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

    if (value.length >= maxLength) {
      if (parseInt(fieldIndex, 10) <= 5) {
        const nextSibling = document.querySelector(
          `input[name=ssn-${parseInt(fieldIndex, 10) + 1}]`
        );
        setValue((prevValue) => [...prevValue, value]);

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
    <div className="admin-steptwo-container">
      <div className="admin-steptwo-back">
        <ArrowLeft action={backward} />
      </div>
      <div className="admin-steptwo-cont">
        <div className="admin-steptwo-header">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="admin-steptwo-otp">
          <div className="admin-otp-container">
            <div className="admin-otp-form">
              <input
                type={state ? "number" : "password"}
                name="ssn-1"
                maxLength={1}
                onChange={handleChange}
              />
              <input
                type={state ? "number" : "password"}
                name="ssn-2"
                maxLength={1}
                onChange={handleChange}
              />
              <input
                type={state ? "number" : "password"}
                name="ssn-3"
                maxLength={1}
                onChange={handleChange}
              />
              <input
                type={state ? "number" : "password"}
                name="ssn-4"
                maxLength={1}
                onChange={handleChange}
              />
              <input
                type={state ? "number" : "password"}
                name="ssn-5"
                maxLength={1}
                onChange={handleChange}
              />
            </div>
            {state ? (
              <OpenEye action={action} color="#474747" />
            ) : (
              <ClosedEye color="#474747" action={action} />
            )}
          </div>
          <div className="admin-otp-duration">
            <p>00:00</p>
            <h3>
              This code will expire in 3 minutes. Did not receive code?
              <span>Resend code</span>
            </h3>
          </div>
        </div>
        <PriButton text="Next" active={active} action={forward} />
      </div>
    </div>
  );
};

export default AdminStepTwo;
