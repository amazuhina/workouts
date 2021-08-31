import React, {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'


const InputTwiceChangeStl = styled.div`
  margin-bottom: 15px;  
`

const SpanStl = styled.span`
  margin-right: 10px;
`

const BtnMaleStl = styled.button <{clicked: boolean}>`
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  border: 1px solid #BE9E72;
  color: #BE9E72;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  background-color: inherit;
  transition: .3s;
  
  ${({clicked}) => clicked && `
    background-color: #BE9E72;
    color: #fff;
  `}
`

const BtnFemaleStl = styled.button <{clicked: boolean}>`
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  border: 1px solid #BE9E72;
  color: #BE9E72;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  background-color: inherit;
  transition: .3s;
  
  ${({clicked}) => clicked && `
    background-color: #BE9E72;
    color: #fff;
  `}
`

interface InputTwiceChangeProps {
    title: string
    getter: string
    setter: Dispatch<SetStateAction<string | null>>
}

export const InputTwiceChange: React.FunctionComponent<InputTwiceChangeProps> = ({title, getter, setter}) => {
    const maleSelect = 'м'
    const femaleSelect = 'ж'

    return (
        <InputTwiceChangeStl>
            <SpanStl>
                {title}
            </SpanStl>

            <BtnMaleStl
                onClick={() => setter(maleSelect)}
                clicked={getter === maleSelect}
            >М</BtnMaleStl>

            <BtnFemaleStl
                onClick={() => setter(femaleSelect)}
                clicked={getter === femaleSelect}
            >Ж</BtnFemaleStl>
        </InputTwiceChangeStl>
    )
}