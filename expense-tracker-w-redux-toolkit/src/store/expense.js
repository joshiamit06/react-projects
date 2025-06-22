import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const expenseSlice = createSlice({
    name: 'expense',
    initialState: {list:[]},
    reducers:{
        addExpenses: (state,action)=>{
            state.list.push(action.payload)
        },
        deleteExpenses: (state,action)=>{
            state.list = state.list.filter((exp)=>(exp.id !== action.payload))
        },
        clearExpenses: (state)=>{
            state.list = []
        }
    }

})

export const expenseActions = expenseSlice.actions
export default expenseSlice;