import React from "react";
import "./designSingle.css";
import DesignLayout from "../../styles/design-style/designLayout";
import DoubleArrow from "../../svg-component/double-arrow/doubleArrow";

const DesignSingle = ({ bgColor, title, text, type, img, color }) => {
  return (
    <DesignLayout bgColor={bgColor} type={type}>
      <img src={img} alt="arrow" />
      <div className="design-single">
        <h2>{title}</h2>
        <p>{text}</p>
        <div>
          <h3>Learn more</h3>
          <DoubleArrow color={color} />
        </div>
      </div>
    </DesignLayout>
  );
};

export default DesignSingle;
