import React from 'react'
import './yesNo.css'
import '../../windows.css'
import ErrorIcon from '../../../../assets/images/error.png'

import TitleBar from '../../TitleBar.jsx'

const YesNo = (props) => {

  const exit = props.exit

  const title = 'User-Prompt'
  const message = 'This website is not safe. Continue?'

  return (
    <div className='yesNo window'>
      <TitleBar title={title} exit={exit} />
      <div className='yesNo__message__container'>
        <p className="yesNo__message noselect">{message}</p>
      </div>
      <div className='yesNo__options'>
        <div className="window__button focused error__button noselect" onClick={exit}><span>No</span></div>
        <div className="window__button focused error__button noselect" onClick={exit}><span>Yes</span></div>
      </div>
    </div>
  )
}

export default YesNo