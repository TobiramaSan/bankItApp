import React, { useState } from "react";
import "./adminCustomerFilter.css";
import CaretUp from "../../svg-component/caret-up";
import CaretDown from "../../svg-component/caret-down";
import Search from "../../svg-component/search";
import OutsideClick from "../outside-click/outsideClick";
import TierType from "../tier-type/tierType";
import StatusType from "../status-type/statusType";
import LocationType from "../location-type/locationType";
import PriButton from "../primary-button/priButton";

const AdminCustomerFilter = () => {
  const [active, setActive] = useState(false);
  const [outputTierValue, setOutputTierValue] = useState("");
  const [outputStatusValue, setOutputStatusValue] = useState("");
  const [outputLocationValue, setOutputLocationValue] = useState("");
  const [showTierType, setShowTierType] = useState(false);
  const [showStatusType, setShowStatusType] = useState(false);
  const [showLocationType, setShowLocationType] = useState(false);
  const [statusActive, setStatusActive] = useState(false);
  const [tierActive, setTierActive] = useState(false);
  const [locationActive, setLocationActive] = useState(false);

  const toggleTierType = () => {
    setShowTierType(!showTierType);
  };

  const toggleStatusType = () => {
    setShowStatusType(!showStatusType);
  };

  const toggleLocationType = () => {
    setShowLocationType(!showLocationType);
  };

  const handleActive = () => {
    if (outputTierValue !== "") {
      setTierActive(true);
      } else {
        setTierActive(false);
      }
      if (outputStatusValue !== ""){
        setStatusActive(true)
      } else{
        setStatusActive(false)
      }
      if (outputLocationValue !== ""){
        setLocationActive(true)
      }
      else{
        setLocationActive(false)
      }
      // if (outputLocationValue !== "" && outputStatusValue !== "" && outputTierValue !== ""){
        if(setTierActive && setStatusActive && setLocationActive) {
        setActive(true)
        }else{
          setActive(false)
        }
    // if (statusActive && tierActive && locationActive) {
    //   setActive(false);
    // } else {
    //   setActive(true);
    // }
  };

  return (
    <OutsideClick
      onClickOutside={() => {
        setShowTierType(false);
        setShowStatusType(false);
        setShowLocationType(false);
      }}
    >
      <div className="admin-customer-filter-container">
        <div className="admin-send-money-container" onClick={toggleTierType}>
          <div>
            <p>Tier Type</p>
            {showTierType || outputTierValue !== "" ? <h2>{outputTierValue}</h2> : null}
          </div>
          {showTierType ? <CaretUp /> : <CaretDown />}
        </div>
        {showTierType && (
          <TierType
            action={(e) => {
              setOutputTierValue(e.target.outerText);
              setShowTierType(false);
              setTierActive(true);
            }}
          />
        )}

        <div className="admin-send-money-container" onClick={toggleStatusType}>
          <div>
            <p>Status Type</p>
            {showStatusType || outputStatusValue !== "" ? <h2>{outputStatusValue}</h2> : null}
          </div>
          {showStatusType ? <CaretUp /> : <CaretDown />}
        </div>
        {showStatusType && (
          <StatusType
            action={(e) => {
              setOutputStatusValue(e.target.outerText);
              setShowStatusType(false);
              setStatusActive(true);
            }}
          />
        )}

        <div className="admin-send-money-container" onClick={toggleLocationType}>
          <div>
            <div className="search">
              <Search />
              <p>Search Location</p>
            </div>

            {showLocationType || outputLocationValue !== "" ? <h2>{outputLocationValue}</h2> : null}
          </div>
          {showLocationType ? <CaretUp /> : <CaretDown />}
        </div>
        {showLocationType && (
          <LocationType
            action={(e) => {
              setOutputLocationValue(e.target.outerText);
              setShowLocationType(false);
              setLocationActive(true);
            }}
          />
        )}
        <div className="buttons">
          <PriButton text="Reset All" />
          <PriButton text="Apply" active={handleActive} />
        </div>
      </div>
    </OutsideClick>
  );
};

export default AdminCustomerFilter;
