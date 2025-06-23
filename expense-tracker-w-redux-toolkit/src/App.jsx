import { useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import AddExpense from './components/AddExpense'
import ShowExpense from './components/ShowExpense'
  

function App() {

  return (
    <div className='container'>
      <Heading/>
      <AddExpense/>
      <ShowExpense/>
    </div>
  )
}

export default App