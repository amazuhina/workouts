import React from 'react'
import {NavBar} from "../nav-bar/nav-bar";
import {Navigation} from "../../navigation";
import styled from "styled-components";


const ContentStl = styled.div`
  display: flex;
  height: 90vh;
`



const NavBarContainer = styled.div`
  width: 20%;
  min-width: 250px;
`
const NavigationContainer = styled.div`
  width: 80%;
`

export const Content: React.FunctionComponent = ({}) => {
    return (
        <ContentStl>
            <NavBarContainer>
                <NavBar />
            </NavBarContainer>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </ContentStl>
    )
}