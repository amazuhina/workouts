import React, {useState} from 'react'
import styled from 'styled-components'
import {InputStl} from "../../main-form-page/app-form/input-number/input-number";
import {useDispatch} from "react-redux";
import {addData, SetStatisticDataPayload} from "../../../../../redux/statistic-slice";


const QuestionWindowStl = styled.div`
  padding: 15px;
  width: 20%;
  height: 40%;
  background-color: #A4C9D3;
  color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 15px;  
  & h3 {
    font-weight: normal;
    text-align: center;
    margin: 15px 0;
  }
`

const ButtonStl = styled.button`
  background-color: #6C91A1;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 15px;
  margin: 20px;
`

export const QuestionWindow: React.FunctionComponent = ({}) => {
    const [date, setDate] = useState('')
    const [weight, setWeight] = useState('')
    const dispatch = useDispatch()


    const onSave = () => {
        const payload: SetStatisticDataPayload = {
            statisticData:  {
                date: Date.parse(date),
                weight: Number.parseFloat(weight)
            }
        }
        dispatch(addData(payload))
    }


    return (
        <QuestionWindowStl>
            <h3>Дата измерений</h3>
            <InputStl onChange={e => setDate(e.target.value)} type={'date'}/>
            <h3>Текущий вес, кг</h3>
            <InputStl onChange={e => setWeight(e.target.value)} type={'text'}/>
            <ButtonStl
                onClick={onSave}
            >
                Записать
            </ButtonStl>
        </QuestionWindowStl>
    )
}




