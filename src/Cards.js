import React from "react";
import Card from "./Card";

const Cards = ({stats}) => {
  let {confirmed, recovered, deaths} = stats;
  return (
    <div className="row">
      <Card stat={confirmed} title={"Cofirmed"} color={"primary"}/>
      <Card stat={deaths} title={"Deaths"} color={"danger"}/>
      <Card stat={recovered} title={"Recovered"} color={"success"}/>
    </div>
  );
};

export default Cards;
