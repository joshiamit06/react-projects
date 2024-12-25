import styles from "./App.module.css";
import Heading from "./components/Heading";
import AddExpense from "./components/AddExpense";
import Expense from "./components/Expense";
import CalculateExpense from "./components/CalculateExpense";
import ExpenseTrackerContextProvider from "./store/expense-store";

function App() {

  return (
    <ExpenseTrackerContextProvider>
    <div className={styles.expenseContainer}>
      <Heading></Heading>
      <AddExpense></AddExpense>
      <Expense></Expense>
      <CalculateExpense></CalculateExpense>
    </div>
    </ExpenseTrackerContextProvider>
  );
}

export default App;
