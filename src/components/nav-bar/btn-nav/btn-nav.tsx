import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom";

const BtnNavStl = styled.button`
  width: 200px;
  border-radius: 15px;
  padding: 15px 25px;
  border:3px solid #BE9E72;
  background-color: #E3CD99;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  transition: .3s;
  margin: 0 auto 15px;
  
  &:hover {
    background-color: #BE9E72;
  }
`

interface IBtnProps {
    to: string
    title: string
}


export const BtnNav: React.FunctionComponent<IBtnProps> = ({to, title}) => {

    const history = useHistory()

    const onLink = () => {
        history.push(to)
    }



    return (
        <BtnNavStl
            onClick={onLink}
        >
            {title}
        </BtnNavStl>
    )
}