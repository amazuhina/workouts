import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector} from "react-redux";
import {dataSelector, IStatisticData} from "../../../../../redux/statistic-slice";
import {userSelector} from "../../../../../redux/user-slice";

const ReportTableStl = styled.div`
  width: 40%;
  height: 60%;
  background-color: rgba(227,205,153,0.5);
  padding: 25px;
  text-align: center;
  h4 {
    margin-bottom: 30px;
    font-weight: bold;
  }
  p {
    color: #777;
    
  }
`


const ContainerGridStl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas: 
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . ."
    ". . .";
  width: 100%;
  height: 100%;
`

export interface ViewModel extends IStatisticData{
    BMI: number
}


export const ReportTable: React.FunctionComponent = ({}) => {
    const user = useSelector(userSelector)
    const statisticData: Array<IStatisticData> = useSelector(dataSelector)

    const BMI = (weight: number) : number => Math.round(((weight / ((user.height / 100) * (user.height / 100)))*100)/100)

    const [viewModel, setViewModel] = useState<Array<ViewModel> | null>(null)


    useEffect(() => {
        if (statisticData == null) {
            return
        }
        setViewModel(statisticData.map(i => ({
            date: i.date,
            weight: i.weight,
            BMI:  BMI(i.weight)
        })))
    }, [statisticData])




    return (
        <ReportTableStl>
            <ContainerGridStl>
                {
                    (viewModel == null || false || viewModel.length < 1)
                        ? <h1>Empty</h1>
                        : <>
                            <div>
                                <h4>Дата</h4>
                                {
                                    viewModel.map(i => {

                                        const date = new Date(i.date)
                                        return  <div>
                                                   <p>{date.getDate()}.{date.getMonth() + 1}</p>
                                                </div>
                                    })
                                }
                            </div>
                            <div>
                                <h4>Вес</h4>
                                {
                                    viewModel.map(i =>
                                        <div>
                                            <p>{i.weight}</p>
                                        </div>)
                                }
                            </div>
                            <div>
                                <h4>ИМТ</h4>
                                {
                                    viewModel.map(i =>
                                        <div>
                                            <p>{i.BMI}</p>
                                        </div>)
                                }
                            </div>
                          </>
                }
            </ContainerGridStl>
        </ReportTableStl>
    )
}