import React from "react";
import './startDate.css';
import { startDateData } from "../../utils/data";

const StartDate = ({action}) => {
    return ( 
        <div className="start-date-cont">
            {startDateData?.map((item, id)=>{
                return (
                    <div className="date-list">
            <p onClick={action} key={id}>{item}</p>
          </div>
                )
            })}
        </div>
     );
}
 
export default StartDate;