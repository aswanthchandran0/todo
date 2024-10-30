import React from 'react'
import './InputBox.css'
import { useState } from 'react'
import TaskBox from './TaskBox'
function InputBox(props) {
  const [toDo,setToDo] = useState('')
  const addTask = () =>{
    if(toDo.trim() !== ''){

      props.addToDo(toDo)
      setToDo('')
    }
  }

  return (
    <div id='inputBox'>
        
     <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder='Add a task'/>
     <i onClick={addTask} className="addTask fa-solid fa-plus"></i>
     
    </div>
  )
}

export default InputBox
