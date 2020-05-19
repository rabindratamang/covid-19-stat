import React from 'react'
import styled from 'styled-components'
import {Doughnut} from 'react-chartjs-2'

const ChartWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

const StatChart = ({stats}) => {
    const {confirmed, recovered, deaths} = stats;
    return <ChartWrapper>
                    <Doughnut
                    data={{
                        datasets: [
                        {
                            data: [confirmed?.value, deaths?.value, recovered?.value],
                            backgroundColor: ['#0088FE', '#dc6435', '#3cde61'],
                            hoverBackgroundColor: ["#469efd", "#e08663",'#78f194' ],
                        },
                        ],
                        labels: ["Confirmed", "Deaths", "Recovered"],
                    }}
                    width={160}
                    height={256}
                    options={{
                        maintainAspectRatio: false,
                        legend: {
                        display: true,
                        position: "bottom",
                        },
                    }}
                    />
                </ChartWrapper>
}

export default StatChart;