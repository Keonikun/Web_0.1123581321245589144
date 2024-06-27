import React from 'react'
import { useState } from "react"
import "./terminal.css"

import TitleBar from '../TitleBar.jsx'

const Terminal = (props) => {

  const [windowPositionY, setWindowPositionY] = useState("0px")
  const [windowPositionX, setWindowPositionX] = useState("0px")
    
  const handleDrag = ( e ) =>
  {
    setWindowPositionY(String( e.clientY ) + "px")
    setWindowPositionX(String( e.clientX ) + "px")
    console.log(e.clientY, e.clientX);
  }

  return (
    <div className="terminal window" draggable onDrag={handleDrag} style={{left: {windowPositionY}, right: {windowPositionX}}}  >
      <TitleBar imagesArray={props.imagesArray} exit={props.exit} title="Terminal" />  
      <div className="terminal__viewport">
        <p className="terminal__output">
            C:\users\user&#62; Something that responds here
        </p>
        <div className='terminal__input__container'>
          <p className="terminal__input__prompt">
            C:\users\user&#62; &nbsp;
          </p>
          <input className="terminal__input" />
        </div>  
      </div>    
    </div>
  )
}

export default Terminal
