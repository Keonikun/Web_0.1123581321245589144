import React from 'react'

import Door1 from '../../../../../assets/websiteImages/door/IMG_1597.jpg'
import Grate from '../../../../../assets/websiteImages/door/IMG_1642.jpg'
import Fan from '../../../../../assets/websiteImages/door/IMG_2567.jpg'

const DoorWebsiteOne = (props) => {

  const links = props.links

  return (
    <div>
      <br />
      <h1 className='door__website__title'>Clippings</h1>
      <br />
      <div className='door__website__content'>
        <img src={Door1} alt="" onClick={links[0]}/>
        <p className='door__website__wordstretch__one'>Hardly any time to</p>
        <img src={Fan} alt="" />
        <p className='door__website__wordstretch__two'>examine one's surroundings.</p>
        <img src={Grate} alt="" />
        <p>My feeble mind can't keep up...</p>
        <p>with such commotion.</p>
      </div>
    </div>
  )
}

export default DoorWebsiteOne
