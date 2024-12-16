import styles from './CalculateExpense.module.css'

function CalculateExpense({sum}){
    return (
    <div className={styles.calculateExpense}>
        <h2>Total : {sum}</h2>
    </div>
    )
}

export default CalculateExpense