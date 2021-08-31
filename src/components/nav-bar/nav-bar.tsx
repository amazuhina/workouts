import React from 'react'
import styled from 'styled-components'
import {arrayBtnNav} from "./obj-nav";
import {BtnNav} from "./btn-nav/btn-nav";



const NavBarStl = styled.div`
  display: flex;
  flex-direction: column; 
  background-color: #A4C9D3;
  padding: 20px;
`

export const NavBar: React.FunctionComponent = ({}) => {
    return (
        <NavBarStl>
            {
                arrayBtnNav.map(item => <BtnNav to={item.to} title={item.title}/> )
            }
        </NavBarStl>
    )
}