import React from 'react'
import styled from 'styled-components'



const SettingWindowStl = styled.div`
  border-radius: 15px;
  border: 2px solid #BE9E72;
  width: 200px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 5px;
  position: absolute;
  left: 85%;
  top: 35px;
  z-index: 1000;
`

const BtnMoveWorkoutStl = styled.button`
  border-radius: 15px;
  background-color: #fff;
  padding: 5px 10px;
  border: none;
  margin: 5px auto;
  color: #BE9E72;
  cursor: pointer;
  
  &:hover {
    background-color: #BE9E72;
    color: #fff;
  }
`

export const SettingWindowRelax: React.FunctionComponent = ({}) => {


    return (
        <SettingWindowStl>
            <BtnMoveWorkoutStl>
               10 000 шагов не пройдены
            </BtnMoveWorkoutStl>
        </SettingWindowStl>
    )
}





