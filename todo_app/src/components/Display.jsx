import { useRef, useState } from 'react'
import styles from './Display.module.css'

function Display({addNewItem}){

    const toDoRefElement = useRef();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const toDoName = toDoRefElement.current.value;
        toDoRefElement.current.value = "";
        addNewItem(toDoName);
    }

    return(
        <div className={styles.inputContainer}>
            <form onSubmit={handleOnSubmit}>
                <input type="text" className={styles.inputField} id="" ref={toDoRefElement} />
                <button className={styles.submitbutton}>Submit</button>
            </form>
        </div>

    )
}

export default Display