import styles from "./ListItems.module.css";

function ListItems({itemList}) {

  return (
    <div>
      <ul className={`list-group ${styles.listContainer}`}>
        {itemList.map((item) => (
          <li key={item} className={`list-group-item ${styles.listItem}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
