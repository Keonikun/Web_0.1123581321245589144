import React from 'react'
import { useState } from 'react'

import './desktop.css'

// Images
import RecycleIcon from '../../assets/images/recycleIcon.png'
import DiscIcon from '../../assets/images/discIcon.png'
import PcIcon from '../../assets/images/pcIcon.png'
import FolderIcon from '../../assets/images/folderIcon.png'
import NetworkIcon from '../../assets/images/networkIcon.png'
import NotepadIcon from '../../assets/images/notepadIcon.png'
import DropdownIcon from '../../assets/images/dropdownIcon.png'
import ExitIcon from '../../assets/images/exitIcon.png'
import ErrorIcon from '../../assets/images/error.png'
import Vignette from '../../assets/images/vignette2.png'

// Audio
import BlankNoise from '../../assets/sounds/hum.mp3'
import ErrorSound from '../../assets/sounds/error.mp3'
import StartSound from '../../assets/sounds/start2.mp3'
import ChimesSound from '../../assets/sounds/chimes2.mp3'

// Components
import BootSequence from '../bootSequence/BootSequence.jsx'
import Taskbar from '../taskbar/Taskbar.jsx'
import DesktopIcon from '../desktopIcon/DesktopIcon.jsx'
import Error from '../windows/popups/error/Error.jsx'
import Network from '../windows/network/Network.jsx'
import YesNo from '../windows/popups/yesNo/YesNo.jsx'
import Terminal from '../windows/terminal/Terminal.jsx'
import InstallationTool from '../windows/installationTool/InstallationTool.jsx'

const Desktop = () => {

  const options = {
    Boot_Sequence: true,
    Full_Screen_On_Start: true,
    Background_Hum: true,
    Filter: true,
  }

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

  // Boot Sequence
  const [ bootSequenceVisible, setBootSequenceVisible ] = useState(true)
  const exitBootSequence = () => {setBootSequenceVisible(false)}

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

  const [ installationOpened, setInstallationOpened ] = useState(true)
  const openInstallation = () => { setInstallationOpened(true); startSound.play() }
  const closeInstallation = () => { setInstallationOpened(false) }

  // Functions
  const [ firstInteraction, setFirstInteraction ] = useState(true)
  const firstInteractionTrigger = () =>
  {
    if(firstInteraction && options.Full_Screen_On_Start)
    {
      if(options.Background_Hum)
        {
          blankNoise.play()
        }
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
    <div className='desktop__backdrop noselect' >
      <div className="desktop__background noselect" onClick={firstInteractionTrigger}>
        { options.Filter ? <div className="static__overlay noselect" /> : null }
        { options.Filter ? <img className="vignette__overlay noselect" src={Vignette} /> : null }
        { bootSequenceVisible && options.Boot_Sequence ? <BootSequence exitBootSequence={exitBootSequence} /> : null }

        <div className="desktop__container">

          {/* ============== Icons ============ */}
          <DesktopIcon iconImage={RecycleIcon} iconSubtitle={"Trash"} onClickFunction={openErrorMessage} />
          <DesktopIcon iconImage={NetworkIcon} iconSubtitle={"Internet"} onClickFunction={openNetwork} />
          <DesktopIcon iconImage={PcIcon} iconSubtitle={"This_PC"} onClickFunction={openErrorMessage} />
          <DesktopIcon iconImage={DiscIcon} iconSubtitle={"soul_driver_..."} onClickFunction={openInstallation} />
          <DesktopIcon iconImage={FolderIcon} iconSubtitle={"Documents"} onClickFunction={openErrorMessage} />
          <DesktopIcon iconImage={NotepadIcon} iconSubtitle={"Terminal"} onClickFunction={openTerminal} />

          {/* ============= Windows ============ */}
          { installationOpened ? <InstallationTool imagesArray={imagesArray} exit={closeInstallation} /> : null }
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
