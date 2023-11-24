import React, { useState } from "react";
import "./adminCustomerExport.css";
import OutsideClick from "../outside-click/outsideClick";
import CaretUp from "../../svg-component/caret-up";
import CaretDown from "../../svg-component/caret-down";
import PriButton from "../primary-button/priButton";
import StartDate from "../start-date/startDate";
import EndDate from "../end-date/endDate";
import FileFormat from "../file-format/fileFormaat";

const AdminCustomerExport = () => {
  const [active, setActive] = useState(false);
  const [outputStartValue, setOutputStartValue] = useState("");
  const [outputEndValue, setOutputEndValue] = useState("");
  const [outputExportValue, setOutputExportValue] = useState("");
  const [showStartDate, setShowStartDate] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);
  const [showExportType, setShowExportType] = useState(false);
  const [endActive, setEndActive] = useState(false);
  const [startActive, setStartActive] = useState(false);
  const [locationActive, setExportActive] = useState(false);

  const toggleStartDate = () => {
    setShowStartDate(!showStartDate);
  };

  const toggleEndDate = () => {
    setShowEndDate(!showEndDate);
  };

  const toggleExportType = () => {
    setShowExportType(!showExportType);
  };

  const handleActive = () => {
    if (outputStartValue !== "") {
      setStartActive(true);
    } else {
      setStartActive(false);
    }
    if (outputEndValue !== "") {
      setEndActive(true);
    } else {
      setEndActive(false);
    }
    if (outputExportValue !== "") {
      setExportActive(true);
    } else {
      setExportActive(false);
    }
    // if (outputLocationValue !== "" && outputStatusValue !== "" && outputTierValue !== ""){
    if (setStartActive && setEndActive && setExportActive) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <OutsideClick
      onClickOutside={() => {
        setShowStartDate(false);
        setShowEndDate(false);
        setShowExportType(false);
      }}
    >
      <div className="admin-export-filter-container">
        <div
          className="admin-export-send-money-container"
          onClick={toggleStartDate}
        >
          <div>
            <p>Start Date</p>
            {showStartDate || outputStartValue !== "" ? (
              <h2>{outputStartValue}</h2>
            ) : null}
          </div>
          {showStartDate ? <CaretUp /> : <CaretDown />}
        </div>
        {showStartDate && (
          <StartDate
            action={(e) => {
              setOutputStartValue(e.target.outerText);
              setShowStartDate(false);
              setStartActive(true);
            }}
          />
        )}

        <div
          className="admin-export-send-money-container"
          onClick={toggleEndDate}
        >
          <div>
            <p>End Date</p>
            {showEndDate || outputEndValue !== "" ? (
              <h2>{outputEndValue}</h2>
            ) : null}
          </div>
          {showEndDate ? <CaretUp /> : <CaretDown />}
        </div>
        {showEndDate && (
          <EndDate
            action={(e) => {
              setOutputEndValue(e.target.outerText);
              setShowEndDate(false);
              setEndActive(true);
            }}
          />
        )}

        <div
          className="admin-export-send-money-container third-cont"
          onClick={toggleExportType}
        >
          <div>
            <p>File Format</p>
            {showExportType || outputExportValue !== "" ? (
              <h2>{outputExportValue}</h2>
            ) : null}
          </div>
          {showExportType ? <CaretUp /> : <CaretDown />}
        </div>
        {showExportType && (
          <FileFormat
            action={(e) => {
              setOutputExportValue(e.target.outerText);
              setShowExportType(false);
              setExportActive(true);
            }}
          />
        )}

        <div className="buttons">
          <PriButton text="Apply" active={handleActive} />
        </div>
      </div>
    </OutsideClick>
  );
};

export default AdminCustomerExport;
