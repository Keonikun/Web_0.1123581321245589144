import React from 'react'
import { useState } from 'react'
import gsap from 'gsap'

import './desktop.css'

import NetworkIcon from '../../assets/images/networkIcon.png'
import NotepadIcon from '../../assets/images/notepadIcon.png'
import DropdownIcon from '../../assets/images/dropdownIcon.png'
import ExitIcon from '../../assets/images/exitIcon.png'
import ErrorIcon from '../../assets/images/error.png'

import BlankNoise from '../../assets/sounds/blank_noise.wav'
import ErrorSound from '../../assets/sounds/error.mp3'
import StartSound from '../../assets/sounds/start2.mp3'
import ChimesSound from '../../assets/sounds/chimes2.mp3'

import Taskbar from '../taskbar/Taskbar.jsx'
import DesktopIcon from '../desktopIcon/DesktopIcon.jsx'
import Error from '../windows/popups/error/Error.jsx'
import Network from '../windows/network/Network.jsx'
import YesNo from '../windows/popups/yesNo/YesNo.jsx'
import Terminal from '../windows/terminal/Terminal.jsx'

const Desktop = () => {
  // Pre-load Audio Assets
  const blankNoise = new Audio(BlankNoise)
  blankNoise.loop = true
  const errorSound = new Audio(ErrorSound)
  const startSound = new Audio(StartSound)
  const soundsArray = [
    errorSound,
    startSound,
  ]

  // Pre-load Image Assets
  const imagesArray = [
    DropdownIcon,
    ExitIcon,
    ErrorIcon
  ]

  // Pop-ups
  const [ errorMessageOpened, setErrorMessageOpened ] = useState(false)
  const openErrorMessage = () => { setErrorMessageOpened(true) }
  const closeErrorMessage = () => { setErrorMessageOpened(false) }

  const [ yesNoOpened, setYesNoOpened ] = useState(false)
  const openYesNo = () => { setYesNoOpened(true) }
  const closeYesNo = () => { setYesNoOpened(false) }

  // Applications
  const [ networkOpened, setNetworkOpened ] = useState(false)
  const openNetwork = () => { setNetworkOpened(true); startSound.play() }
  const closeNetwork = () => { setNetworkOpened(false) }

  const [ terminalOpened, setTerminalOpened ] = useState(false)
  const openTerminal = () => { setTerminalOpened(true); startSound.play() }
  const closeTerminal = () => { setTerminalOpened(false) }

  // Functions
  const [ firstInteraction, setFirstInteraction ] = useState(true)
  const firstInteractionTrigger = () =>
  {
    if(firstInteraction)
    {
      blankNoise.play()
      requestFullScreen()
      setFirstInteraction(false)
    }
  }

  const requestFullScreen = () =>
  {
    const requestMethod = document.body.requestFullscreen

    if(requestMethod)
    {
      requestMethod.call(document.body)
    }
    else if(typeof window.ActiveXObject !== "undefined")
    {
      const wscript = new ActiveXObject("WScript.Shell")
      if(wscript !== null)
      {
        wscript.SendKeys("{F11}")
      }
    }
  }

  return (
    <div className='desktop__backdrop' >
      <div className="custom__cursor">
        
      </div>
      <div className="desktop__background" onClick={firstInteractionTrigger}>
        <div className="desktop__container">

          {/* ============== Icons ============ */}
          <DesktopIcon iconImage={NetworkIcon} iconSubtitle={"Internet"} onClickFunction={openNetwork} />
          <DesktopIcon iconImage={NotepadIcon} iconSubtitle={"Notepad"} onClickFunction={openErrorMessage} />
          <DesktopIcon iconImage={NotepadIcon} iconSubtitle={"Terminal"} onClickFunction={openTerminal} />

          {/* ============= Windows ============ */}
          { networkOpened ? <Network URL={' file C:/Program Files/Plus/home.html'} exit={closeNetwork} imagesArray={imagesArray} openError={openErrorMessage} /> : null }
          { terminalOpened ? <Terminal exit={closeTerminal} imagesArray={imagesArray}/> : null }
          {/* ============= Pop-ups =========== */}
          { errorMessageOpened ? <Error exit={closeErrorMessage} soundsArray={soundsArray} imagesArray={imagesArray} /> : null }
          { yesNoOpened ? < YesNo exit={closeYesNo} soundsArray={soundsArray} imagesArray={imagesArray} /> : null }
          
        </div>
        <Taskbar />
      </div>
    </div>
  )
}

export default Desktop
