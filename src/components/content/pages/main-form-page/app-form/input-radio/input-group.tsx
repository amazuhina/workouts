import React, {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'
import {groupTitleAll} from "../../../../../../const/const";


const InputRadioStl = styled.div`
  margin-bottom: 15px;  
  display: flex;
  flex-direction: column;
`

const SpanStl = styled.span`
  margin:0 10px 10px 0;
`

const BtnRadioStl = styled.button<{clicked: boolean}>`
  border-radius: 15px; 
  border: 1px solid #BE9E72;
  color: #BE9E72;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bolder;
  background-color: inherit;
  margin-right: 15px;
  width: 90px;
  transition: .3s;
  
  ${({clicked}) => clicked && `
    background-color: #BE9E72;
    color: #fff;
  `}
`



interface InputGroupProps {
    title: string
    getter: string
    setter: Dispatch<SetStateAction<string | null>>
}

export const InputGroup: React.FunctionComponent<InputGroupProps> = ({title, getter, setter}) => {

    return (
        <InputRadioStl>
            <SpanStl>
                {title}
            </SpanStl>
            <div>
                {
                    groupTitleAll.map(i =>
                        <BtnRadioStl
                            onClick={() => {setter(i.value)}}
                            clicked={getter === i.value}
                        >
                            {i.title}
                        </BtnRadioStl>
                    )
                }
            </div>


        </InputRadioStl>
    )
}