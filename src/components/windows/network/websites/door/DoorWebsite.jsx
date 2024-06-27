import React from 'react'
import { useState } from 'react'
import '../website.css'
import './doorWebsite.css'

import DoorWebsiteOne from './DoorWebsiteOne.jsx'

const DoorWebsite = (props) => {
  
  const links = props.links

  return (
    <div className='website door__website'>
      <DoorWebsiteOne links={links} />
    </div>
  )
}

export default DoorWebsite
