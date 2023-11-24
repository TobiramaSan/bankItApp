import React from "react";
import "./frequently.css";
import Layout from "../../utils/layout/layout";
import Plus from "../../svg-component/plus/plus";

const Frequently = () => {
  const faqs = ["What is BankIt?", "What is BankIt?", "What is BankIt?", "What is BankIt?", "What is BankIt?", "What is BankIt?", "What is BankIt?"];
  return (
    <div className="frequently-container">
      <Layout>
        <div className="frequently-cont">
          <div className="frequently-text">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
          </div>
          <div className="frequently-wrapper">
            {faqs?.map((item, index) => {
              return (
                <div className="frequently-single" key={index}>
                  <h2>{item}</h2>
                  <Plus color="#666666" />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Frequently;
