import React from "react";
import "./sidePopup.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";

const SidePopup = ({ closeAction, children, right }) => {
  return (
    <SupportStyled right={right}>
      <div className="side-popup">
        <div className="side-close">
          <Close action={closeAction} color="#474747" />
        </div>
        {children}
      </div>
    </SupportStyled>
  );
};

export default SidePopup;
