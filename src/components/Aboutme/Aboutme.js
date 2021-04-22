import React from 'react'
import './Aboutme.css';
import ME from '../../photos/Manlyk.jpg';

function Aboutme() {
  return (
    <div id = 'about'>
      <div className="container-lg my-3">
        <img src={ME} alt='Prism Suwal'></img>
      </div>
      <div className='content-aboutme'>
        <p>I am Prism, a Web Developer working remotely for DeckDo Inc. on their subsidiary product in Texas. </p>
        <h6>I love backend development and officially working since past year. I am naturally curious and prefer to keep learning and do interesting things. </h6>
      </div>
    </div>
  )
}

export default Aboutme
