import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import { useState } from 'react'

function AddItem(props) {
    const [input, setInput] = useState('')

    return (
      <div>
        <div className="AddItem">
          <form id="addToDo" onSubmit={handleSubmit}>
            <input type="text" id='userInput' placeholder="Add to do here!" onChange={saveInput}/>
            <button type="submit" className='addButton'>
                <FontAwesomeIcon icon={faCirclePlus} size="2xl" />
            </button>
          </form>
        </div>
      </div>

    );

    function saveInput(e){
        setInput(e.target.value)
    } 

    function handleSubmit(e){
        e.preventDefault()
        if (input !== null && input !== '')
        {
          props.addToDoItem(input)
        }
        else{
          alert("Please enter something!")
        }
        document.getElementById('addToDo').reset()
        setInput(null)
    }
  }
  
  export default AddItem;