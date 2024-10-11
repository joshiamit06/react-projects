import styles from './ListItem.module.css';

function ListItem({items,handleDeleteOps}){

    // const handleDelete = (e)=>{
    //     console.log(e ,"deleted");
    //     handleDeleteOps()
        
    // }

    return(
        <>
        <ul className="list-group">
        {items.map((toDoItem=>(<li className={styles.listItem}>{toDoItem}
            <button className={styles.deleteButton} onClick={()=>handleDeleteOps(toDoItem)}>Delete</button>
        </li>)))}
        
        </ul>
        </>
    )
}

export default ListItem