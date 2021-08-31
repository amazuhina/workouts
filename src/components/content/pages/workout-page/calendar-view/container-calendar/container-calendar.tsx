import React from 'react'
import styled from 'styled-components'
import {Calendar} from "./calendar/calendar";
import {CardOfDay} from "./calendar/card-of-day/card-of-day";


const ContainerCalendarStl = styled.div`
  padding: 15px 50px;
  display: flex;
  background-color: #fff;
  width: 100%;
  justify-content: space-between;
`


export const ContainerCalendar: React.FunctionComponent = ({}) => {


    return (
        <ContainerCalendarStl>
            <Calendar/>
            <CardOfDay/>
        </ContainerCalendarStl>
    )
}