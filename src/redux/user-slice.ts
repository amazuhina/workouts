import {PayloadAction} from "@reduxjs/toolkit";
import {TStore} from "./store";

const {createSlice} = require("@reduxjs/toolkit");



export interface SetUserPayload {
    user: {
        name: string
        age: number
        sex: string
        weight: number
        height: number
        workoutCount: number
        workoutTime: number
        groupTitle: string
    }
}

export interface User {
    uid: number
    email: string
    name: string | null
    age: number | null
    sex: string | null
    weight: number | null
    height: number | null
    workoutCount: number | null
    workoutTime: number | null
    groupTitle: string | null
}

interface TSliceState {
    user: User,
    isLogin: boolean
}

const initialState: TSliceState = {
    user: {
        uid: 0,
        email: '',
        name: null,
        age: null,
        sex: null,
        weight: null,
        height: null,
        workoutCount: null,
        workoutTime: null,
        groupTitle: null
    },
    isLogin: true,
}




const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        setUser: (state: TSliceState, action:PayloadAction<SetUserPayload>) => {
            state.user.name = action.payload.user.name
            state.user.age = action.payload.user.age
            state.user.sex = action.payload.user.sex
            state.user.weight = action.payload.user.weight
            state.user.height = action.payload.user.height
            state.user.workoutCount = action.payload.user.workoutCount
            state.user.workoutTime = action.payload.user.workoutTime
            state.user.groupTitle = action.payload.user.groupTitle
        },
        login: (state: TSliceState,) => {
            state.isLogin = true
        },
        logout: (state: TSliceState,) => {
            state.isLogin = false
        },
    }
})

export interface WorkoutInfo {
    workoutTime: number
    groupTitle: string
    workoutCount: number
}

export const userSelector = (state: TStore) => state.userReducer.user
export const workoutInfoSelector = (state: TStore): WorkoutInfo => ({
    workoutTime: state.userReducer.user.workoutTime,
    groupTitle: state.userReducer.user.groupTitle,
    workoutCount: state.userReducer.user.workoutCount
})
export const isLoginSelector = (state: TStore) => state.userReducer.isLogin


export const {
    setUser,
    login,
    logout
} = userSlice.actions


export const reducer = userSlice.reducer