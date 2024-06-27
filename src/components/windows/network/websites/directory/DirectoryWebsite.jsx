import React from 'react'
import './directoryWebsite.css'

const DirectoryWebsite = (props) => {

  const links = props.links

  return (
    <div className='website directory__website'>
      <h1>INDEX of ./____</h1>
      <br />
      <div className='directory__website__grid__title'>
        <p>Name</p>
        <p>Last Modified</p>
        <p>Size</p>
        <p>Description</p>
      </div>
      <hr />
      <div className='directory__website__grid'>

        <p>Parent Directory</p>
        <div />
        <div />
        <div />

        <p onClick={links[1]}>Adendum_1.pdf</p>
        <p>Sept-11-1998&nbsp;&nbsp;&nbsp;22:38</p>
        <p>12kb</p>
        <p>A rough copy of something to come and something</p>
      
        <p onClick={props.openError}>/hidden_network</p>
        <p>Feb-10-2000&nbsp;&nbsp;&nbsp;07:08</p>
        <p>-</p>
        <p></p>
      </div>
    </div>
  )
}

export default DirectoryWebsite
