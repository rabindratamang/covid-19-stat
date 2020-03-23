import React from "react";
import Card from "./Card";

const Cards = ({stats}) => {
  let {confirmed, recovered, deaths} = stats;
  let activeCases = {
    value: (confirmed.value - (recovered.value + deaths.value))
  }

  return (
    <div className="row">
      <Card stat={confirmed} title={"Cofirmed"} color={"primary"}/>
      <Card stat={activeCases} title={"Active Cases"} color={"warning"}/>
      <Card stat={deaths} title={"Deaths"} color={"danger"}/>
      <Card stat={recovered} title={"Recovered"} color={"success"}/>
    </div>
  );
};

export default Cards;
