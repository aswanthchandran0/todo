import React, { useState } from 'react'
import './Theme.css'
function Theme({setThemeImage}) {
  const ThemeImages = ['catTheme.jpg','forest-3622519_640.jpg','dodge.jpeg','poppies-174276_1280.jpg']

  
 
  return (
    <div className='themeCard'>
      <div className="themeTitle">
      <h6>Theme</h6>
      </div>
       <div className="Themes">
       {

        ThemeImages.map((imageName,index)=>{
         return  <img key={index} src={`./Themes/${imageName}`} alt="Theme" onClick={()=>setThemeImage(imageName)} />
        })
       }
             </div>
      
      
    </div>
  )
}

export default Theme
