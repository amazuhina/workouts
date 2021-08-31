import React from 'react'
import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import {setDay, SetDayPayload, workoutDaySelector} from '../../../../../../../../redux/workout-day.slice';



const DayItemStl = styled.div<{current: boolean, clicked: boolean, workoutDay: boolean}>`
  border-radius: 15px;
  border: 1px solid #ddd;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({current}) => current && `
    border: 1px solid red;
  `}
  ${({clicked}) => clicked && `
     border: 2px solid #000;
  `}
  
  
  
  ${
    ({workoutDay}) => workoutDay 
            ? `background-color: #BE9E72;`
            : `background-color: #E3CD99;` 
  }
`



interface DayItemProps {
    number: number
    day: number
    month: boolean
    entityCounter: number | null
}


export const DayItem: React.FunctionComponent<DayItemProps> = ({number, day, month, entityCounter}) => {
    const dispatch = useDispatch()

    const onCardView = (counter: number) => {
        const payload: SetDayPayload = {
            day:  counter
        }
        dispatch(setDay(payload))
        console.log(counter)
    }


    const clickedDay = useSelector(workoutDaySelector)

    return (
        <DayItemStl
            current={day === number && month === true}
            clicked={clickedDay === number}
            workoutDay={entityCounter != null}
            onClick={()=>onCardView(number ?? 0)}
        >
            {number}
        </DayItemStl>
    )
}





