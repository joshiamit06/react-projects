import styles from "./Expense.module.css";
import { MdDelete } from "react-icons/md";


function Expense({ expenses, handleDeleteExpense }) {

  return (
    <>
      {expenses.length === 0 ? (
        <h2>"No expenses found. Add some!"</h2>
      ) : (
        <div className={styles.expenseList} key={expenses.name}>
          {expenses.map((expense) => (
            <div className={styles.expenseItem}>
              <span className={styles.expenseName}>{expense.name}</span>
              <span className={styles.expenseAmount}>{expense.amount}</span>
              <span className={styles.expenseDate}>{expense.date}</span>
              <button className={styles.deleteButton} onClick={()=>handleDeleteExpense(expense)}>
              <MdDelete />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Expense;
