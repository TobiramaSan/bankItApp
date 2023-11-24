import React, { useState } from "react";
import "./userLoanApplication.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
// import noProfilePicture from "../../svg-component/noProfilePicture";
import noProfilePicture from "../../assets/noProfilePicture.png";
import PriButton from "../primary-button/priButton";
import { useNavigate } from "react-router-dom";

const UserLoanApplication = ({ closeAction, right }) => {
  const active = useState(true);
  const navigate = useNavigate();

  return (
    <SupportStyled right={right}>
      <div className="user-loan-appllication-container">
        <div className="closeSvg">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="user-loan-appllication-body">
          <h1>User Loan Application</h1>
          <div className="inner-cont">
            <div className="profile-desciption">
              <div className="profile-picture">
                <img src={noProfilePicture} alt="img" />
              </div>
              <p>No Loan Application found for this user</p>
            </div>
            <PriButton
              text="Go back"
              active={active}
              action={() => {
                navigate("/admin/customer-management");
              }}
            />
          </div>
        </div>
      </div>
    </SupportStyled>
  );
};

export default UserLoanApplication;
