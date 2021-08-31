import React, {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'
import {workoutCountAll} from "../../../../../../const/const";


const InputRadioStl = styled.div`
  margin-bottom: 15px;  
`

const SpanStl = styled.span`
  margin-right: 10px;
`

const BtnRadio = styled.button<{clicked: boolean}>`
  border-radius: 15px; 
  border: 1px solid #BE9E72;
  color: #BE9E72;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  background-color: inherit;
  margin-right: 15px;
  width: 60px;
  transition: .3s;
  
  ${({clicked}) => clicked && `
    background-color: #BE9E72;
    color: #fff;
  `}
`


interface InputCountProps {
    title: string
    getter: number
    setter: Dispatch<SetStateAction<number | null>>
}

export const InputCount: React.FunctionComponent<InputCountProps> = ({title, getter, setter}) => {


    const onWorkoutCount = (value: number) => {

        setter(value)
    }


        return (
        <InputRadioStl>
            <SpanStl>
                {title}
            </SpanStl>
            {
                workoutCountAll.map(i =>
                    <BtnRadio
                        onClick={() => onWorkoutCount(i)}
                        clicked={getter === i}
                    >
                        {i}
                    </BtnRadio>
                )
            }
        </InputRadioStl>
    )
}