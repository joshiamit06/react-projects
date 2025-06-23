import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {expenseActions} from '../store/expense'

function ShowExpense() {
  const expenses = useSelector((state)=>state.expense.list)
  const dispatch = useDispatch()

  return (
    <ul>
      {expenses.map((exp)=>(
        <li key={exp.id}>{exp.name}
        <button onClick={()=> dispatch(expenseActions.deleteExpenses(exp.id))}>Delete</button>
        </li>
        
        ))}
      
    </ul>
  )
}

export default ShowExpense