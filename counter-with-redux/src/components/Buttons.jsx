import { useDispatch } from "react-redux";

const Buttons = () => {
    const dispatch = useDispatch()
    return <>
        <button type="button" class="btn btn-success add-remove-buttons" onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button type="button" class="btn btn-danger add-remove-buttons" onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
    </>
}

export default Buttons