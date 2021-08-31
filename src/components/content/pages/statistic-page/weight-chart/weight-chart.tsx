import { Line } from 'react-chartjs-2';
import React from 'react'
import styled from 'styled-components'



const WeightChartStl = styled.div`
  width: 60%;
  height: 60%;
`



export interface WeightChartProps {
    axisX: Array<string>
    axisY: Array<number>
}

export const WeightChart: React.FunctionComponent<WeightChartProps> = (axisX, axisY) => {

    const config = {
        labels: axisX.axisX,
        datasets: [
            {
                label: 'Вес',
                data: axisX.axisY,
                fill: true,
                backgroundColor: '#E3CD99',
                borderColor: '#BE9E72',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }


    return (
        <WeightChartStl>
            <Line width={1000} height={500} data={config} options={options} />
        </WeightChartStl>
    )
}