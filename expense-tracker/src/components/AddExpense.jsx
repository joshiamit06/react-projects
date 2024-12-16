import styles from './AddExpense.module.css';
import { useState } from 'react';

function AddExpense({ handleAddExpenses }) {
  const [formValues, setFormValues] = useState({
    expenseName: '',
    expenseAmount: '',
    expenseDate: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  function getAddExpense(e) {
    e.preventDefault();
    const { expenseName, expenseAmount, expenseDate } = formValues;

    if (!expenseName || !expenseAmount || !expenseDate) {
      alert('All fields are required!');
      return;
    }

    handleAddExpenses(expenseName, expenseAmount, expenseDate);
    setFormValues({
      expenseName: '',
      expenseAmount: '',
      expenseDate: '',
    });
  }

  return (
    <div className={styles.addExpenseRow}>
      <form onSubmit={getAddExpense}>
        <input
          type="text"
          name="expenseName"
          placeholder="Expense Name"
          className={styles.expenseInput}
          value={formValues.expenseName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="expenseAmount"
          placeholder="Amount"
          min="0"
          className={styles.expenseInputAmount}
          value={formValues.expenseAmount}
          onChange={handleChange}
        />
        <input
          type="date"
          name="expenseDate"
          className={styles.expenseInputDate}
          value={formValues.expenseDate}
          onChange={handleChange}
        />
        <button className={styles.expenseInputButton}>Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
