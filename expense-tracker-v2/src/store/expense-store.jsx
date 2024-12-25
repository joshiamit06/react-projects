import { createContext, useState } from "react";

export const ExpenseTrackerContext = createContext()

const ExpenseTrackerContextProvider = ({children}) => {
    const [expenses, setExpenses] = useState([]);
    const [totalExpenses, setTotalExpenses] = useState();
  
    let handleTotalExpenses = (newExpenseList) => {
      setTotalExpenses(() => {
        let totalSum = newExpenseList.reduce(
          (sum, curr) => Number(sum) + Number(curr.amount),
          0
        );
        console.log("totalsum", totalSum);
        return totalSum;
      });
    };
  
    function handleAddExpenses(name, amount, date) {
      setExpenses(() => {
        const newExpenseList = [
          ...expenses,
          { name: name, amount: amount, date: date },
        ];
        handleTotalExpenses(newExpenseList);
        return newExpenseList;
      });
    }
  
    const handleDeleteExpense = (expenseToDelete)=>{
      const newExpenseList = expenses.filter((expense) => expense !== expenseToDelete);
      setExpenses(newExpenseList);
      handleTotalExpenses(newExpenseList);
    }
  
return (
    <ExpenseTrackerContext.Provider value={{handleAddExpenses,expenses, totalExpenses, handleDeleteExpense}}>
        {children}
    </ExpenseTrackerContext.Provider>
)
}
export default ExpenseTrackerContextProvider