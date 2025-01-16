import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Buttons = () => {
    const dispatch = useDispatch()
    return <>
        <button type="button" className="btn btn-success add-remove-buttons" onClick={()=>dispatch(counterActions.increment())}>+</button>
        <button type="button" className="btn btn-danger add-remove-buttons" onClick={()=>dispatch(counterActions.decrement())}>-</button>
    </>
}

export default Buttons