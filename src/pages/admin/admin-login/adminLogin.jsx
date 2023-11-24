import React, { useState } from "react";
import "./adminLogin.css";
import Onboardinglayout from "../../../utils/onboarding-layout/onboardingLayout";
import Info from "../../../svg-component/info";
import PriButton from "../../../components/primary-button/priButton";
import ClosedEye from "../../../svg-component/closedEye";
import OpenEye from "../../../svg-component/openEye";
// import Checked from "../../../svg-component/checked";
// import Unchecked from "../../../svg-component/unchecked";
// import validator from "validator";
import { useNavigate } from "react-router-dom";
import PasswordHint from "../../../utils/password";

const AdminLogin = ({ submit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [password, SetPassword] = useState("");
  // const [symbol, setSymbol] = useState(false);
  // const [uppercase, setUppercase] = useState(false);
  // const [numbers, setNumbers] = useState(false);
  // const [digits, setDigits] = useState(false);
  const [active, setActive] = useState(false);

  const action = () => {
    setState(!state);
  };

  // const handlePwd = (e) => {
  //   if (
  //     validator.isStrongPassword(e.target.value, {
  //       minLength: 0,
  //       minLowercase: 0,
  //       minUppercase: 0,
  //       minNumbers: 0,
  //       minSymbols: 1,
  //     })
  //   ) {
  //     setSymbol(true);
  //   } else {
  //     setSymbol(false);
  //   }
  //   if (
  //     validator.isStrongPassword(e.target.value, {
  //       minLength: 0,
  //       minLowercase: 0,
  //       minUppercase: 1,
  //       minNumbers: 0,
  //       minSymbols: 0,
  //     })
  //   ) {
  //     setUppercase(true);
  //   } else {
  //     setUppercase(false);
  //   }

  //   if (
  //     validator.isStrongPassword(e.target.value, {
  //       minLength: 0,
  //       minLowercase: 0,
  //       minUppercase: 0,
  //       minNumbers: 1,
  //       minSymbols: 0,
  //     })
  //   ) {
  //     setDigits(true);
  //   } else {
  //     setDigits(false);
  //   }
  //   if (
  //     validator.isStrongPassword(e.target.value, {
  //       minLength: 6,
  //       minLowercase: 0,
  //       minUppercase: 0,
  //       minNumbers: 0,
  //       minSymbols: 0,
  //     })
  //   ) {
  //     setNumbers(true);
  //   } else {
  //     setNumbers(false);
  //   }

  //   if (
  //     validator.isStrongPassword(e.target.value, {
  //       minLength: 6,
  //       minLowercase: 1,
  //       minUppercase: 1,
  //       minNumbers: 1,
  //       minSymbols: 1,
  //     })
  //   ) {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // };
  return (
    <Onboardinglayout type="admin">
      <div className="admin-main">
        <div className="welcome">
          <h2>Welcome!</h2>
          <p>Enter your login credentials to continue</p>
        </div>
        <form onSubmit={submit}>
          <div className="admin-form">
            <div className="admin-group">
              <div className="admin-single">
                <div>
                  <input type="text" required />
                  <span>Email</span>
                </div>
                <Info />
              </div>
              <div className="admin-single">
                <div>
                  <input
                    type={state ? "text" : "password"}
                    required
                    onInput={(e) => {
                      SetPassword(e.target.value);
                    }}
                  />
                  <span>Password</span>
                </div>
                {state ? (
                  <OpenEye action={action} color="#474747" />
                ) : (
                  <ClosedEye color="#474747" action={action} />
                )}
              </div>
            </div>
            <div className="save-password">
              <div>
                <input type="checkbox" />
                <p>Save my login details</p>
              </div>
              <div className="forgot">
                <span
                  onClick={() => {
                    navigate("/admin/reset-password");
                  }}
                >
                  Forgot password?
                </span>
              </div>
            </div>
            {/* <div className="admin-hint">
              <h2>Password should have:</h2>
              <div className="admin-hint-container">
                <div className="admin-hint-double">
                  <div className="admin-hint-single">
                    {uppercase ? <Checked /> : <Unchecked />}
                    <p>At least one uppercase</p>
                  </div>
                  <div className="admin-hint-single">
                    {numbers ? <Checked /> : <Unchecked />}
                    <p>At least six characters</p>
                  </div>
                </div>
                <div className="admin-hint-double">
                  <div className="admin-hint-single">
                    {symbol ? <Checked /> : <Unchecked />}
                    <p>At least one symbol</p>
                  </div>
                  <div className="admin-hint-single">
                    {digits ? <Checked /> : <Unchecked />}
                    <p>At least one digit</p>
                  </div>
                </div>
              </div>
            </div> */}
            <PasswordHint
              password={password}
              setActiveTrue={() => {
                setActive(true);
              }}
              setActiveFalse={() => {
                setActive(false);
              }}
            />
          </div>
          <PriButton
            text="Next"
            active={active}
            action={() => {
              navigate("/admin/dashboard");
            }}
          />
        </form>
      </div>
    </Onboardinglayout>
  );
};

export default AdminLogin;
