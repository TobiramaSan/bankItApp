import React from "react";
import './endDate.css';
import { endDateData } from "../../utils/data";

const EndDate = ({action}) => {
    return ( 
        <div className="end-date-cont">
            {endDateData?.map((item, id)=>{
                return (
                    <div className="date-list">
            <p onClick={action} key={id}>{item}</p>
          </div>
                )
            })}
        </div>
     );
}
 
export default EndDate;