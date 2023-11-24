import React from "react";
import "./chat.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";

const Chat = ({ right, closeAction }) => {
  return (
    <SupportStyled right={right}>
      <div className="chat-container">
        <div className="chat-header">
          <div className="chat-close">
            <Close action={closeAction} color="#F2F2F2" />
          </div>
          <div className="chat-text">
            <h2>Your problem is our priority</h2>
            <p>Ask us anything, or share your feedback.</p>
          </div>
        </div>
        <div className="chat-box">
          <input type="text" placeholder="Send a message..." />
        </div>
      </div>
    </SupportStyled>
  );
};

export default Chat;
