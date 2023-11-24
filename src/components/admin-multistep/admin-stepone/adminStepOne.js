import React, { useState } from "react";
import "./adminStepOne.css";
import ArrowLeft from "../../../svg-component/arrowLeft";
import ResetPasswordHeader from "../../reset-password-header/resetPasswordHeader";
import Info from "../../../svg-component/info";
import PriButton from "../../../components/primary-button/priButton";
import { useNavigate } from "react-router-dom";
import isEmail from "email-validator";
const AdminStepOne = ({ forward, action }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const isEmailValid = isEmail.validate(newEmail);
    setActive(isEmailValid);
  };

  return (
    <div className="admin-step-one-container">
      <div className="back-button">
        <ArrowLeft
          action={() => {
            navigate("admin/login");
          }}
        />
      </div>
      <div className="admin-step-one-body">
        <ResetPasswordHeader
          title="Reset Password"
          description="We’ll send a code to your email address to reset your password."
        />
        <form onSubmit={forward}>
          <div className="admin-step-one-form">
            <div div className="admin-step-one-group">
              <div className="admin-step-one-single">
                <div>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <span>Email</span>
                </div>
                <Info />
              </div>
            </div>
          </div>
          <PriButton text="Next" active={active} />
        </form>
      </div>
      <p>
        Still having trouble logging in?{" "}
        <span action={action}>contact support</span>
      </p>
    </div>
  );
};
export default AdminStepOne;
