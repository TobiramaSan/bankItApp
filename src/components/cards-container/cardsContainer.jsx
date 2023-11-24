import React from "react";
import "./cardsContainer.css";
import Cards from "../../assets/cardss.png";
import PriButton from "../primary-button/priButton";

const CardsContainer = ({ action }) => {
  return (
    <div className="cards-container-wrapper">
      <div className="cards-container-cont">
        <img src={Cards} alt="cards" />
        <div className="cards-container-text">
          <h2>Say hello to the only card you need</h2>
          <p>Spend money on the move with your cards. Request for a card and spend money online or offline.</p>
        </div>
      </div>
      <PriButton text="Get a card" active={true} action={action} />
    </div>
  );
};

export default CardsContainer;
