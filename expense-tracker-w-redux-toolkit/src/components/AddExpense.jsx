import React, { useRef } from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {expenseActions} from '../store/expense'

function AddExpense() {
    const dispatch = useDispatch()

    const nameRef = useRef()
    const amtRef = useRef()
    const dateRef = useRef()

    const handleExpenseSubmit = (e) => {
      e.preventDefault();

      const expense = {
        id: nanoid(),
        name: nameRef.current.value,
        amount: Number(amtRef.current.value),
        date: dateRef.current.value
      }

      dispatch(expenseActions.addExpenses(expense))
      nameRef.current.value = ""
      amtRef.current.value = ""
      dateRef.current.value = ""


    }
  return (
    <form onSubmit={handleExpenseSubmit}>
      <input type="text" ref={nameRef} placeholder='Expense Name' required/>
      <input type="text" ref={amtRef} placeholder='Amount' required/>
      <input type="date" ref={dateRef} placeholder='Date' required/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddExpense