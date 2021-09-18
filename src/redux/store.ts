import { configureStore } from '@reduxjs/toolkit'


import {reducer as statisticReducer} from "./statistic-slice"
import {reducer as userReducer} from "./user-slice"
import {reducer as workoutWeekReducer} from "./workout-month-plan.slice"

import {reducer as workoutDayReducer} from "./workout-day.slice"


const rootReducer = {
    statisticReducer: statisticReducer,
    userReducer: userReducer,
    workoutWeekReducer: workoutWeekReducer,
    workoutDayReducer: workoutDayReducer,
}


export const store: any = configureStore({
    reducer: rootReducer
})

export type TStore = ReturnType<typeof store.getState>


