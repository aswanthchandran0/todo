import React, { useEffect } from 'react'
import InputBox from './InputBox'
import TaskBox from './TaskBox'
import { useState } from 'react'
import './App.css'
import Theme from './Theme'
function App() {
  const [toDos, setToDos] = useState(() => {
    const storedToDos = localStorage.getItem('toDos');
    return storedToDos ? JSON.parse(storedToDos) : [];
  });
  const [isThemeVisible,setIsThemeVisible] = useState(false)
  const [ThemeImage,setThemeImage] =  useState(localStorage.getItem('Theme')||'')
  const addToDo =(toDo)=>{ 
    const isDuplicate = toDos.some(task => task.text.toLowerCase() === toDo.toLowerCase())
      if(!isDuplicate){
        setToDos([...toDos,{id:Date.now(),text:toDo,status:false,isEdit:false}])
      }
  }

 useEffect(()=>{
  localStorage.setItem('Theme',ThemeImage)

 },[ThemeImage])

 useEffect(()=>{
  localStorage.setItem('toDos',JSON.stringify(toDos))
 },[toDos])


  const removeTask = (index)=>{
    const newTask = [...toDos]
    newTask.splice(index,1)
    setToDos(newTask)

}

const updateEdit = (index,newText) =>{
  console.log('reques reaching in update edit');
  const isDuplicate = toDos.some((task,i)=> i !== index && task.text.toLowerCase()== newText.toLowerCase())
  if(!isDuplicate){

    const updatedTask = [...toDos]
    updatedTask[index].text = newText
    console.log('newtext',newText);
    setToDos(updatedTask)
  }
}



const currentDate = new Date()
const currentMonthIndex = currentDate.getMonth()
const monthNames = [
"January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
]
 const currentMonth = monthNames[currentMonthIndex]
 const currentDayIndex = currentDate.getDay()
 const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 const currentDay = dayNames[currentDayIndex]
 const currentDayNumber = currentDate.getDate();
 const date = `${currentDay}, ${currentDayNumber} ${currentMonth}`

  return (
    <div className='app' >
      <div className='container  '>
          <div className="row ">
            <div className="nav col-2">
  
            </div>
            <div className="main col">
              <div id='card' style={{backgroundImage: `URL(./Themes/${ThemeImage})`}}> 
              <div className='header'>
                <div className="row">
                  <div className="col">
                  <h3>My Day</h3>
              <h6>{date}</h6>
                  </div>
                  <div className="col">
                  <i onClick={()=>setIsThemeVisible(!isThemeVisible)} class="themeSelector fa-solid fa-ellipsis"></i>
           {
            isThemeVisible && (
              <div className="Theme">
              <Theme setThemeImage={setThemeImage}/>
              </div>
            )
           }       
            {/* <div className="EditDiv">
            <Edit/>
            </div> */}
          

                  </div>
                </div>
              
              
              </div>
              
                <div className="taskArea">
                {
                  toDos.map((task,index)=>{
                  return  <TaskBox task={task} removeTask = {removeTask} index = {index} updateEdit={updateEdit} />
                  })
                }
                </div>
                
                <div className="input">
                <InputBox addToDo = {addToDo}/>
                </div>      
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App

