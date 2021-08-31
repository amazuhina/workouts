import React, {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'


const InputTextStl = styled.div`
  margin-bottom: 15px;
`

const InputStl = styled.input`
  background-color: #fff;
  border: 1px solid #BE9E72;
  border-radius: 15px;
  height: 30px;
  outline:none;
  padding: 10px;
`

const SpanStl = styled.span`
  margin-right: 10px;
`



interface InputTextProps {
    title: string
    setter:  Dispatch<SetStateAction<string | null>>
}


export const InputText:React.FunctionComponent<InputTextProps> = ({title, setter}) => {

    return (
        <InputTextStl>
            <SpanStl>
                {title}
            </SpanStl>
            <InputStl onChange={e => setter(e.target.value)} type={'text'}/>
        </InputTextStl>
    )
}