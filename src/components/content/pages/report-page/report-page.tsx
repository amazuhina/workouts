import React from 'react'
import styled from 'styled-components'
import {QuestionWindow} from "./question-window/question-window";
import {ReportTable} from "./report-table/report-table";


const ReportPageStl = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
`




export const ReportPage = ({}) => {
    return (
        <ReportPageStl>
            <QuestionWindow />
            <ReportTable/>
        </ReportPageStl>
    )
}