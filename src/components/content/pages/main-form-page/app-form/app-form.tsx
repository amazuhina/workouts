import React, {useState} from 'react'
import styled from 'styled-components'
import {InputText} from "./input-text/input-text";
import {InputNumber} from "./input-number/input-number";
import {InputTwiceChange} from "./input-twice-changes/input-twice-change";
import {InputTime} from "./input-radio/input-time";
import {InputCount} from "./input-radio/input-count";
import {InputGroup} from "./input-radio/input-group";
import {useDispatch} from "react-redux";
import {setUser, SetUserPayload} from "../../../../../redux/user-slice";
import {dateDayDigital, numberOfWeek} from "../../../../../const/const";
import {generationLessonTitle} from "../../../../../hooks/generationLessonTitle";
import {setCard, SetCardPayload, IWorkoutCard, SetMonthPayload, setMonth, IPlanDay} from "../../../../../redux/workout-month-plan.slice";
import {addData, SetStatisticDataPayload} from "../../../../../redux/statistic-slice";
import {createUser, IUserCreateDto} from "../../../../../database/databaseConst";


const AppFormStl = styled.div`
  margin: 0 auto;
`


const BtnToSaveStl = styled.button`
  border-radius: 15px;
  padding: 15px 25px;
  border: none;
  background-color: #E3CD99;
  cursor: pointer;
  text-transform: uppercase;
  color: #fff;
  transition: .3s;
  margin: 10px auto;

  &:hover {
    background-color: #BE9E72;
  }
`

export const AppForm = ({}) => {
    const [name, setName] = useState<string | null>(null)
    const [age, setAge] = useState<number | null>(null)
    const [sex, setSex] = useState<string | null>(null)
    const [weight, setWeight] = useState<number | null>(null)
    const [height, setHeight] = useState<number | null>(null)
    const [count, setCount] = useState<number | null>(null)
    const [time, setTime] = useState<number | null>(null)
    const [group, setGroup] = useState<string | null>(null)
    const dispatch = useDispatch()


    const saveUserData = () => {
        const payload: SetUserPayload = {
            user:  {
                name: name ?? '',
                age: age ?? 0,
                sex: sex ?? '',
                weight: weight ?? 0,
                height: height ?? 0,
                workoutCount: count ?? 0,
                workoutTime: time ?? 0,
                groupTitle: group ?? '',
            }
        }
        dispatch(setUser(payload))


        const userCreateDto: IUserCreateDto = {
            name: name ?? '',
            age: age ?? 0,
            sex: sex ?? '',
            weight: weight ?? 0,
            height: height ?? 0,
            workoutCount: count ?? 0,
            workoutTime: time ?? 0,
            groupTitle: group ?? '',
        }
        createUser(userCreateDto)
    }


    const generationWorkout = (workoutCount: number): Array<IPlanDay> => {
        const monthPlan: Array<IPlanDay> = [{
            isHaveWorkout: true,
            workoutNumber: 1,
            date: Date.now()
        }]


        let workoutCountOfWeek = (numberOfWeek/ workoutCount) == 1 ? 0 : numberOfWeek/ workoutCount

        const timeout = (workoutCount: number) => Math.floor(workoutCountOfWeek)

        const timeoutValue = timeout(workoutCount)

        let counter = 2

        const dateGet = (dayCount: number) => Date.now() + (dateDayDigital * (dayCount))

        while (monthPlan.length < 28) {
            for (let i = 1; i <= timeoutValue && !(monthPlan.length >= 28); i++) {
                const entity: IPlanDay = {
                    isHaveWorkout: false,
                    workoutNumber: null,
                    date: dateGet(monthPlan.length)
                }

                monthPlan.push(entity)
            }

            if (monthPlan.length >= 28) {
                break
            }

            const entity: IPlanDay = {
                isHaveWorkout: true,
                workoutNumber: counter,
                date: dateGet(monthPlan.length)
            }
            monthPlan.push(entity)
            counter++
        }

        return monthPlan
    }


    const generationWorkoutWeek = (): Array<Array<IWorkoutCard>> => {
        const workoutCards: Array<Array<IWorkoutCard>> = []

        const workoutCount: number = count ?? 0
        const workoutTime: number = time ?? 0
        const groupTitle: string = group ?? ''

        for (let i = 1; i <= workoutCount * 4; i++) {
            const workoutCard: Array<IWorkoutCard> = generationLessonTitle(workoutTime, groupTitle)
            workoutCards.push(workoutCard)
        }

        return workoutCards
    }


    const addFirstStatisticData = () => {
        const payload: SetStatisticDataPayload = {
            statisticData: {
                date: Date.now(),
                weight: weight ?? 0,
            }

        }
        dispatch(addData(payload))
    }

    const onSave = () => {
        saveUserData()

        const cards: Array<Array<IWorkoutCard>> = generationWorkoutWeek()

        const payloadCards: SetCardPayload = {
             cards: cards
        }
        dispatch(setCard(payloadCards))

        const workouts: Array<IPlanDay> = generationWorkout(count?? 0)

        const payloadWorkouts: SetMonthPayload = {
            monthPlan: workouts
        }


        dispatch(setMonth(payloadWorkouts))
        addFirstStatisticData()

    }

    return (
        <AppFormStl>
            <InputText title={'Ваше имя'} setter={setName}/>
            <InputTwiceChange title={'Ваш пол'} getter={sex ?? ''} setter={setSex}/>

            <InputNumber title={'Ваш возраст'} getter={age ?? 0} setter={setAge}/>
            <InputNumber title={'Ваш вес, кг'} getter={weight ?? 0} setter={setWeight}/>
            <InputNumber title={'Ваш рост, см'} getter={height ?? 0} setter={setHeight}/>

            <InputCount title={'Выберите количество тренировок в неделю'} getter={count ?? 0} setter={setCount}/>
            <InputTime title={'Выберите длительность тренировки, мин.'} getter={time ?? 0} setter={setTime}/>
            <InputGroup title={'Укажите группу мышц для более детальной проработки'} getter={group ?? ''} setter={setGroup}/>

            <BtnToSaveStl onClick={onSave}>
                Сохранить
            </BtnToSaveStl>
        </AppFormStl>
    )
}