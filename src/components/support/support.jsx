import React, { useState } from "react";
import "./support.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import Hand from "../../assets/hand.png";
import Send from "../../svg-component/send";
import Right from "../../svg-component/right";
import Search from "../../svg-component/search";
import PriButton from "../primary-button/priButton";

const Support = ({ right, closeAction, messageAction }) => {
  const [active, setActive] = useState(false);
  return (
    <SupportStyled right={right}>
      <div className="support-container">
        <div className="support-close">
          <Close action={closeAction} color="#F2F2F2" />
        </div>
        <div className="support-header">
          <h3>
            Hi there,
            <span>
              <img src={Hand} alt="hand" />
            </span>
          </h3>
          <h2>How can we help?</h2>
        </div>
        <div className="support-body">
          <div className="support-message" onClick={messageAction}>
            <div>
              <h2>Send us a message</h2>
              <p>We usually reply under 2 minutes or less</p>
            </div>
            <Send />
          </div>
          <div className="support-cont">
            <div className="support-search">
              <div className="support-search-cont">
                <input type="text" placeholder="Search for help" />
                <Search />
              </div>
              <div className="support-search-single">
                <h2>Account Verification</h2>
                <Right color="#474747" />
              </div>
              <div className="support-search-single">
                <h2>Card Funding</h2>
                <Right color="#474747" />
              </div>
            </div>
            <div className="support-feedback">
              <div className="support-group">
                <label> Got a feedback or request?</label>
                <textarea
                  placeholder="Type description..."
                  onChange={() => {
                    setActive(true);
                  }}></textarea>
              </div>
              <PriButton text="Submit" active={active} />
            </div>
          </div>
        </div>
      </div>
    </SupportStyled>
  );
};

export default Support;
