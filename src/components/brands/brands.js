import React from "react";
import "./brands.css";
import Roar from "../../assets/roar.png";
import Two from "../../assets/second-logo.png";
import Lotto from "../../assets/green-lotto.png";
import Greystone from "../../assets/greystone.png";
import Filmhouse from "../../assets/filmhouse.png";
import Shago from "../../assets/shago.png";
import Layout from "../../utils/layout/layout";

const Brands = () => {
  return (
    <Layout>
      <div className="brand-container">
        <p>Loved by Trusted Brands</p>
        <div className="brand-wrapper">
          <img src={Roar} alt="roar" />
          <img src={Two} alt="two" />
          <img src={Lotto} alt="lotto" />
          <img src={Greystone} alt="grey-stone" />
          <img src={Filmhouse} alt="filmhouse" />
          <img src={Shago} alt="shogo" />
        </div>
      </div>
    </Layout>
  );
};

export default Brands;
