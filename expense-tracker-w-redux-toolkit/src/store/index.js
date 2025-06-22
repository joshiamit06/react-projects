import {configureStore} from "@reduxjs/toolkit"
import expenseSlice from "./expense"


const expensesStore = configureStore({
  reducer: {
    expense: expenseSlice.reducer,
  },
});



export default expensesStore;