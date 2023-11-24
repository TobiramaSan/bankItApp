import React, { useState } from "react";
import "./sendMoney.css";
import Input from "../input/input";
import BankList from "../bank-list/bankList";
import CaretUp from "../../svg-component/caret-up";
import CaretDown from "../../svg-component/caret-down";
import OutsideClick from "../outside-click/outsideClick";
import { amount } from "../../utils/data";
import { formatter } from "../../utils/formatter/formatter";
import PriButton from "../primary-button/priButton";
import SaveContact from "../save-contact/saveContact";
import TransactionSuccess from "../transaction-success/transactionSuccess";
import TransactionPin from "../transaction-pin/transactionPin";

const SendMoney = () => {
  const [bank, setBank] = useState("");
  const [suggestion, setSuggestion] = useState(amount);
  const [amountPrice, setAmountPrice] = useState("");
  const [bankState, setBankState] = useState(false);
  const [active, setActive] = useState(false);
  const [right4, setRight4] = useState("-700px");
  const [right5, setRight5] = useState("-700px");
  const [right6, setRight6] = useState("-700px");
  return (
    <div className="send-money">
      <div className="start-typing">
        <p>Start typing “@” to enter a username.</p>
      </div>
      <Input
        type="text"
        placeholder="Enter account number or Bankit username"
        text={false}
      />
      <div className="send-money-bank">
        <OutsideClick
          onClickOutside={() => {
            setBankState(false);
          }}
        >
          <div
            className="send-money-container"
            onClick={() => {
              setBankState(!bankState);
            }}
          >
            <div>
              <p>Bank</p>
              {bankState || bank !== "" ? <h2>{bank}</h2> : null}
            </div>
            {bankState ? <CaretUp /> : <CaretDown />}
          </div>
          {bankState ? (
            <BankList
              action={(e) => {
                setBank(e.target.outerText);
                setBankState(false);
              }}
            />
          ) : null}
        </OutsideClick>
      </div>
      <div className="send-money-amount">
        <div className="send-money-wrapper">
          <label>Enter Amount</label>
          <div>
            {/* <p>N</p> */}
            <input
              type="number"
              placeholder="0.00"
              value={amountPrice}
              onChange={(e) => {
                setAmountPrice(e.target.value);
                if (e.target.value.length > 0) {
                  setActive(true);
                  setSuggestion((arr) => [...arr, e.target.value]);
                } else {
                  setActive(false);
                }
              }}
            />
          </div>
        </div>
        <div className="send-suggestion">
          {suggestion?.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  setAmountPrice(item);
                  setActive(true);
                }}
              >
                {formatter.format(item)}
              </p>
            );
          })}
        </div>
      </div>
      <PriButton
        text="Send"
        active={active}
        action={() => {
          setRight4("0px");
        }}
      />
      <TransactionPin
        right={right4}
        closeAction={() => {
          setRight4("-700px");
        }}
        action={() => {
          setRight5("0px");
        }}
      />
      <TransactionSuccess
        right={right5}
        action={() => {
          setRight5("-700px");
          setRight4("-700px");
        }}
        closeAction={() => {
          setRight5("-700px");
          setRight4("-700px");
        }}
        save={() => {
          setRight6("0px");
        }}
      />
      <SaveContact
        right={right6}
        buttonAction={() => {
          setRight6("-700px");
          setRight5("-700px");
          setRight4("-700px");
        }}
        closeAction={() => {
          setRight6("-700px");
          setRight5("-700px");
          setRight4("-700px");
        }}
      />
    </div>
  );
};

export default SendMoney;
