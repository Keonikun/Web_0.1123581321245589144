import React from 'react'
import FolderIcon from '../../assets/images/folderIcon.png'
import PowerIcon from '../../assets/images/shutDownIcon.png'
import NetworkIcon from '../../assets/images/networkIcon.png'

const StartMenu = (props) => {
    const exit = props.exit

  return (
    <div className='start__menu__background' onClick={exit}>
        <div className='start__menu'>

            <div className='start__menu__item'>
                <img src={NetworkIcon} alt="" />
                <span className='noselect'>Internet</span>
            </div>
            <div className='start__menu__item'>
                <img src={FolderIcon} alt="" />
                <span className='noselect'>File Explorer</span>
            </div>
            <div className='start__menu__item'>
                <img src={PowerIcon} alt="" />
                <span className='noselect'>Sleep</span>
            </div>
            <div className='start__menu__item'>
                <img src={PowerIcon} alt="" />
                <span className='noselect'>Restart</span>
            </div>
            <div className='start__menu__item'>
                <img src={PowerIcon} alt="" />
                <span className='noselect'>Power Down</span>
            </div>

        </div>
    </div>
  )
}

export default StartMenu
