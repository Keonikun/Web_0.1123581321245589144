import React from 'react'
import './desktopIcon.css'

const DesktopIcon = (props) => {
  const iconImage = props.iconImage
  const iconSubtitle = props.iconSubtitle
  const onClickFunction = props.onClickFunction
  
  return (
    <div className='desktop__icon' onDoubleClick={onClickFunction}>
      <img className='desktop__icon__image' src={iconImage} alt="" />
      <p className="desktop__icon__subtitle font__outline noselect">{iconSubtitle}</p>
    </div>
  )
}

export default DesktopIcon
