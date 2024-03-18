import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { useState } from 'react'

function ViewItems(props) {
    const item = props.toDoItem
    const [itemEditMode, setEditMode] = useState(item.editmode)
    const [userInput, setUserInput] = useState('')

    function deleteItem()
    {
        props.deleteItem(props.index)
    }

    //function editOn(){
    //    props.editItem(props.index)
    //}

    function editOnOff(){
        //if (item.editmode === false){
        //    item.editmode = true
       // }
        //else{
        //    item.editmode = false
        //}
        item.editmode = !item.editmode
        setEditMode(item.editmode)
        console.log(item,item.editmode)
    }

    function updateItem(){
        item.editmode = false
        props.editItem(props.index, userInput)
        setEditMode(item.editmode)
    }

    function saveInput(e){
        setUserInput(e.target.value)
    }

    function editItem(){
        console.log("editmode is",item.editmode)
        if (itemEditMode){
            return(
                <>
                    <input type="text" placeholder='Enter a to do here' onChange={saveInput}></input>
                    <button className="updateItem" onClick={updateItem}><FontAwesomeIcon icon={faCircleCheck} size="2xl"/></button>
                </>
    
            )
        }
        
        else{
            return(
                <>
                    <li>
                        {console.log("edit",item.editmode)}
                        {item.name}
                        <button className='editButton' onClick={editOnOff}><FontAwesomeIcon icon={faPenToSquare} size="2xl"/></button>
                        <button className='trashButton' onClick={deleteItem}><FontAwesomeIcon icon={faTrashCan} size="2xl" /></button>
                    </li>
        
                </>
        
            )
        }
    }

    return (
        <div>{editItem()}</div>
    )


}

export default ViewItems;