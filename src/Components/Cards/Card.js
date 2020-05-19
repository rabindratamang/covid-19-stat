import React from "react";
import NumberFormat from "react-number-format";

const Card = ({ stat, title, color }) => {
  return (
    <div className="p-0 col-6 col-md-6 col-lg-3">
      <div className="card">
        <div className="card-body">
          <h1>{title}</h1>
          <span className={`text-${color}`}>
            <p>
              <NumberFormat
                value={stat?.value}
                displayType={"text"}
                thousandSeparator={true}
              />  
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
