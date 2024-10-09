import styles from './InputApp.module.css';

function InputApp({displayValue}){
    return (
        <>
        <h2 className={styles.heading}>Calculator App</h2>
        <input type="text" className={styles.calInputBox} value={displayValue} />
        </>
    )
}

export default InputApp