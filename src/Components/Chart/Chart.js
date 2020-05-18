import React from "react";
import {PieChart,Pie, Cell} from "recharts";

const Chart = ({stats}) => {
  let {confirmed, recovered, deaths} = stats;
  let activeCases = {
    value: (confirmed.value - (recovered.value + deaths.value))
  }

  const data = [
    { name: 'Confirmed', value: confirmed.value },
    { name: 'Active Cases', value: activeCases.value },
    { name: 'Deaths', value: deaths.value },
    { name: 'Recovered', value: recovered.value },
  ];
  const COLORS = ['#0088FE', '#ffc107', '#dc6435', '#3cde61',];

  return (
    <div className="text-center">
      <PieChart width={800} height={400}>
        <Pie 
        data={data} 
        dataKey="value" 
        cx={550} 
        cy={200} 
        innerRadius={80} 
        outerRadius={160} 
        fill="#8884d8">
            {
              	data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
        </Pie>
      </PieChart>
    </div>
  );
};

export default Chart;
