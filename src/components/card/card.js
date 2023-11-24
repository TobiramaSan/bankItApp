import React from "react";
import "./card.css";
import PriButton from "../primary-button/priButton";
import Cards from "../../assets/cards.png";
import Layout from "../../utils/layout/layout";

const Card = () => {
  return (
    <Layout>
      <div className="card-container">
        <div className="card-text">
          <div className="card-text1">
            <h2>Cards</h2>
            <p>
              Elevate your finances with our <span>Virtual Cards</span>
            </p>
          </div>
          <div className="card-text2">
            <PriButton text="Get started" active={true} />
          </div>
        </div>
        <div className="card-img">
          <img src={Cards} alt="cards" />
        </div>
      </div>
    </Layout>
  );
};

export default Card;
