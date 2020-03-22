import React from "react";

const Card = ({ stat, title, color }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className={`card-title`}>{title}</h4>
          <h2 className={`text-${color}`}>{stat.value}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
