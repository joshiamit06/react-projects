import { useState } from 'react'
import ListItem from './components/ListItem'
import Header from './components/header';
import Display from './components/Display'
import styles from './App.module.css';

function App() {
  const [toDoItems, setToDoItems] = useState([])
  const addNewItem = (newItem)=>{
      const newToDoListItems = [...toDoItems,newItem]
      setToDoItems(newToDoListItems)
      
  }

  const handleDeleteOps = (itemToDelete)=>{
    const newTodoItems = toDoItems.filter((item) => item !== itemToDelete);
    setToDoItems(newTodoItems);
  }

  return (
    <div className={styles.centerWindow}>
      <div className={styles.todoContainer}>
        <Header/>
        <Display addNewItem={addNewItem}/>
        <ListItem items={toDoItems} handleDeleteOps={handleDeleteOps}/>
      </div>
    </div>
    
  )
}

export default App
