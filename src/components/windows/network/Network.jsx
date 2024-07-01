import React from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import './network.css'

import TitleBar from '../TitleBar'

import DirectoryWebsite from './websites/directory/DirectoryWebsite.jsx'
import DoorWebsite from './websites/door/DoorWebsite.jsx'
import FourOhFourWebsite from './websites/fourOhFour/FourOhFourWebsite.jsx'
import CaptchaWebsite from './websites/captcha/CaptchaWebsite.jsx'
import WikiWebsite from './websites/wiki/WikiWebsite.jsx'

const Network = (props) => {

  const [ URL, setURL ] = useState(props.URL)
  const exit = props.exit
  const openError = props.openError
  const imagesArray = props.imagesArray

  // Website Navigation Animation
  const [ firstOpen, setFirstOpen ] = useState(true)
  const [ loadingBar, setLoadingBar ] = useState('network__address__loading__bar')
  const [ networkOverlay, setNetworkOverlay ] = useState(false)

  const animateLoadingBar = () =>
  {
    setNetworkOverlay(true)
    setLoadingBar('network__address__loading__bar')
    setLoadingBar('network__address__loading__bar beginLoading')
    gsap.delayedCall(1, () =>
    {
      console.log('finished loading')
      setLoadingBar('network__address__loading__bar finishLoading')
      setLoadingBar('network__address__loading__bar reset')
      setNetworkOverlay(false)
    })
  }

  if(firstOpen)
  {
    animateLoadingBar()
    setFirstOpen(false)
  }

  const exitNetwork = () =>
  {
    setFirstOpen(true)
    exit()
  }

  // DIRECTORY WEBSITE----------------------------------
  const [ directoryWebsite, setDirectoryWebsite ] = useState(false)
  const openDirectoryWebsite = () => 
  { 
    animateLoadingBar()
    setDirectoryWebsite(true) 
    setDoorWebsite(false)
    setFourOhFourWebsite(false)
    setURL('file C:/Program Files/EasyLink/directory.easylink.html')
  }
  const closeDirectoryWebsite = () => { setDirectoryWebsite(false) }

  // DOOR WEBSITE---------------------------------------
  const [ doorWebsite, setDoorWebsite ] = useState(false)
  const openDoorWebsite = () => 
  { 
    animateLoadingBar()
    setDoorWebsite(true) 
    setDirectoryWebsite(false)
    setFourOhFourWebsite(false)
    setURL('HTTP:://www.somewhereElse.door')
  }
  const closeDoorWebsite = () => { setDoorWebsite(false) }

  // 404 WEBSITE-----------------------------------------
  const [ fourOhFourWebsite, setFourOhFourWebsite ] = useState(true)
  const openFourOhFourWebsite = () => 
  { 
    animateLoadingBar()
    setFourOhFourWebsite(true)
    setDoorWebsite(false)
    setDirectoryWebsite(false)
    setURL('HTTP:://www.archive011.com/erudite.html')
  }
  const closeFourOhFourWebsite = () => { setFourOhFourWebsite(false) }

  // CAPTCHA WEBSITE -----------------------------------------

  const [ captchaWebsite, setCaptchaWebsite ] = useState(false)
  const openCaptchaWebsite = () => 
  { 
    animateLoadingBar()
    setCaptchaWebsite(true)
    setDoorWebsite(false)
    setDirectoryWebsite(false)
    setURL('HTTP:://www.personalStorage.co/ICaughtYou')
  }
  const closeCaptchaWebsite = () => { setCaptchaWebsite(false) }

  // WIKI WEBSITE -----------------------------------------

  const [ wikiWebsite, setWikiWebsite ] = useState(false)
  const openWikiWebsite = () => 
  { 
    animateLoadingBar()
    setWikiWebsite(true)
    setDoorWebsite(false)
    setDirectoryWebsite(false)
    setURL('HTTP:://www.personalStorage.co/ICaughtYou')
  }
  const closeWikiWebsite = () => { setWikiWebsite(false) }

  const links = [
    openDirectoryWebsite,
    openFourOhFourWebsite,
    openDoorWebsite,
    openCaptchaWebsite,
    openWikiWebsite,
  ]

  return (
    <div className='network window'>
      <TitleBar title={'Network_Explorer.exe'} imagesArray={imagesArray} exit={exitNetwork} />
      <div className="network__address__bar">
        <p className='network__address__prompt noselect'>Address:</p>
        <div className='network__address__URL__container'>
          <div className={loadingBar} />
          <input type="text" name="" className='network__address__URL' defaultValue={URL}/>
        </div>
        <img className="window__title__bar__button" src={imagesArray[0]} />
      </div>

      <div className="network__display">
        { networkOverlay ? <div className="network__loading__overlay" /> : null } 
        { directoryWebsite ? <DirectoryWebsite links={links} openError={openError} /> : null }
        { doorWebsite ? <DoorWebsite links={links} /> : null }
        { fourOhFourWebsite ? <FourOhFourWebsite links={links} /> : null }
        { captchaWebsite ? <CaptchaWebsite links={links} animateLoading={animateLoadingBar} /> : null }
        { wikiWebsite ? <WikiWebsite links={links} animateLoading={animateLoadingBar} /> : null }
      </div>
    </div>
  )
}

export default Network
