import React from 'react'
import { useState } from 'react'
import './captchaWebsite.css'

import CaptchaImageOne from '../../../../../assets/images/captcha1.jpg'
import CaptchaImageTwo from '../../../../../assets/images/captcha2.jpg'
import CaptchaImageThree from '../../../../../assets/images/captcha3.jpg'
import CaptchaImageFour from '../../../../../assets/images/captcha4.jpg'


function CaptchaWebsite(props) {

  const loadingAnimation = props.animateLoading

  const [ errorShown, setErrorShown ] = useState(false)
  const [ incorrectCounter, setIncorrectCounter ] = useState(0)

  const captchaArray = [
    CaptchaImageOne,
    CaptchaImageTwo,
    CaptchaImageThree,
    CaptchaImageFour
  ]

  const changeCaptcha = () =>
  {
    loadingAnimation()
    setErrorShown(true)
    setIncorrectCounter(incorrectCounter + 1)

    if(incorrectCounter > 5)
    {

    }
  }

  return (
    <div className='website captcha'>
      <div className="captcha__container">
        <p className="captcha__prompt">Please Enter the Letters Bellow to Proceed</p>
        { errorShown ? <p className="captcha__error">The answer you submitted was incorrect. Please try again.</p> : null }
        <br />
        <img src={captchaArray[incorrectCounter]} alt="" className="captcha__image" />
        <br />
        <input type="text" className="captcha__input" />
        <br />
        <button className='captcha__verification' onClick={changeCaptcha}>Verify</button>
      </div>
    </div>
  )
}

export default CaptchaWebsite
