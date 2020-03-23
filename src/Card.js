import React from "react";

const Card = ({ stat, title, color }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h1>{title}</h1>
          <span className={`text-${color}`}>
            <p>{stat.value}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
