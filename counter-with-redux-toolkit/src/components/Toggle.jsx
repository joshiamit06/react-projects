import { useRef } from "react"
import { useDispatch } from "react-redux"
import { counterActions } from "../store/counter"

const Toggle = () => {
    const dispatch = useDispatch()
    const handleAddition = () => {
        dispatch(counterActions.add(inputRef.current.value))
        inputRef.current.value=""
    }

    const handleSubtraction = () => {
        dispatch(counterActions.substract(inputRef.current.value))
        inputRef.current.value=""
    }
    const inputRef = useRef()
    return <div className="input-group">
    <input type="text" className="form-control" placeholder="Enter a number" ref={inputRef}/>
    <button className="btn btn-primary" type="button" onClick={handleAddition}>Add</button>
    <button className="btn btn-danger" type="button" onClick={handleSubtraction}>Subtract</button>
  </div>
}

export default Toggle