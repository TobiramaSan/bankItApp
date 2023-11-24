import React from "react";
import "./landing.css";
import Welcome from "../../components/welcome/welcome";
import Design from "../../components/design/design";
import DailyNeeds from "../../components/daily-needs/dailyNeeds";
import Tailor from "../../components/tailor/tailor";
import Card from "../../components/card/card";
import Frequently from "../../components/frequently/frequently";
import Revolute from "../../components/revolute/revolute";
import Footer from "../../components/footer/footer";

const Landing = () => {
  return (
    <>
      <Welcome />
      <Design />
      <DailyNeeds />
      <Tailor />
      <Card />
      <Frequently />
      <Revolute />
      <Footer />
    </>
  );
};

export default Landing;
