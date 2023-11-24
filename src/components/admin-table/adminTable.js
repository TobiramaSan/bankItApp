import React, { useState } from "react";
import "./adminTable.css";
import FilterSVG from "../../svg-component/filter";
import Export from "../../svg-component/export";
import AdminnTableData from "../admin-table-data/adminTableData";
import CallToAction from "../call-to-action/callToAction";
import AdminCustomerFilter from "../admin-customer-filter/adminCustomerFilter";
import AdminCustomerExport from "../admin-customer-export/adminCustomerExport";
import Paginator from "../paginator/paginator";

const AdminTable = ({ name, email, action, action2, action5, action4 }) => {
  const [isCallToAction, setIsCallToAction] = useState(false);
  const [active, setActive] = useState(false);
  const [activeExport, setActiveExport] = useState(false);

  const handleActive = () => {
    setActive(!active);
    setActiveExport(false);
  };
  const handleActiveExport = () => {
    setActiveExport(!activeExport);
    setActive(false);
  };

  //   function to make CallToAction render specifically
  const handleCallToAction = (itemId) => {
    setIsCallToAction((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  //   const handleCancelCallToAction = () => {
  //     setIsCallToAction(false);
  //   };

  return (
    <div className="admin-table-container">
      <div className="status-export">
        <div className="status" onClick={handleActive}>
          <h3>All Status</h3>
          <FilterSVG />
          {active && <AdminCustomerFilter />}
        </div>
        <div className="export" onClick={handleActiveExport}>
          <h3>Export</h3>
          <Export />
          {activeExport && <AdminCustomerExport />}
        </div>
      </div>
      <div className="table-cont">
        <table border="1">
          <thead>
            <tr className="head">
              <th>
                <p>S/N</p>
              </th>
              <th>
                <p>Name</p>
              </th>
              <th>
                <p>Account No</p>
              </th>
              <th>
                <p>Account Bal(N)</p>
              </th>
              <th>
                <p>Tier Level</p>
              </th>
              <th>
                <p>Status</p>
              </th>
              <th>
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {AdminnTableData().tableData.map((item) => (
              <tr className="body" key={item?.id}>
                <td>
                  <p>{item?.id}</p>
                </td>
                <td>
                  <div className="image-mail">
                    <img src={item?.picture} alt="pic" />
                    <div className="mail">
                      <p>{item?.name}</p>
                      <h3>{item?.email}</h3>
                    </div>
                  </div>
                </td>
                <td>
                  <p>{item?.accounNo}</p>
                </td>
                <td>
                  <p>{item?.accountBal}</p>
                </td>
                <td>
                  <span
                    className={
                      item.tierLvl === "tier 0"
                        ? "no-tier"
                        : item.tierLvl === "tier 1"
                        ? "tier-1"
                        : item.tierLvl === "tier 2"
                        ? "tier-2"
                        : null
                    }
                  >
                    {item?.tierLvl}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      item.status === "Inactive"
                        ? "inactive-class"
                        : item.status === "Active"
                        ? "active-class"
                        : item.status === "Dormant"
                        ? "dormant-class"
                        : null
                    }
                  >
                    {item?.status}
                  </span>
                </td>
                <td
                  onClick={() => {
                    handleCallToAction(item.id);
                  }}
                >
                  {item?.action}
                  {isCallToAction[item?.id] && (
                    <CallToAction
                      action={action}
                      action2={action2}
                      action5={action5}
                      action4={action4}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginator />
      </div>
    </div>
  );
};

export default AdminTable;
