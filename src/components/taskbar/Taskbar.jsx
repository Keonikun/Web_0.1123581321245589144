import React from 'react'
import './taskbar.css'
import { useState } from 'react'

// Image Imports
import StartIcon from '../../assets/images/startIcon.png'

// Component Imports
import StartMenu from './StartMenu'

const Taskbar = () => {
  
  // ======= TIME ===========
  let time = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })
  const [ currentTime, setCurrentTime ] = useState( time )

  const updateTime = () =>
  {
    let time = new Date().toLocaleDateString([], { hour: '2-digit', minute: '2-digit' })
    setCurrentTime( time )
  }

  setInterval( updateTime, 60000 )

  // ========= Start Menu ========
  const [ startMenuOpened, setStartMenuOpened ] = useState(false)

  const openStartMenu = () =>
  {
    setStartMenuOpened(true)
  }

  const closeStartMenu = () =>
  {
    setStartMenuOpened(false)
  }

  return (
    <div className='taskbar'>

      <div className='taskbar__start' onClick={openStartMenu}>
        <img src={StartIcon} className='taskbar__start__icon'/>
        <p className='noselect'>Start</p>
      </div>

      <div className="taskbar__tray">
        <span className="taskbar__time noselect">{currentTime}</span>
      </div>

      { startMenuOpened ? <StartMenu exit={closeStartMenu} /> : null }
    </div>
  )
}

export default Taskbar
