import React, { useState } from "react";
import "./adminCustomerManagement.css";
import AdminDashboardLayout from "../../../utils/admin-dashboard-layout/adminDashboardLayout";
import AdminCustomer from "../../../components/admin-customer/adminCustomer";
import AdminTotalCustomers from "../../../components/admin-total-customers/adminTotalCustomers";
import AdminGeographic from "../../../components/admin-geographic/adminGeographic";
import AdminTable from "../../../components/admin-table/adminTable";
import AdminViewAccount from "../../../components/admin-view-account/adminViewAccount";
import AdminEditCustomer from "../../../components/admin-edit-customer/adminEditCustomer";
import UserLoanApplication from "../../../components/user-loan-application/userLoanApplication";
import AdminCloseAccount from "../../../components/admin-close-account/adminCloseAccount";
import AdminFreezeAccount from "../../../components/admin-freeze-account/adminFreezeAccount";
import AdminViewTransactions from "../../../components/admin-view-transactions/adminViewTransactions";
import AdminViewTransactionExpanded from "../../../components/admin-view-transaction-expanded/adminViewTransactionExpanded";

const AdminCustomerManagement = () => {
  const showSearch = true;
  const [right, setRight] = useState("-700px");
  const [right2, setRight2] = useState("-900px");
  const [right3, setRight3] = useState("-900px");
  const [right4, setRight4] = useState("-900px");
  const [right5, setRight5] = useState("-900px");
  const [right6, setRight6] = useState("-900px");
  const [right7, setRight7] = useState("-1500px");

  // const action = () => {
  //   setRight("0px");
  // };

  // const closeAction = () => {
  //   setRight("-700px");
  // };
  return (
    <>
      <AdminDashboardLayout showSearch={showSearch}>
        <div className="admin-customer-container">
          <h1>Customer Management</h1>
          <div className="admin-customer-body">
            <div className="admin-customer-content">
              <AdminCustomer
                title="New Customers"
                amount="1.25k"
                rate="15%"
                monthlyRate="+20.2k This month"
              />
              <AdminCustomer
                title="Active Customers"
                amount="690k"
                rate="15%"
                monthlyRate="+20.2k This month"
              />
            </div>
          </div>
          <div className="admin-total-geo-customer">
            <AdminTotalCustomers
              title="Total Customers"
              amount="870.5k"
              rate="15%"
              monthlyRate="+20.2k This month"
            />
            <AdminGeographic />
          </div>

          <div className="admin-table">
            <AdminTable
              action={() => {
                setRight("0px");
              }}
              action2={() => {
                setRight2("0px");
              }}
              action5={() => {
                setRight5("0px");
              }}
              action4={() => {
                setRight4("0px");
              }}
            />
          </div>
        </div>
        {
          <AdminViewAccount
            right={right}
            action={() => {
              setRight2("0px");
            }}
            action2={() => {
              setRight3("0px");
            }}
            action6={() => {
              setRight6("0px");
            }}
            closeAction={() => {
              setRight("-700px");
            }}
          />
        }
        <AdminEditCustomer
          right={right2}
          closeAction={() => {
            setRight2("-900px");
          }}
        />
        {
          <UserLoanApplication
            right={right3}
            closeAction={() => {
              setRight3("-900px");
            }}
          />
        }
        {
          <AdminCloseAccount
            right={right4}
            closeAction={() => {
              setRight4("-900px");
            }}
          />
        }
        {
          <AdminFreezeAccount
            right={right5}
            closeAction={() => {
              setRight5("-900px");
            }}
          />
        }
        {
          <AdminViewTransactions
            right={right6}
            action={() => {
              setRight7("0px");
            }}
            closeAction={() => {
              setRight6("-900px");
            }}
          />
        }
        <AdminViewTransactionExpanded
          right={right7}
          closeAction={() => {
            setRight7("-1500px");
          }}
        />
      </AdminDashboardLayout>
    </>
  );
};

export default AdminCustomerManagement;
