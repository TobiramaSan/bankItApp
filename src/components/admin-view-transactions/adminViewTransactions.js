import React from "react";
import "./adminViewTransactions.css";
import SupportStyled from "../../styles/support-style/supportStyle";
import Close from "../../svg-component/close";
import { AdminViewTransactionData } from "../../utils/data";
import Paginator from "../paginator/paginator";

const AdminViewTransactions = ({ right, closeAction, action }) => {
  return (
    <SupportStyled right={right}>
      <div className="admin-view-transactions-cont">
        <div className="closeSvg">
          <Close color="#474747" action={closeAction} />
        </div>
        <h1>Customer Transactions</h1>
        <div className="admin-view-transaction-body">
          <h3 onClick={action}>Click to Expand</h3>
          <div className="basic-transaction-cont">
            <h4>Transactions Overview</h4>
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
            <Paginator />
          </div>
        </div>
      </div>
    </SupportStyled>
  );
};

export default AdminViewTransactions;
