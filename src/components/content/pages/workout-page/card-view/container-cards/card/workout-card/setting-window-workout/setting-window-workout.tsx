import React from 'react'
import styled from 'styled-components'
import {addWorkoutStatisticsData} from "../../../../../../../../../database/databaseConst";
import {
    IPlanDay,
    moveDate,
    MoveDatePayload,
    setMonth,
    SetMonthPayload
} from '../../../../../../../../../redux/workout-month-plan.slice';
import {useDispatch, useSelector} from "react-redux";
import {dateDayDigital, numberOfWeek} from "../../../../../../../../../const/const";
import {userSelector} from "../../../../../../../../../redux/user-slice";



const SettingWindowStl = styled.div`
  border-radius: 15px;
  border: 2px solid #BE9E72;
  width: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: absolute;
  left: 85%;
  top: 35px;
  z-index: 1000;
`

const BtnMoveWorkoutStl = styled.button<{isDisabled: boolean}>`
  border-radius: 15px;
  background-color: #fff;
  padding: 5px 10px;
  border: none;
  margin: 5px auto;
  color: #BE9E72;
  cursor: pointer;
  
  ${({isDisabled}) => isDisabled && `
    opacity: .5;
  `}
  
  &:hover {
    background-color: #BE9E72;
    color: #fff;
  }
`

export interface SettingWindowWorkoutProps {
    dateOfCard: number
    isHaveMove: boolean
    onSkipWorkout: any
}

export const SettingWindowWorkout: React.FunctionComponent<SettingWindowWorkoutProps> = ({dateOfCard, isHaveMove, onSkipWorkout}) => {

    const dispatch = useDispatch()


    const onWorkoutSkip = () => {
        const data = {
            date: Date.now(),
            workoutIsDone: false,
        }
        addWorkoutStatisticsData(data)
    }

    const moveWorkout = () => {
        if (isHaveMove) {
            const payload: MoveDatePayload = {
                date: dateOfCard
            }
            dispatch(moveDate(payload))
        }
    }


    return (
        <SettingWindowStl>
            <BtnMoveWorkoutStl
                isDisabled={!isHaveMove}
                onClick={moveWorkout}
            >
                Перенести тренировку
            </BtnMoveWorkoutStl>
            <BtnMoveWorkoutStl
                isDisabled={false}
                onClick={onSkipWorkout}
            >
                Пропустить тренировку
            </BtnMoveWorkoutStl>
        </SettingWindowStl>
    )
}





