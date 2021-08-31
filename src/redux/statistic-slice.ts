import {PayloadAction} from "@reduxjs/toolkit";
import {TStore} from "./store";

const {createSlice} = require("@reduxjs/toolkit");


export interface SetStatisticDataPayload {
    statisticData: IStatisticData
}

export interface IStatisticData {
    date: number
    weight: number
}

export interface TSliceState {
    statisticData: Array<IStatisticData> | null
}

const initialState: TSliceState = {
    statisticData: null
}


const statisticSlice = createSlice({
    name: 'statisticSlice',
    initialState: initialState,
    reducers: {
        setData: (state: TSliceState, action:PayloadAction<SetStatisticDataPayload>) => {
            state.statisticData = [action.payload.statisticData]
        },

        addData: (state: TSliceState, action:PayloadAction<SetStatisticDataPayload>) => {
            if (state.statisticData == null) {
                state.statisticData = [action.payload.statisticData]
                return
            }

            state.statisticData.push(action.payload.statisticData)
        }


    }
})


export const dataSelector = (state: TStore) : Array<IStatisticData> => state.statisticReducer.statisticData
//@ts-ignore
export const weightsSelector = (state: TStore) : Array<number> => state.statisticReducer.statisticData.map(i => i.weight)

export const {
    setData,
    addData
} = statisticSlice.actions


export const reducer = statisticSlice.reducer