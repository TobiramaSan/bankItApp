import React, { useState } from "react";
import "./adminEditCustomer.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import Input from "../input/input";
import OutsideClick from "../outside-click/outsideClick";
import Gender from "../gender/gender";
import CaretDown from "../../svg-component/caret-down";
import CaretUp from "../../svg-component/caret-up";
import TierType from "../tier-type/tierType";
import StatusType from "../status-type/statusType";
import AdminAccountData from "../../utils/adminAccountData";
import PriButton from "../primary-button/priButton";

const AdminEditCustomer = ({ right, closeAction }) => {
  const [genderState, setGenderState] = useState(false);
  const [gender, setGender] = useState(false);
  const [tierState, setTierState] = useState(false);
  const [tier, setTier] = useState(false);
  const [statusState, setStatusState] = useState(false);
  const [status, setStatus] = useState(false);
  const [id, setId] = useState(false);
  const [idState, setIdState] = useState(false);
  const [active, setActive] = useState(false);
  return (
    <SupportStyled right={right}>
      <div className="admin-edit-customer-cont">
        <div className="closeSvg">
          <Close color="#474747" action={closeAction} />
        </div>
        <h1>Edit Customer Information</h1>
        <div class="admin-customer-edit-body">
          <div className="profile-pic">
            {AdminAccountData()?.users.map((item) => {
              return <img src={item?.img} alt="img" />;
            })}
          </div>
          <div className="info-container">
            <div className="basic-info">
              <h2>Basic Information</h2>
              <Input type="text" placeholder="First Name" text={false} />
              <Input type="text" placeholder="Last Name" text={false} />
              <Input type="text" placeholder="Date of Birth" text={false} />
              <div className="send-money-bank">
                <OutsideClick
                  onClickOutside={() => {
                    setGenderState(false);
                  }}
                >
                  <div
                    className="send-money-container"
                    onClick={() => {
                      setGenderState(!genderState);
                    }}
                  >
                    <div>
                      <p>Select Gender</p>
                      {genderState || gender !== "" ? <h2>{gender}</h2> : null}
                    </div>
                    {genderState ? <CaretUp /> : <CaretDown />}
                  </div>
                  {genderState ? (
                    <Gender
                      action={(e) => {
                        setGender(e.target.outerText);
                        setGenderState(false);
                      }}
                    />
                  ) : null}
                </OutsideClick>
              </div>
              <Input type="text" placeholder="Email" text={false} />
            </div>

            <div className="basic-info">
              <h2>Account Information</h2>

              <div className="send-money-bank">
                <OutsideClick
                  onClickOutside={() => {
                    setTierState(false);
                  }}
                >
                  <div
                    className="send-money-container"
                    onClick={() => {
                      setTierState(!tierState);
                    }}
                  >
                    <div>
                      <p>Tier Level</p>
                      {tierState || tier !== "" ? <h2>{tier}</h2> : null}
                    </div>
                    {tierState ? <CaretUp /> : <CaretDown />}
                  </div>
                  {tierState ? (
                    <TierType
                      action={(e) => {
                        setTier(e.target.outerText);
                        setTierState(false);
                      }}
                      // type="type"
                    />
                  ) : null}
                </OutsideClick>
                {/* <Input type="text" placeholder="Email" text={false} /> */}
              </div>
              <div className="send-money-bank">
                <OutsideClick
                  onClickOutside={() => {
                    setStatusState(false);
                  }}
                >
                  <div
                    className="send-money-container"
                    onClick={() => {
                      setStatusState(!statusState);
                    }}
                  >
                    <div>
                      <p>Account Status</p>
                      {statusState || status !== "" ? <h2>{status}</h2> : null}
                    </div>
                    {statusState ? <CaretUp /> : <CaretDown />}
                  </div>
                  {statusState ? (
                    <StatusType
                      action={(e) => {
                        setStatus(e.target.outerText);
                        setStatusState(false);
                      }}
                    />
                  ) : null}
                </OutsideClick>
              </div>
              {AdminAccountData()?.users.map((item) => {
                return (
                  //   <div className="admin-view-account-body">
                  <div className="inner-basic-info">
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
                  //   </div>
                );
              })}
            </div>

            <div className="basic-info">
              <h2>Identity Verification</h2>

              <div className="send-money-bank">
                <OutsideClick
                  onClickOutside={() => {
                    setIdState(false);
                  }}
                >
                  <div
                    className="send-money-container"
                    onClick={() => {
                      setIdState(!idState);
                    }}
                  >
                    <div>
                      <p>Set ID Type</p>
                      {idState || id !== "" ? <h2>{id}</h2> : null}
                    </div>
                    {idState ? <CaretUp /> : <CaretDown />}
                  </div>
                  {idState ? (
                    <TierType
                      action={(e) => {
                        setId(e.target.outerText);
                        setIdState(false);
                      }}
                      type="type"
                    />
                  ) : null}
                </OutsideClick>
                {/* <Input type="text" placeholder="Email" text={false} /> */}
              </div>
              <Input type="text" placeholder="ID Number" text={false} />
              <Input type="text" placeholder="Issue Date" text={false} />
              <Input type="text" placeholder="ID Expiration" text={false} />
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
        </div>
      </div>
    </SupportStyled>
  );
};

export default AdminEditCustomer;
