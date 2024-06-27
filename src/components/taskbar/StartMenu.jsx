import React from 'react'
import FolderIcon from '../../assets/images/folderIcon.png'

const StartMenu = (props) => {
    const exit = props.exit

  return (
    <div className='start__menu__background' onClick={exit}>
        <div className='start__menu'>

            <div className='start__menu__item'>
                <img src={FolderIcon} alt="" />
                <span className='noselect'>Menu Item 1</span>
            </div>
            <div className='start__menu__item'>
                <img src={FolderIcon} alt="" />
                <span className='noselect'>Menu Item 2</span>
            </div>
            <div className='start__menu__item'>
                <img src={FolderIcon} alt="" />
                <span className='noselect'>Menu Item 3</span>
            </div>

        </div>
    </div>
  )
}

export default StartMenu
