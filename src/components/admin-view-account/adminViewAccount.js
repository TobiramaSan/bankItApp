import React, { useState } from "react";
import "./adminViewAccount.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import AdminAccountData from "../../utils/adminAccountData";
import PriButton from "../primary-button/priButton";

const AdminViewAccount = ({ right, closeAction, action, action2, action6 }) => {
  const [active, setActive] = useState(false);
  return (
    <SupportStyled right={right}>
      <div className="admin-view-account-cont">
        <div className="closeSvg">
          <Close color="#474747" action={closeAction} />
        </div>

        <h1>Account Details</h1>
        {AdminAccountData()?.users?.map((item) => {
          return (
            <div className="admin-view-account-body">
              <div className="picture-edit">
                <img src={item?.img} alt="img" />
                <h3 onClick={action}>Edit Customer Information</h3>
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
                <div className="basic-info">
                  <h4>Identity Verification</h4>
                  <div className="row">
                    <p>ID Type </p>
                    <h1>{item?.idType}</h1>
                  </div>
                  <div className="row">
                    <p>ID Number</p>
                    <h1>{item?.idNumber}</h1>
                  </div>
                  <div className="row">
                    <p>Issue Date</p>
                    <h1>{item?.issueDate}</h1>
                  </div>
                  <div className="row">
                    <p>ID Expiration</p>
                    <h1>{item?.idExpiration}</h1>
                  </div>
                </div>
                <div className="basic-info">
                  <h4>Account Activity and History</h4>
                  <div className="row">
                    <p>Transaction History </p>
                    <h1 className="view-transactions" onClick={action6}>
                      View Transactions
                    </h1>
                  </div>
                  <div className="row">
                    <p>Account Statements</p>
                    <h1 className="view-statements">View Statements</h1>
                  </div>
                  <div className="row">
                    <p>Loan Applications</p>
                    <h1 className="view-applications" onClick={action2}>
                      View Loan Applications
                    </h1>
                  </div>
                </div>
                <div className="support-feedback">
                  <div className="support-group">
                    <label>Notes and Comments (Optional)</label>
                    <textarea
                      placeholder="Type description..."
                      onChange={() => {
                        setActive(true);
                      }}
                    ></textarea>
                  </div>
                  <div className="buttons">
                    <PriButton text="Cancel" active={active} white="white" />

                    <PriButton text="Save Changes" active={active} />
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

export default AdminViewAccount;
