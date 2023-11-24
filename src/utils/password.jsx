import React, { useState, useEffect, useCallback } from "react";
import validator from "validator";
import Checked from "../svg-component/checked";
import Unchecked from "../svg-component/unchecked";

const PasswordHint = ({ password, setActiveTrue, setActiveFalse }) => {
  const [symbol, setSymbol] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [digits, setDigits] = useState(false);

  const handlePwd = useCallback(() => {
    if (
      validator.isStrongPassword(password, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 1,
      })
    ) {
      setSymbol(true);
    } else {
      setSymbol(false);
    }
    if (
      validator.isStrongPassword(password, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 1,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setUppercase(true);
    } else {
      setUppercase(false);
    }

    if (
      validator.isStrongPassword(password, {
        minLength: 0,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      setDigits(true);
    } else {
      setDigits(false);
    }
    if (
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 0,
        minUppercase: 0,
        minNumbers: 0,
        minSymbols: 0,
      })
    ) {
      setNumbers(true);
    } else {
      setNumbers(false);
    }

    if (
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setActiveTrue();
    } else {
      setActiveFalse();
    }
  }, [password, setActiveTrue, setActiveFalse]);

  useEffect(() => {
    if (password.length > 0) {
      handlePwd();
    }
  }, [password, handlePwd]);
  return (
    <div className="step-one-hint">
      <h2>Password should have:</h2>
      <div className="step-hint-container">
        <div className="step-hint-double">
          <div className="step-hint-single">
            {uppercase ? <Checked /> : <Unchecked />}
            <p>At least one uppercase</p>
          </div>
          <div className="step-hint-single">
            {numbers ? <Checked /> : <Unchecked />}
            <p>At least six characters</p>
          </div>
        </div>
        <div className="step-hint-double">
          <div className="step-hint-single">
            {symbol ? <Checked /> : <Unchecked />}
            <p>At least one symbol</p>
          </div>
          <div className="step-hint-single">
            {digits ? <Checked /> : <Unchecked />}
            <p>At least one digit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordHint;
