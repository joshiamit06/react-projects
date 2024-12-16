import { useState } from "react";
import styles from "./App.module.css";
import Heading from "./components/Heading";
import AddExpense from "./components/AddExpense";
import Expense from "./components/Expense";
import CalculateExpense from "./components/CalculateExpense";

function App() {
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
    <div className={styles.expenseContainer}>
      <Heading></Heading>
      <AddExpense handleAddExpenses={handleAddExpenses}></AddExpense>
      <Expense expenses={expenses} handleDeleteExpense={handleDeleteExpense}></Expense>
      <CalculateExpense sum={totalExpenses}></CalculateExpense>
    </div>
  );
}

export default App;
