import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import firebase from "firebase";
import {useDispatch} from "react-redux";
import {login, setUser} from "../../../../redux/user-slice";

const LoginPageStl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const LoginBoxStl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`

const InputAuthStl = styled.input`
  border: none;
  width: 300px;
  padding: 10px 5px;
  outline: none;
  margin: 10px 0;
`

const ButtonAuthStl = styled.div`
  padding: 10px 15px;
  background-color: #fff;
  color: #E3CD99;
  text-transform: uppercase;
  cursor: pointer;
  margin: 15px 0 15px;
  text-align: center;
  width: 300px;
`

const SpanAuthStl = styled.span`
  color: #BE9E72;
  cursor: pointer;
  font-weight: bold;
  margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
`


const HelloTextStl = styled.div`
  width: 80%;
  display: flex;
  text-align: center;
  margin: 50px auto;
  p {
    font-weight: 600;
  }
`

export const LoginPage: React.FunctionComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState<boolean>(false)


    const clearInputs = () => {
        setEmail('')
        setPassword('')
    }

    const clearErrors = () => {
        setEmailError('')
        setPasswordError('')
    }

    const dispatch = useDispatch()


    const handleLogin = () => {
        clearErrors()
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(data => {
                const payload = {
                    user: {
                        uid: data.user?.uid,
                        email: data.user?.email
                    }
                }
                dispatch(setUser(payload))
                dispatch(login())
            })
            .catch(err  => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }


    const handleSignUp = () => {
        clearErrors()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err  => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }


    const handleSignOut = () => {
        firebase.auth().signOut()
    }


    const authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user ){
                clearInputs()
                setUser(user);
            } else {
                setUser('');
            }
        })
    }


    useEffect(()=> {
        authListener()
    }, [])

    return (
        <LoginPageStl>
            <HelloTextStl>
                <p>Приветствую тебя в моем приложении для тренировок. К сожалению, оно работает в тестовом режиме,
                    пока мы не подключили сервер. Но ты уже можешь с ним ознакомиться. Пожалуйста, заполни все поля
                    из формы, для корректной работы.</p>
            </HelloTextStl>
            <LoginBoxStl>
                <InputAuthStl type={'text'} value={email} onChange={event=> setEmail(event.target.value)}/>
                <p>{emailError}</p>
                <InputAuthStl type={'password'} value={password} onChange={event=> setPassword(event.target.value)}/>
                <p>{passwordError}</p>
                <div>
                    {
                        hasAccount ?
                            (
                                <>
                                    <ButtonAuthStl
                                        onClick={handleLogin}
                                    >
                                        Войти
                                    </ButtonAuthStl>
                                    <p>
                                        У вас еще нет аккаунта?
                                        <SpanAuthStl onClick={()=>{setHasAccount(!hasAccount)}}>
                                            Зарегистрироваться
                                        </SpanAuthStl>
                                    </p>
                                </>
                            )

                            :
                            (
                                <>
                                    <ButtonAuthStl
                                        onClick={handleSignUp}
                                    >
                                        Зарегистрироваться
                                    </ButtonAuthStl>
                                    <p>
                                        У вас уже есть аккаунт?
                                        <SpanAuthStl onClick={()=>{setHasAccount(!hasAccount)}}>
                                            Войти
                                        </SpanAuthStl>
                                    </p>
                                </>
                            )
                    }
                </div>


            </LoginBoxStl>

        </LoginPageStl>
    )
}