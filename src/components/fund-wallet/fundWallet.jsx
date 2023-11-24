import React, { useState } from "react";
import "./fundWallet.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import PriButton from "../primary-button/priButton";
import Info from "../../svg-component/info";
import ClosedEye from "../../svg-component/closedEye";
import OpenEye from "../../svg-component/openEye";

const FundWallet = ({ right, closeAction, fundAction }) => {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  const action = () => {
    setState(!state);
  };
  return (
    <SupportStyled right={right}>
      <div className="fund-wallet">
        <div className="fund-wallet-close">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="fund-wallet-wrapper">
          <div className="fund-wallet-header">
            <h2>Fund Wallet</h2>
            <p>Enter details to fund your wallet</p>
          </div>
          <div className="fund-wallet-cont">
            <div className="fund-wallet-form">
              <div className="step-one-single">
                <div>
                  <input type="number" required />
                  <span>Deposit amount</span>
                </div>
                <Info />
              </div>
              <div className="step-one-single">
                <div>
                  <input type={state ? "number" : "password"} required />
                  <span>Card number</span>
                </div>
                {state ? <OpenEye action={action} color="#474747" /> : <ClosedEye color="#474747" action={action} />}
              </div>
              <div className="fund-wallet-group">
                <div className="step-one-single">
                  <div>
                    <input
                      type="text"
                      required
                      onChange={(e) => {
                        if (e.target.value.length === 2) {
                          e.target.value += "/";
                        }

                        setCardNumber(e.target.value);
                      }}
                      value={cardNumber}
                      maxLength={5}
                    />
                    <span>Exp date</span>
                  </div>
                  {/* <Info /> */}
                </div>
                <div className="step-one-single">
                  <div>
                    <input
                      type="number"
                      required
                      onChange={() => {
                        setActive(true);
                      }}
                      maxLength={3}
                    />
                    <span>CVV</span>
                  </div>
                  {/* <Info /> */}
                </div>
              </div>
              <div className="fund-wallet-save">
                <input type="checkbox" />
                <p>Save card details</p>
              </div>
            </div>
            <PriButton text="Fund wallet" active={active} action={fundAction} />
          </div>
        </div>
      </div>
    </SupportStyled>
  );
};

export default FundWallet;
