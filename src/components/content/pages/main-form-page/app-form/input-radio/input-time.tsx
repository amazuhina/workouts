import React, {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'
import {workoutTimeAll} from "../../../../../../const/const";


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



interface InputTimeProps {
    title: string
    getter: number
    setter: Dispatch<SetStateAction<number | null>>
}

export const InputTime: React.FunctionComponent<InputTimeProps> = ({title, getter, setter}) => {



    return (
        <InputRadioStl>
            <SpanStl>
                {title}
            </SpanStl>
            {
                workoutTimeAll.map(i =>
                    <BtnRadio
                        onClick={() => {setter(i)}}
                        clicked={getter === i}
                    >
                        {i}
                    </BtnRadio>
                )
            }

        </InputRadioStl>
    )
}