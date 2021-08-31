import React from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {isLoginSelector} from "../../redux/user-slice";
import {ImgStl} from "../content/pages/workout-page/workout-page";
import logo from "../../attachments/logo.png"


const HeaderStl = styled.div`
  width: 100%;
  background-color: #6C91A1;
  display: flex;
  height: 8vh;
  justify-content: space-between;
  padding: 10px 50px;
  align-items: center;
  & p {
    color: #fff;
    font-size: 14px;
  }
`

const LogoStl = styled.div`
  width: 80px;
`

const AccountStl = styled.div`

`

export const Header: React.FunctionComponent = () => {
    const isLogin = useSelector(isLoginSelector)
    return (
        <HeaderStl>
            <LogoStl>
                <ImgStl src={logo}></ImgStl>
            </LogoStl>
            <AccountStl>
                {
                    isLogin ?
                        <p>test@mail.ru</p> : <p> Войти</p>
                }
            </AccountStl>

        </HeaderStl>
    )
}