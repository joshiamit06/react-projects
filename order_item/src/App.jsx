import Heading from "./components/Heading"
import styles from './App.module.css';
import BuyItem from "./components/BuyItem";
import ListItems from "./components/ListItems";
import { useState } from "react";
function App() {
  const [itemList, setItemList] = useState([])
  
  function addNewOrder(newOrder){
    setItemList((curr_val)=>{
      const newOrderList = [...curr_val,newOrder]
      return newOrderList
    })
  }

  return (
    <div className={styles.centerWindow}>
      <div className={styles.buttonContainer}>
        <Heading></Heading>
        <BuyItem addNewOrder={addNewOrder}></BuyItem>
        <ListItems itemList={itemList}></ListItems>
      </div>
    </div>
  )
}

export default App
