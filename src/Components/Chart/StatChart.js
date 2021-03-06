import React from 'react'
import styled from 'styled-components'
import {Doughnut} from 'react-chartjs-2'

const ChartWrapper = styled.div`
  position: relative;
  margin-top: 20px;
`;

const StatChart = ({stats}) => {
    const {confirmed, recovered, deaths} = stats;
    const activeCases = {value: (confirmed.value - (recovered.value + deaths.value))};

    return <ChartWrapper>
                    <Doughnut
                    data={{
                        datasets: [
                        {
                            data: [activeCases?.value, deaths?.value, recovered?.value],
                            backgroundColor: ['#ffc107', '#dc6435', '#3cde61'],
                            hoverBackgroundColor: ["#fbce46", "#e08663",'#78f194' ],
                        },
                        ],
                        labels: ["Active Cases", "Deaths", "Recovered"],
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