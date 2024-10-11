import { useState } from 'react'
import styles from './Display.module.css'

function Display({addNewItem}){
    const [toDoName, setToDoName] = useState()

    const handleNameChange = (e) => {
        setToDoName(e.target.value)
    }
    const handleOnSubmit = () => {
        addNewItem(toDoName)
        setToDoName("")
    }

    return(
        <div className={styles.inputContainer}>
            <input type="text" className={styles.inputField} id="" value={toDoName} onChange={handleNameChange} />
            <button className={styles.submitbutton} onClick={handleOnSubmit}>Submit</button>
        </div>

    )
}

export default Display