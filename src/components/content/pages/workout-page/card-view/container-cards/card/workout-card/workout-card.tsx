import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {SettingWindowWorkout} from "./setting-window-workout/setting-window-workout";
import {AddData, addWorkoutStatisticsData} from "../../../../../../../../database/databaseConst";
import {IWorkoutCard } from '../../../../../../../../redux/workout-month-plan.slice';

const WorkoutCardStl = styled.div`
  border-radius: 15px;
  background-color: #BE9E72;
  min-width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  margin-right: 15px;
`

const BtnSettingStl = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: #fff;
  font-weight: bolder;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10%
  
`
const BtnDoneStl = styled.button<{clicked: boolean}>`
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: #fff;
  text-transform: uppercase;
  color: #BE9E72;
  padding: 10px 15px;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  bottom: 30px;
  left: 10%;  
  ${({clicked}) => clicked && `
    background-color: #9B876B;
    color: #fff;
  `}
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

interface IWorkoutCardProps {
    workoutArr: Array<IWorkoutCard>
    counter: number
    date: number
    isHaveMove: boolean
}


export const WorkoutCard: React.FunctionComponent<IWorkoutCardProps> = ({workoutArr, counter, date, isHaveMove}) => {
    const [isWorkoutDone, setIsWorkoutDone] = useState<boolean>(false)
    const [isShowSetting, setIsShowSetting] = useState<boolean>(false)

    const openSetting = () => {
        setIsShowSetting(true)
    }

    const closeSetting = () => {
        setIsShowSetting(false)
    }


    const ref = useRef()

    useEffect(() => {
        const checkIfClickedOutside = (event: any) => {
            // @ts-ignore
            if (isShowSetting && ref.current && !ref.current.contains(event.target)) {
                setIsShowSetting(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isShowSetting])

    const onWorkoutDone = () => {
        const data: AddData = {
            date: Date.now(),
            workoutIsDone: true
        }
        addWorkoutStatisticsData(data)
        setIsWorkoutDone(true)
        closeSetting()
    }

    return (
        //@ts-ignore
        <WorkoutCardStl ref={ref}>
            <BtnSettingStl
                onClick={openSetting}
            >
                ...
            </BtnSettingStl>
                {
                    isShowSetting && <SettingWindowWorkout dateOfCard={date} isHaveMove={isHaveMove}/>
                }
            <TextWorkoutStl>
                <ul>
                    {
                        workoutArr.map(i => <li>{i.title}</li>)
                    }
                </ul>
            </TextWorkoutStl>

            <BtnDoneStl
              onClick={onWorkoutDone}
              clicked={isWorkoutDone}
            >
                Сделано
            </BtnDoneStl>
        </WorkoutCardStl>
    )
}


