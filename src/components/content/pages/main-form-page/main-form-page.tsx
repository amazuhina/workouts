import React from 'react'
import styled from 'styled-components'

import {AppForm} from "./app-form/app-form";

const MainFormPageStl = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 30px;
  height: 100%;
  
  & h2 {
    text-align: center;
    font-size: 32px;
    margin-bottom: 50px;
  }
`


export const MainFormPage:React.FunctionComponent = ({}) => {
    return (
        <MainFormPageStl>
            <h2>Заполните форму</h2>
            <AppForm/>
        </MainFormPageStl>
    )
}