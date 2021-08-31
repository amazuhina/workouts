import React, {useState} from 'react'
import styled from 'styled-components'
import {ContainerCards} from "./card-view/container-cards/container-cards";
import {ContainerCalendar} from "./calendar-view/container-calendar/container-calendar";
import cardBtn from "../../../../attachments/cardBtn.png"
import calendarBtn from "../../../../attachments/calendarBtn.png"


const WorkoutPageStl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  background-color: #fff;
`

const ViewStl = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
  width: 85%;
`


const BtnViewStl = styled.button`
  border: 1px solid #ddd;
  outline: none;
  border-radius: 15px;
  width: 70px;
  height: 50px;
  cursor: pointer;
  margin-right: 10px;
  
`

export const ImgStl = styled.img`
  width: 100%;
`



export const WorkoutPage: React.FunctionComponent = ({}) => {

    const [isShowCards, setIsShowCards] = useState(true)
    const [isShowCalendar, setIsShowCalendar] = useState(false)


    const calendarView = () => {
        setIsShowCards(false)
        setIsShowCalendar(true)
    }

    const cardsView = () => {
        setIsShowCalendar(false)
        setIsShowCards(true)

    }



    return (
        <WorkoutPageStl>
            <ViewStl>
                <BtnViewStl
                    onClick={cardsView}
                >
                    <ImgStl src={cardBtn}></ImgStl>
                </BtnViewStl>
                <BtnViewStl
                    onClick={calendarView}
                >
                    <ImgStl src={calendarBtn}></ImgStl>
                </BtnViewStl>
            </ViewStl>

            {
                isShowCards && <ContainerCards/>
            }

            {
                isShowCalendar && <ContainerCalendar/>
            }

        </WorkoutPageStl>
    )
}