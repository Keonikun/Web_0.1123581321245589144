import React from 'react'

import DoorImage from '../../../assets/websiteImages/door/IMG_1597.jpg'

const InstallationToolStep1 = () => {
  return (
    <>
      <p className='installation__header'>Welcome to the SOUL DRIVER™ Internet Setup Tool</p>
      <hr className='installation__header__line'/>
      <div className='installation__split'>
        <div className='window__inset'>
            <img src={DoorImage} alt="" />
        </div>
        <div className='installation__instructions'>
            The SOUL DRIVER™ Internet setup tool was created to connect human beings. Use this tool to get started!
        </div>
      </div>
    </>
  )
}

export default InstallationToolStep1
