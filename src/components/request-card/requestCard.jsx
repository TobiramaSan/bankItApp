import React, { useState } from "react";
import "./requestCard.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import PriButton from "../primary-button/priButton";

const RequestCard = ({ right, closeAction, nextAction }) => {
  const [active, setActive] = useState(false);
  return (
    <SupportStyled right={right}>
      <div className="request-card-container">
        <div className="request-card-close">
          <Close action={closeAction} color="#474747" />
        </div>
        <div className="request-card-wrapper">
          <h2>Request Card</h2>
          <div className="request-card-cont">
            <div className="request-card-form">
              <div className="request-card-header">
                <h2>Choose card provider</h2>
                <p>What card type do you want?</p>
              </div>
              <div className="request-card-label">
                <label>Visa</label>
                <input
                  type="radio"
                  name="card-type"
                  onChange={() => {
                    setActive(true);
                  }}
                />
              </div>
              <div className="request-card-label">
                <label>Master card</label>
                <input
                  type="radio"
                  name="card-type"
                  onChange={() => {
                    setActive(true);
                  }}
                />
              </div>
              <div className="request-card-label">
                <label>Verve</label>
                <input
                  type="radio"
                  name="card-type"
                  onChange={() => {
                    setActive(true);
                  }}
                />
              </div>
            </div>
            <PriButton text="Next" active={active} action={nextAction} />
          </div>
        </div>
      </div>
    </SupportStyled>
  );
};

export default RequestCard;
