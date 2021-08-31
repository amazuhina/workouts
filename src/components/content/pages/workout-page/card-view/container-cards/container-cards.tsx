import React, {useState} from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {RelaxCard} from "./card/relax-card/relax-card";
import {WorkoutCard} from "./card/workout-card/workout-card";
import {IPlanDay, IWorkoutCard, monthPlanSelector, workoutWeekSelector} from "../../../../../../redux/workout-month-plan.slice";

const ContainerCardsStl = styled.div` 
  padding: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
`

const CardBoxStl = styled.div` 
  padding: 10px; 
  overflow-x: auto;
`

const CardWrapperStl = styled.div`
  display: flex;
`

const PageContainerStl = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`

const PageNumberStl = styled.button<{clicked: boolean}>`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 5px;
  background-color: #fff;
  color: #ddd;
  width: 40px;
  margin-right: 10px;
  cursor: pointer;
  ${({clicked}) => clicked && `
    background-color: #c4c4c4;
    color: #fff;
  `}
`

const ErrorTextStl = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 200px auto;
`


export const ContainerCards: React.FunctionComponent = ({}) => {
    const listMonth: Array<IPlanDay> = useSelector(monthPlanSelector)
    const workoutDays: Array<Array<IWorkoutCard>> = useSelector(workoutWeekSelector)

    const [page, setPage] = useState<number>(1)

    const onGoToPage = (page: number) => {
        setPage(page)
    }

    const limit = 7

    let endPosition = limit * page - 1
    let startPosition = endPosition - (limit - 1)

    return (
        <ContainerCardsStl>
            <PageContainerStl>
                <PageNumberStl
                    onClick={() => onGoToPage(1)}
                    clicked={true}
                >
                    1
                </PageNumberStl>
                <PageNumberStl
                    onClick={() => onGoToPage(2)}
                    clicked={true}
                >
                    2
                </PageNumberStl>
                <PageNumberStl
                    onClick={() => onGoToPage(3)}
                    clicked={true}
                >
                    3
                </PageNumberStl>
                <PageNumberStl
                    onClick={() => onGoToPage(4)}
                    clicked={true}
                >
                    4
                </PageNumberStl>
            </PageContainerStl>

            <CardBoxStl>
                <CardWrapperStl>
                    {
                        listMonth.length < 1
                            ? <ErrorTextStl>Вы не заполнили форму регистрации</ErrorTextStl>
                            :   listMonth.slice(startPosition, endPosition + 1).map((item, index) => {
                                if (!item.isHaveWorkout) {
                                    return <RelaxCard/>
                                } else  {
                                    const counter: number = item.workoutNumber ?? 0

                                    const isHaveMove = index < listMonth.length - 1 && !listMonth[index + 1].isHaveWorkout

                                    return <WorkoutCard
                                        counter={counter}
                                        workoutArr={workoutDays[counter - 1]}
                                        date={item.date}
                                        isHaveMove={isHaveMove}
                                    />
                                }
                            })

                    }
                </CardWrapperStl>
            </CardBoxStl>
        </ContainerCardsStl>
    )
}