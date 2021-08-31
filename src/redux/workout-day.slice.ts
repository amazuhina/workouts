import {PayloadAction} from "@reduxjs/toolkit";
import {TStore} from "./store";

const {createSlice} = require("@reduxjs/toolkit");


export interface TSliceState {
    day: number | null
    month: number | null
}

const initialState: TSliceState = {
    day: null,
    month: null
}

export interface SetDayPayload {
    day: number
}

export interface SetMonthPayload {
     month: number
}





const workoutDaySlice = createSlice({
    name: 'workoutDaySlice',
    initialState: initialState,
    reducers: {
        setDay: (state: TSliceState, action:PayloadAction<SetDayPayload>) => {
            state.day = action.payload.day
        },
        setMonth: (state: TSliceState, action:PayloadAction<SetMonthPayload>) => {
            state.month = action.payload.month
        },
    }
})



export const workoutDaySelector = (state: TStore) => state.workoutDayReducer.day
export const workoutMonthSelector = (state: TStore) => state.workoutDayReducer.month



export const {
    setDay,
    setMonth
} = workoutDaySlice.actions


export const reducer = workoutDaySlice.reducer