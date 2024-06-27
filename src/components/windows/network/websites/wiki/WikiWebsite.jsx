import React from 'react'

import "./wikiWebsite.css"

import WikiLogo from "../../../../../assets/images/networkIcon.png";
import WikiImage from "../../../../../assets/websiteImages/door/IMG_1597.jpg";

const WikiWebsite = () => {
  return (
    <div className="website wiki">
        <div className="wiki__header">
            <img src={WikiLogo} className="wiki__logo"/>
            <h1 className="wiki__title">WikiNet</h1>
        </ div>
        <h1 className="wiki__topic__title">Topic</h1>
        <hr className="wiki__line" />
        <div className="wiki__content">
            <p className="wiki__paragraph">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className="wiki__panel">
                <h1 className="wiki__panel__title">Topic</h1>
                <img src={WikiImage} className="wiki__panel__image"/>
                <p className="wiki__panel__image__description">image description</p>
                <div className="wiki__panel__fact">
                  <h2>A fact</h2>
                  <p>Something about something</p>
                </div>
            </div>
        </div>
        <h1 className="wiki__subtitle">External links</h1>
        <hr className="wiki__line" />
        <div className="wiki__footer">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 1</a></li>
            </ul>
        </div>
    </div>
  )

}

export default WikiWebsite
