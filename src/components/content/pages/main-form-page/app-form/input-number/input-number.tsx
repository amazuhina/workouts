import React, {Dispatch, SetStateAction, useState} from 'react'
import styled from 'styled-components'


const InputNumberStl = styled.div`
  margin-bottom: 15px;
`

export const InputStl = styled.input`
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



interface InputNumberProps {
    title: string
    getter: number
    setter: Dispatch<SetStateAction<number | null>>

}


export const InputNumber: React.FunctionComponent<InputNumberProps> = ({title, setter, getter}) => {

    const typingText = (event: any) => {
        if (event.target.value == '') {
            setter(0)
            return
        }

        const value: string = event.target.value
            .replace(/[^.\d]+/g,"")
           .replace( /^([^\.]*\.)|\./g, '$1' )

        setter(Number.parseFloat(value))
    }


    return (
        <InputNumberStl>
            <SpanStl>
                {title}
            </SpanStl>

            <InputStl
                type={'text'}
                onChange={typingText}
                value={getter}
            />
        </InputNumberStl>
    )
}