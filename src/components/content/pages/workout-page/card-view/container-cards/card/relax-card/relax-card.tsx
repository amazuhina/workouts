import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {SettingWindowRelax} from "./setting-window-relax/setting-window-relax";
import {AddData, addWorkoutStatisticsData} from "../../../../../../../../database/databaseConst";

const RelaxCardStl = styled.div<{clicked: boolean, clickedSkip: boolean}>`
  border-radius: 15px;
  background-color: #E3CD99;
  min-width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  margin-right: 15px;
  ${({clicked}) => clicked && `
    background-color: #799B65;
  `}
  ${({clickedSkip}) => clickedSkip && `
    background-color: #B66B61;
  `}
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
  right: 10%;
 
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
`



export const TextRelaxStl = styled.div`
  margin-top: 15px;
  padding: 30px 10px 10px 20px;
  color: #fff;
  text-align: center;  
  & h3 {
    text-transform: uppercase;
    margin: 80px auto 150px;
  }
`


export const RelaxCard: React.FunctionComponent = () => {

    const [isWorkoutDone, setIsWorkoutDone] = useState<boolean>(false)
    const [isShowSetting, setIsShowSetting] = useState<boolean>(false)
    const [isWorkoutSkip, setIsWorkoutSkip] = useState<boolean>(false)

    const onSkipWorkout = () => {
        setIsWorkoutSkip(true)
        setIsShowSetting(false)
    }

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
        <RelaxCardStl ref={ref} clicked={isWorkoutDone} clickedSkip={isWorkoutSkip}>
            <BtnSettingStl
                onClick={openSetting}
            >
                ...
            </BtnSettingStl>
            {
                isShowSetting && <SettingWindowRelax onSkipWorkout={onSkipWorkout}/>
            }
            <TextRelaxStl>
                <h3>День отдыха</h3>
                <p>Старайтесь сделать 10 000 шагов</p>
            </TextRelaxStl>
            <BtnDoneStl
                onClick={onWorkoutDone}
                clicked={isWorkoutDone}
            >
                Сделано
            </BtnDoneStl>
        </RelaxCardStl>
    )
}