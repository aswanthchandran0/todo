import React from 'react';
import './TaskBox.css';
import { useState } from 'react';
function TaskBox({ task, removeTask, index,updateEdit }) {
  const [isChecked, setIsChecked] = useState(false);
  const [editStatus,setEditStatus] = useState(false)
  const [isEdit,setisEdit] = useState()
  const [editText,setEditText] = useState(task.text)
  const handleEdit = ()=>{
        setEditStatus(!editStatus)
       
  }

  const finishEdit = () =>{
    console.log('reques reach inside finish Edit');
    setEditStatus(false)
    updateEdit(index, editText)
  }



  return (
    <div id='TaskBox'>
      <input
        className='show'
        style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
        value={editStatus ? editText : task.text}
        readOnly ={!editStatus}
        onChange={(e)=>setEditText(e.target.value)}
        onBlur={finishEdit}
      />
      <i onClick={handleEdit} className={`edit ${editStatus ? 'fa-solid fa-check':'fa-solid fa-pen-to-square'} `}></i>
      <input
      
        className='selection'
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        type="checkbox"
      />
      <i onClick={() => removeTask(index)} className="deleteTask fa-solid fa-xmark"></i>
    </div>
  );
}

export default TaskBox;
