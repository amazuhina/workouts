import React, {useState} from 'react'
import styled from 'styled-components'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {Header} from "./components/header/header";
import {Footer} from "./components/footer/footer";
import {LoginPage} from "./components/content/pages/login-page/login-page";
import {useSelector} from "react-redux";
import {isLoginSelector} from "./redux/user-slice";
import {Content} from "./components/content/content";





const AppStl = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;  
  background-color: #A4C9D3;
  justify-content: space-between;
`



export const App = () => {

    const isLogin = useSelector(isLoginSelector)

    return (
        <>
            <Router>
                <AppStl>
                    <Header/>
                    <Content/>
                    <Footer/>
                </AppStl>
            </Router>
        </>
  )
}