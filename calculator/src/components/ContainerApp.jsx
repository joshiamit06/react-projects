import styles from './ContainerApp.module.css';
import InputApp from './InputApp';
import ButtonsApp from './ButtonsApp';
import { useState } from 'react';

function ContainerApp(){
    const [inputVal, setInputVal] = useState("")
    const [isEvaluated, setIsEvaluated] = useState(false);
    
    const onButtonClick = (val)=> {
        if (val==="C") {
            setInputVal("")
            setIsEvaluated(false);
        }else if (val==="=") {
            const newVal = eval(inputVal)
            setInputVal(newVal)
            setIsEvaluated(true);
        } else {
            if (isEvaluated){
                setInputVal(val);
                setIsEvaluated(false);
            }else {
                const newVal = inputVal + val;
                setInputVal(newVal);
            }
        }
    }
    return(
        <div className={styles.centerContainer}>
            <div className={styles.calContainer}>
                <InputApp displayValue={inputVal}/>
                <ButtonsApp onButtonClick={onButtonClick}/>
            </div>
      </div>
    )
}

export default ContainerApp