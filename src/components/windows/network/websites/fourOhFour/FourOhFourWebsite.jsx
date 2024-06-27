import React from 'react'
import './fourOhFourWebsite.css'

const FourOhFourWebsite = (props) => {

  const links = props.links

  return (
    <div className='website fourohfour__website'>
        <br />
      <h1>404 NOT FOUND</h1>
      <br />
      <p>The page you have requested can <br />not be found on this server.</p>
        <br />
        <hr />
        <br />
        <p></p>
        <a href="#" onClick={links[2]}>Use the troubleshooter to diagnose this issue.</a>
    </div>
  )
}

export default FourOhFourWebsite
