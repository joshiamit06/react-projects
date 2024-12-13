import styles from './BuyItem.module.css';
import { useRef, useState } from 'react'

function BuyItem({addNewOrder}) {

    const buyItemElement = useRef();

    function buyNewItem(e){
        e.preventDefault();
        const newOrder = buyItemElement.current.value
        buyItemElement.current.value = ""
        addNewOrder(newOrder)
    }
  return (
    <div className={styles.inputGroup}>
      <input
        type="text"
        className={styles.inputField}
        placeholder="Add item to order"
        aria-label="Add item to order"
        aria-describedby="button-addon2"
        ref={buyItemElement}
      />
      <button
      onClick={buyNewItem}
        className={styles.buyButton}
        type="button"
        id="button-addon2"
      >
        Buy
      </button>
    </div>
  );
}
export default BuyItem;
