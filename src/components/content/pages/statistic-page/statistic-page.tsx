import React from 'react'
import styled from 'styled-components'
import {WeightChart} from "./weight-chart/weight-chart";
import {useSelector} from "react-redux";
import {dataSelector} from "../../../../redux/statistic-slice";



const StatisticPageStl = styled.div`
  background-color: #fff;
  width: 100%;
`


export const StatisticPage: React.FunctionComponent = ({}) => {
    const statisticData = useSelector(dataSelector)

    const generationAxisY = () => statisticData.map(i => i.weight)

    const generationAxisX = () => statisticData.map(i => {
        const date = new Date(i.date)


        return date.getDate() + '.' + ((date.getMonth() - 0 < 11) ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    })


    return (
        <StatisticPageStl>
            <WeightChart axisY={generationAxisY()} axisX={generationAxisX()}/>
        </StatisticPageStl>
    )
}