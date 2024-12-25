import { useReducer } from "react";
import { createContext } from "react";

export const ExpenseTrackerContext = createContext();

const ExpenseReducer = (state, action) => {
  if (action.type === "ADD_EXPENSE") {
    const newExpenses = [
      ...state.expenses,
      {
        name: action.payload.name,
        amount: action.payload.amount,
        date: action.payload.date,
      },
    ];
    const totalExpenses = newExpenses.reduce(
      (sum, curr) => Number(sum) + Number(curr.amount),
      0
    );
    return { expenses: newExpenses, totalExpenses };
  } else if (action.type === "DELETE_EXPENSE") {
    const newExpenses = state.expenses.filter(
      (expense) => expense !== action.payload.name
    );
    const totalExpenses = newExpenses.reduce(
      (sum, curr) => Number(sum) + Number(curr.amount),
      0
    );
    return { expenses: newExpenses, totalExpenses };
  } else {
    return state;
  }
};

const ExpenseTrackerContextProvider = ({ children }) => {
  const initialState = { expenses: [], totalExpenses: 0 };
  const [state, dispachExpense] = useReducer(ExpenseReducer, initialState);

  function handleAddExpenses(name, amount, date) {
    const AddExpenseAction = {
      type: "ADD_EXPENSE",
      payload: {
        name: name,
        amount: amount,
        date: date,
      },
    };
    dispachExpense(AddExpenseAction);
  }

  const handleDeleteExpense = (expenseToDelete) => {
    const deleteExpenseAction = {
      type: "DELETE_EXPENSE",
      payload: {
        name: expenseToDelete,
      },
    };
    dispachExpense(deleteExpenseAction);
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        handleAddExpenses,
        expenses: state.expenses,
        totalExpenses: state.totalExpenses,
        handleDeleteExpense,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

export default ExpenseTrackerContextProvider;
