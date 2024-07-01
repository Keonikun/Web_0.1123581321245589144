import React from 'react'
import { useState } from 'react'
import gsap from 'gsap'
import './bootSequence.css'

import StartIcon from '../../assets/images/startIcon.png'

import BootAudio from '../../assets/sounds/bootUp.mp3'  

const BootSequence = (props) => {

    const exitBootSequence = props.exitBootSequence
    const BootSound = new Audio(BootAudio)

    const [ bootSequenceStarted, setBootSequenceStarted ] = useState(false)
    const [ bootBackground, setBootBackground ] = useState('boot__sequence intro')
    const [ bootOverlay, setBootOverlay] = useState(false)
    const [ bootOverlayBackground, setBootOverlayBackground] = useState("boot__overlay")
    const [ sequenceOne, setSequenceOne ] = useState(false)
    const [ sequenceOneProgress, setSequenceOneProgress ] = useState(0)
    const [ sequenceTwo, setSequenceTwo ] = useState(false)
    const [ loadingMessage, setLoadingMessage ] = useState('Getting the System Ready...')
    const [ loadingBarProgress, setLoadingBarProgress ] = useState(0)

    // Animation
    const bootAnimation = () =>
    {
        BootSound.play()
        setBootSequenceStarted(true)
        gsap.delayedCall(0.2, () => { setBootOverlay(true)})
        gsap.delayedCall(0.25, () => { setBootBackground("boot__sequence one")})
        gsap.delayedCall(0.5, () => { setBootOverlayBackground("boot__overlay one")})
        gsap.delayedCall(0.75, () => { setBootOverlayBackground("boot__overlay two")})
        gsap.delayedCall(1, () => { setBootOverlayBackground("boot__overlay three")})
        gsap.delayedCall(1, () => { setBootOverlay(false)})
        gsap.delayedCall(1, () => { setSequenceOne(true)})
        gsap.delayedCall(2, () => { setSequenceOneProgress(1)})
        gsap.delayedCall(5, () => { setSequenceOneProgress(2)})
        gsap.delayedCall(6, () => { setSequenceOneProgress(3)})
        gsap.delayedCall(7, () => { setSequenceOneProgress(4)})
        gsap.delayedCall(8, () => { setSequenceOneProgress(5)})
        gsap.delayedCall(8.1, () => { setSequenceOneProgress(6)})
        gsap.delayedCall(13, () => { setBootOverlay(true)})
        gsap.delayedCall(13.1, () => { setBootOverlayBackground("boot__overlay three")})
        gsap.delayedCall(13.25, () => { setBootOverlayBackground("boot__overlay two")})
        gsap.delayedCall(13.5, () => { setBootOverlayBackground("boot__overlay one")})
        gsap.delayedCall(13.75, () => { setBootOverlayBackground("boot__overlay")})
        gsap.delayedCall(14, () => { setBootBackground("boot__sequence two")})
        gsap.delayedCall(14, () => { setBootOverlay(false)})
        gsap.delayedCall(14, () => { setSequenceOne(false)})
        gsap.delayedCall(14, () => { setSequenceTwo(true)})
        gsap.delayedCall(15, () => { setLoadingBarProgress(1)})
        gsap.delayedCall(18, () => { setLoadingBarProgress(2)})
        gsap.delayedCall(18.2, () => { setLoadingBarProgress(3)})
        gsap.delayedCall(18.3, () => { setLoadingBarProgress(4)})
        gsap.delayedCall(18.4, () => { setLoadingBarProgress(5)})
        gsap.delayedCall(19, () => { setLoadingBarProgress(6)})
        gsap.delayedCall(21, () => { setLoadingBarProgress(7)})
        gsap.delayedCall(23, () => { setLoadingBarProgress(8)})
        gsap.delayedCall(23.5, () => { setLoadingBarProgress(9)})
        gsap.delayedCall(23.75, () => { setLoadingBarProgress(10)})
        gsap.delayedCall(24, () => { setBootOverlayBackground("boot__overlay three")})
        gsap.delayedCall(24.1, () => { setBootOverlay(true)})
        gsap.delayedCall(24.25, () => { setBootOverlayBackground("boot__overlay two")})
        gsap.delayedCall(24.5, () => { setBootOverlayBackground("boot__overlay one")})
        gsap.delayedCall(24.75, () => { setBootOverlayBackground("boot__overlay")})
        gsap.delayedCall(25.25, () => { setBootBackground("boot__sequence three")})
        gsap.delayedCall(25.25, () => { setSequenceTwo(false)})
        gsap.delayedCall(25.5, () => { setBootOverlayBackground("boot__overlay one")})
        gsap.delayedCall(25.75, () => { setBootOverlayBackground("boot__overlay two")})
        gsap.delayedCall(26, () => { setBootBackground("boot__sequence three")})
        gsap.delayedCall(26, () => { setBootOverlay(false)})
        gsap.delayedCall(26.1, () => {exitBootSequence()})
    }
    const triggerBootSequence = () =>
    {
        if(!bootSequenceStarted)
        {
            bootAnimation()
        }
    }
    


  return (
    <div className={bootBackground}>
        { bootSequenceStarted ? null : <div className="boot__intro"> 
            <button onClick={triggerBootSequence}>Initialize Operating System</button>
        </div> }

        { bootOverlay ? <div className={bootOverlayBackground} /> : null }

         { sequenceOne ? <div className='boot__container'>
            { sequenceOneProgress >= 1 ? <p>Loading System...</p> : null }
            { sequenceOneProgress >= 2 ? <p>Blah blah blah...</p> : null }
            { sequenceOneProgress >= 3 ? <p>Version 0.11235813212455 of SOUL confirmed.</p> : null }
            { sequenceOneProgress >= 4 ? <p>Secure_Boot initializing...</p> : null }
            { sequenceOneProgress >= 5 ? <div className='boot__box'>
                <p className='boot__box__title'>Performing system diagnostics.</p>
                <div className='boot__inner__box'>
                    <p>Something checking.</p>
                    <p>Not sure what.</p>
                    <p>Im sure its important anyways.</p>
                </div>
            </div> : null }
            { sequenceOneProgress >= 6 ? <p>Version mismatch. Continue?</p> : null }
            { sequenceOneProgress >= 6 ? <p>Y / N</p> : null }
        </div> : null }

        { sequenceTwo ? <div className="boot__container">
            <img className='boot__icon' src={StartIcon} alt="" />
            <div className="boot__loading">
                <p className='boot__loading__message'>{loadingMessage}</p>
                <div className="boot__loading__bar">
                    { loadingBarProgress >= 1 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 2 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 3 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 4 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 5 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 6 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 7 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 8 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 9 ? <div className="boot__loading__child" /> : null }
                    { loadingBarProgress >= 10 ? <div className="boot__loading__child" /> : null }
                </div>
            </div>
        </div> : null }
        
    </div>
  )
}

export default BootSequence
