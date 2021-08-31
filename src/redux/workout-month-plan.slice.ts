import {PayloadAction} from "@reduxjs/toolkit";
import { dateDayDigital } from "../const/const";
import {TStore} from "./store";

const {createSlice} = require("@reduxjs/toolkit");



export interface MoveDatePayload {
    date: number
}

export interface IWorkoutCard {
    title: string
}

export interface IPlanDay {
    isHaveWorkout: boolean
    workoutNumber: number | null
    date: number
}



// Payloads
export interface SetCardPayload {
    cards: Array<Array<IWorkoutCard>>
}

export interface SetMonthPayload {
    monthPlan: Array<IPlanDay>
}


// Initial state
export interface TSliceState {
    cards: Array<Array<IWorkoutCard>> | null
    monthPlan: Array<IPlanDay> | null
}

const initialState: TSliceState = {
    cards: null,
    monthPlan: [] // TODO: check this
}

const workoutMonthPlanSlice = createSlice({
    name: 'workoutWeekSlice',
    initialState: initialState,
    reducers: {
        setCard: (state: TSliceState, action:PayloadAction<SetCardPayload>) => {
            state.cards = action.payload.cards
        },
        setMonth: (state: TSliceState, action:PayloadAction<SetMonthPayload>) => {
            state.monthPlan = action.payload.monthPlan
        },
        moveDate : (state: TSliceState, action:PayloadAction<MoveDatePayload>) => {
            if (state.monthPlan == null) {
                return
            }

            const index = state.monthPlan.findIndex(i => i.date == action.payload.date)
            state.monthPlan[index].date += action.payload.date

            const temp = state.monthPlan[index]
            state.monthPlan[index] = state.monthPlan[index + 1]
            state.monthPlan[index + 1] = temp
        }
    }
})



export const workoutWeekSelector = (state: TStore) => state.workoutWeekReducer.cards
export const monthPlanSelector = (state: TStore) => state.workoutWeekReducer.monthPlan



export const {
    setCard,
    setMonth,
    moveDate
} = workoutMonthPlanSlice.actions


export const reducer = workoutMonthPlanSlice.reducer