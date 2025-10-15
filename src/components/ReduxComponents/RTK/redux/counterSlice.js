import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        incNumber:(state)=>{
            return state += 1;
        },
        decNumber:(state)=>{
            return state -= 1;
        }
    }

})

export const {incNumber, decNumber} = counterSlice.actions

export default counterSlice.reducer;