import styles from './ButtonsApp.module.css';


function ButtonsApp({onButtonClick}){
    let buttonList = ["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",]

    return (
        <>
        <div className={styles.buttonContainer}>
                {buttonList.map((val) => (<button type="button" onClick={() => onButtonClick(val)} className={styles.calcButton}>
                    {val}</button>))}
            
        </div>
        </>
    )
}

export default ButtonsApp