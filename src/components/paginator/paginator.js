import React from "react";
import "./paginator.css";
import DoubleArrowLeft from "../../svg-component/doubleArrowLeft";
import DoubleArrowRight from "../../svg-component/doubleArrowRight";
import SingleArrowRight from "../../svg-component/singleArrowRight";

const Paginator = () => {
  return (
    <div className="paginator-cont">
      <div className="paginator-number">
        <DoubleArrowLeft />
        <div className="number">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>...</h3>
          </div>
          <div>
            <h3>13</h3>
          </div>

          <div>
            <h3>14</h3>
          </div>
        </div>
        <DoubleArrowRight />
      </div>
      <div className="divider"></div>
      <div className="goto-page">
        <h2>Go to page</h2>
        <div className="grey-box">
          <input type="text" className="page-input" />
        </div>
        <div className="go">
          <span>Go</span>
          <SingleArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Paginator;
