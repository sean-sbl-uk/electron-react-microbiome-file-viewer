import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {FileRecords} from '../utils/types'

interface RecordsSliceState {
    data: FileRecords[]
}

// const initialState = {data: []} as RecordsState

// const initialState = { a: [], b: []}

const initialState: RecordsSliceState = {
    data: [],
}

export const recordsSlice = createSlice({
    name: "records",
    initialState,
    reducers: {
        setRecords: (state, action: PayloadAction<FileRecords>) => {
            // state.records = {...state.records, action.payload}
            const {fileName} = action.payload
            if(!state.data.findIndex(fileRecords => fileRecords.fileName === fileName ? true : false)){
                state.data.push(action.payload)
            }
        }

    }
})

export const {setRecords} = recordsSlice.actions;

export default recordsSlice.reducer;
