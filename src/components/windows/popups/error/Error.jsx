import React from 'react'
import './error.css'
import '../../windows.css'

import TitleBar from '../../TitleBar.jsx'

const Error = (props) => {

  const exit = props.exit
  const imagesArray = props.imagesArray

  props.soundsArray[0].play()


  const title = 'HD-ERROR WIN32-405630'
  const button = 'OK'
  const message = 'The program has encountered a critical error. Please contact your system administrator.'

  return (
    <div className='error window'>
      <TitleBar title={title} exit={exit} imagesArray={imagesArray} />
      <div className='error__message__container'>
        <img src={imagesArray[2]} className='error__message__icon' />
        <p className="error__message noselect">{message}</p>
        <div className="error__message__icon" />
      </div>
      <div className="window__button focused error__button noselect" onClick={exit}><span>{button}</span></div>
    </div>
  )
}

export default Error
