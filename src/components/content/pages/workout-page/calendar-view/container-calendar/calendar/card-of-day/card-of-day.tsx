import React, {useEffect} from 'react'

import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {IPlanDay, monthPlanSelector, workoutWeekSelector } from '../../../../../../../../redux/workout-month-plan.slice';
import {setDay, SetDayPayload, workoutDaySelector, workoutMonthSelector} from '../../../../../../../../redux/workout-day.slice';
import {TextRelaxStl} from "../../../../card-view/container-cards/card/relax-card/relax-card";

const CardOfDayStl = styled.div`
  border-radius: 15px;
  background-color: #BE9E72;
  width: 300px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  margin-right: 15px;
`

const TextWorkoutStl = styled.div`
  margin-top: 15px;
  font-size: 13px;
  padding: 30px 10px 10px 20px;
  color: #fff;
  text-align: justify;
  & li {
    margin-bottom: 10px;
  }
`


export const CardOfDay: React.FunctionComponent = () => {
    const monthPlan = useSelector(monthPlanSelector)
    const clickedDay = useSelector(workoutDaySelector)
    const month = useSelector(workoutMonthSelector)

    const entity: IPlanDay = monthPlan.find((i: any) => {

        console.log(month)
        console.log(new Date(i.date).getMonth() + 1)

        return (new Date(i.date).getDate() === clickedDay && new Date(i.date).getMonth() === month)
    })



    const dispatch = useDispatch()

    useEffect(() => {
        const payload: SetDayPayload = {
            day: new Date().getDate()
        }
        dispatch(setDay(payload))
    }, [])

    const a = useSelector(workoutWeekSelector)



    return (
        <CardOfDayStl>
            {
                entity != undefined && entity.isHaveWorkout
                    ? (<TextWorkoutStl>
                            <ul>
                                {
                                    // @ts-ignore
                                    a[entity.workoutNumber].map(i => <li>{i.title}</li>)
                                }
                            </ul>
                    </TextWorkoutStl>

                    )
                    : <TextRelaxStl>
                        <h3>День отдыха</h3>
                      </TextRelaxStl>
            }
        </CardOfDayStl>
    )
}