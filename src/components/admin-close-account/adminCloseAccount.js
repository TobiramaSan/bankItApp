import React from "react";
import "./adminCloseAccount.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import AdminAccountData from "../../utils/adminAccountData";

const AdminCloseAccount = ({ right, closeAction }) => {
  return (
    <SupportStyled right={right}>
      <div className="admin-close-account-cont">
        <div className="closeSvg">
          <Close color="#474747" action={closeAction} />
        </div>

        <h1>Close Customer Account</h1>
        {AdminAccountData()?.users?.map((item) => {
          return (
            <div className="admin-close-account-body">
              <div className="picture-edit">
                <img src={item?.img} alt="img" />
                {/* <h3>Edit Customer Information</h3> */}
              </div>
              <div className="basic-account">
                <div className="basic-info">
                  <h4>Basic Information</h4>
                  <div className="row">
                    <p>First Name</p>
                    <h1>{item?.firstName}</h1>
                  </div>
                  <div className="row">
                    <p>Last Name</p>
                    <h1>{item?.lastName}</h1>
                  </div>
                  <div className="row">
                    <p>Account Number</p>
                    <h1>{item?.accountNo}</h1>
                  </div>
                  <div className="row">
                    <p>Date of Birth</p>
                    <h1>{item?.dob}</h1>
                  </div>
                  <div className="row">
                    <p>Gender</p>
                    <h1>{item?.gender}</h1>
                  </div>
                  <div className="row">
                    <p>Email</p>
                    <h1>{item?.email}</h1>
                  </div>
                </div>
                <div className="basic-info">
                  <h4>Account Information</h4>
                  <div className="row">
                    <p>Current Tier Level </p>
                    <h1 className="tierlvl">{item?.currentTierLvl}</h1>
                  </div>
                  <div className="row">
                    <p>Account Status</p>
                    <h1 className="status">{item?.accountStatus}</h1>
                  </div>
                  <div className="row">
                    <p>Account Balance</p>
                    <h1>{item?.accountBal}</h1>
                  </div>
                  <div className="row">
                    <p>Account Opened</p>
                    <h1>{item?.accountOpend}</h1>
                  </div>
                  <div className="row">
                    <p>Last Activity</p>
                    <h1>{item?.lastActivity}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SupportStyled>
  );
};

export default AdminCloseAccount;
