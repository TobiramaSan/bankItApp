import React, { useState } from "react";
import "./saveContact.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import Contacts from "../../svg-component/contacts";
import Input from "../input/input";
import PriButton from "../primary-button/priButton";

const SaveContact = ({ right, closeAction, buttonAction }) => {
  const [active, setActive] = useState(false);
  const [file, setFile] = useState();
  return (
    <SupportStyled right={right}>
      <div className="save-contact-container">
        <div className="save-close">
          <Close color="#474747" action={closeAction} />
        </div>
        <div className="save-contact-wrapper">
          <h2>Save Contact</h2>
          <div className="save-contact-user">
            <div className="save-contact-cont">
              <div>{file ? <img src={file} alt="" /> : <Contacts />}</div>
              <label>
                <input
                  type="file"
                  onChange={(e) => {
                    setFile(URL.createObjectURL(e.target.files[0]));
                    console.log(file);
                  }}
                />
                {file ? "Edit" : "Add Photo"}
              </label>
            </div>
            <Input
              type="text"
              text={false}
              placeholder="Enter name"
              action={(e) => {
                if (e.target.value.length > 0) {
                  setActive(true);
                } else {
                  setActive(false);
                }
              }}
            />
          </div>
          <PriButton text="Save To Contacts" active={active} action={buttonAction} />
        </div>
      </div>
    </SupportStyled>
  );
};

export default SaveContact;
