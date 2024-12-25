import { useContext } from 'react'
import styles from './CalculateExpense.module.css'
import { ExpenseTrackerContext } from '../store/expense-store'

function CalculateExpense(){
    const {totalExpenses} = useContext(ExpenseTrackerContext)
    return (
    <div className={styles.calculateExpense}>
        <h2>Total : {totalExpenses}</h2>
    </div>
    )
}

export default CalculateExpense