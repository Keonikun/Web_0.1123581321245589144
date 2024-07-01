import React from 'react'
import './installationTool.css'

import TitleBar from '../TitleBar'

import InstallationToolStep1 from './InstallationToolStep1.jsx'

const InstallationTool = (props) => {

  return (
    <div className='window installation__tool'>
      <TitleBar title={"Soul Driver Installation Tool x16"} exit={props.exit} imagesArray={props.imagesArray} />
        <div className="installation__tool__contents">
          <InstallationToolStep1 />
        </div>
        <div className="installation__tool__buttons">
            <button className="installation__tool__backward window__button">Back</button>
            <button className="installation__tool__forward window__button">Next</button>
        </div>
    </div>
  )
}

export default InstallationTool
