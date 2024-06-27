import React from 'react'

const TitleBar = (props) => {
  const icon = props.icon
  const title = props.title
  const exit = props.exit
  const imagesArray = props.imagesArray

  return (
    <div className='window__title__bar'>
      <span className='window__title__bar__header noselect'>{title}</span>
      <img className='window__title__bar__exit' src={imagesArray[1]} alt="" onClick={exit} />
    </div>
  )
}

export default TitleBar

