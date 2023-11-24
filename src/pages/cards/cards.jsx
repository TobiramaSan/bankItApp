import React, { useState } from "react";
import "./cards.css";
import DashboardLayout from "../../utils/dashboard-layout/dashboardLayout";
import CardsContainer from "../../components/cards-container/cardsContainer";
import RequestCard from "../../components/request-card/requestCard";

const Cards = () => {
  const [right, setRight] = useState("-700px");
  return (
    <DashboardLayout>
      <div className="cards-wrappers">
        <h2>Cards</h2>
        <CardsContainer
          action={() => {
            setRight("0px");
          }}
        />
      </div>
      <RequestCard right={right} />
    </DashboardLayout>
  );
};

export default Cards;
