import React, { useState } from "react";
import "./adminViewTransactionExpanded.css";
import ExpandStyled from "../../styles/expand-style/expandStyle";
import { AdminViewTransactionData } from "../../utils/data";
// import Paginator from "../paginator/paginator";
import Close from "../../svg-component/close";
import bigPicture from "../../assets/bigprofile.png";
import Status from "../../svg-component/status";
import OutsideClick from "../outside-click/outsideClick";
import { statuses } from "../../utils/data";
import Category from "../../svg-component/category";
import { categories } from "../../utils/data";
import Export from "../../svg-component/export";

const AdminViewTransactionExpanded = ({ right, closeAction }) => {
  const [status, setStatus] = useState(false);
  const [category, setCategory] = useState(false);
  return (
    <ExpandStyled right={right}>
      <div className="admin-view-transactions-cont">
        <div className="closeSvg">
          <Close color="#474747" action={closeAction} />
        </div>
        <h1>Customer Transactions</h1>

        <div className="admin-view-transaction-body">
          <div className="picture-edit">
            <img src={bigPicture} alt="img" />
            <h3 onClick={closeAction}>Click to Condense</h3>
          </div>

          <div className="basic-transaction-cont">
            <h4>Transactions Overview</h4>
            <div className="transactionstable-head">
              <div className="transaction-period">
                <p>Period:</p>
                <div className="specify-period">
                  <h2>Specify Period</h2>
                </div>
              </div>
              <div className="transaction-actions">
                <div className="transaction-single">
                  <div
                    onClick={() => {
                      setStatus(true);
                    }}
                    className="transactions-single"
                  >
                    <p>All Status</p>
                    <Status />
                  </div>
                  {status ? (
                    <OutsideClick
                      onClickOutside={() => {
                        setStatus(!status);
                      }}
                    >
                      <div className="all-status-container">
                        {statuses?.map((item, index) => {
                          return (
                            <p
                              key={index}
                              onClick={() => {
                                setStatus(false);
                              }}
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </OutsideClick>
                  ) : null}
                </div>

                <div className="transaction-single">
                  <div
                    className="transactions-single"
                    onClick={() => {
                      setCategory(true);
                    }}
                  >
                    <p>Category</p>
                    <Category />
                  </div>
                  {category ? (
                    <OutsideClick
                      onClickOutside={() => {
                        setCategory(false);
                      }}
                    >
                      <div className="all-status-container">
                        {categories?.map((item, index) => {
                          return (
                            <p
                              key={index}
                              onClick={() => {
                                setCategory(false);
                              }}
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </OutsideClick>
                  ) : null}
                </div>
                <div className="transaction-single">
                  <div className="transactions-single">
                    <p>Export</p>
                    <Export />
                  </div>
                </div>
              </div>
            </div>
            <div className="transaction-table">
              <table border="1">
                <thead>
                  <tr className="head">
                    <th>
                      <p>S/N</p>
                    </th>
                    <th>
                      <p>Description</p>
                    </th>
                    <th>
                      <p>Amount(N)</p>
                    </th>
                    <th>
                      <p>Balance(N)</p>
                    </th>
                    <th>
                      <p>Transaction ID</p>
                    </th>
                    <th>
                      <p>Date/Time</p>
                    </th>
                    <th>
                      <p>Status</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AdminViewTransactionData?.map((item) => (
                    <tr className="body" key={item?.id}>
                      <td>
                        <p>{item?.id}</p>
                      </td>
                      <td>
                        <p>{item?.description}</p>
                      </td>
                      <td>
                        <p>{item?.amount}</p>
                      </td>
                      <td>
                        <p>{item?.balance}</p>
                      </td>
                      <td>
                        <p>{item?.transactionId}</p>
                      </td>
                      <td>
                        <p>{item?.dateTime}</p>
                      </td>
                      <td>
                        <p
                          className={
                            item.status === "Successful"
                              ? "success"
                              : item.status === "Processing"
                              ? "processing"
                              : item.status === "Refunded"
                              ? "refunded"
                              : "failed"
                          }
                        >
                          {item?.status}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <Paginator /> */}
          </div>
        </div>
      </div>
    </ExpandStyled>
  );
};

export default AdminViewTransactionExpanded;
