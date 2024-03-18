import AddItem from './AddItem'
import ViewItems from './ViewItems';
import './styles.css'
import { useState } from 'react';

function ToDoList() {
    const [toDoItems, setToDoItems] = useState([])
    console.log(toDoItems)

    //function addToDoItem(item) {
    //    const toDoItem = {name: item, editmode: false, completed: false}
    //    setToDoItems([...toDoItems, toDoItem])
    //}

    function addToDoItem(item) {
        const toDoItem = {name: item, editmode: false, completed: false}
    //    if (toDoItems.includes(item)){
    //        alert("You've already added this!")
    //    }
    //    else{
    //        setToDoItems([...toDoItems, toDoItem])
    //    }
        if (toDoItems.length > 0){
            for (var i=0; i<toDoItems.length; i++){
                if(toDoItems[i].name === item){
                    alert("You've already added this!")
                }
                else{
                    setToDoItems([...toDoItems,toDoItem])
                }
            }
        }
        else{
            setToDoItems([...toDoItems,toDoItem])
        }

    }

    function deleteItem(index){
        var updatedToDoItems = [...toDoItems]
        updatedToDoItems.splice(index,1)
        setToDoItems(updatedToDoItems)
    }

    function editItem(index, userInput){
        var updatedToDo = [...toDoItems]
        updatedToDo[index].name = userInput
        setToDoItems(updatedToDo)
    }


    return (
    <>
        <h1>To Do List</h1>
        <div className="ToDoList">
            <AddItem addToDoItem={addToDoItem} />
            {toDoItems.map((toDoItem, index) => (<ViewItems toDoItem={toDoItem} index={index} deleteItem={deleteItem} editItem={editItem}/>))}
        </div>
    </>

  );
}

export default ToDoList;
