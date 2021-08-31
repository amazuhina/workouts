import React, {useEffect} from 'react'
import styled from 'styled-components'
import {DayItem} from "./day-item/day-item";
import {objMonth} from "../../../../../../../const/const";
import {monthToString} from "../../../../../../../const/pure-functions";
import {useDispatch, useSelector} from "react-redux";
import {IPlanDay, monthPlanSelector } from '../../../../../../../redux/workout-month-plan.slice';
import { ImgStl } from '../../../workout-page';
import arrowBack from "../../../../../../../attachments/arrowBack.png"
import arrowForward from "../../../../../../../attachments/arrowForward.png"
import {setMonth, SetMonthPayload, workoutMonthSelector } from '../../../../../../../redux/workout-day.slice';

const CalendarStl = styled.div`
  display: flex;
  flex-direction: column;
`


const GridStl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1.1fr 0.9fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas: 
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . ."
    ". . . . . . .";
  width: 100%;
  height: 100%;
`

const CalendarBtnStl = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px;
`

const BtnSwitchStl = styled.button`  
  outline: none;    
  cursor: pointer;
  border: none;
  background-color: inherit;
`


const MonthTitleStl = styled.div`
margin: 0 20px;
color: #b4b4b4;
`





export const Calendar: React.FunctionComponent = ({}) => {

    const dispatch = useDispatch()

    const date = new Date()

    useEffect(() => {
        let todayMonth = (date.getMonth())

        const payload: SetMonthPayload = {
            month: todayMonth
        }

        dispatch(setMonth(payload))
    }, [])

    let year = date.getFullYear()

    const month = useSelector(workoutMonthSelector)


    const onForward = () => {
        const payload: SetMonthPayload = {
            month: month + 1
        }
        dispatch(setMonth(payload))
    }

    const onBack = () => {
        const payload: SetMonthPayload = {
            month: month - 1
        }
        dispatch(setMonth(payload))
    }


    let weekday = new Date(`${year}-${month + 1}-1`).getDay()
    weekday = (weekday === 0) ? 7 : weekday



    let maxDays = objMonth.filter(i => (i.number === (month)))[0]?.days

    console.log(month)

    const arrDays = []

    for (let i = 1; i <= (weekday-1); i++){
        arrDays.push(0)
    }
    for (let i = 1; i <= maxDays; i++){
        arrDays.push(i)
    }


    const monthNumber: number = objMonth[month]?.number


    const thisDay: number = new Date().getDate()
    const thisMonth = (): boolean => new Date().getMonth() === monthNumber


    const workoutPlan: Array<IPlanDay> = useSelector(monthPlanSelector)

    console.log(workoutPlan)

    const checkIsHaveWorkout = (day: number, month: number): number | null => {
        const entity = workoutPlan
            .find(i => {
                const entityMonth = (new Date(i.date).getMonth())
                const entityDay = (new Date(i.date).getDate())

            return  entityMonth == month && entityDay == day
            })

        if (entity == undefined) {
            return null
        }

        return entity.isHaveWorkout ? entity.workoutNumber : null
    }



    return (
        <CalendarStl>
            <CalendarBtnStl>
                <BtnSwitchStl
                    onClick={onBack}
                >
                    <ImgStl src={arrowBack}></ImgStl>
                </BtnSwitchStl>
                <MonthTitleStl>{monthToString(monthNumber + 1)}</MonthTitleStl>
                <BtnSwitchStl
                    onClick={onForward}
                >
                    <ImgStl src={arrowForward}></ImgStl>
                </BtnSwitchStl>
            </CalendarBtnStl>
            <GridStl>
                {
                    arrDays.map(i => <DayItem

                        number={i}
                        day={thisDay}
                        month={thisMonth()}
                        entityCounter={checkIsHaveWorkout(i, month)}
                    />)
                }
            </GridStl>

        </CalendarStl>
    )
}