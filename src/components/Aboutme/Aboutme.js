import React from 'react'
import './Aboutme.css';
import Tilicho from '../../photos/tilicho.jpeg';

function Aboutme() {
  return (
    <div id = 'about'>
      <div className='content'>
        <img className='tilicho' src= {Tilicho} alt = 'Prism Suwal' />
        <br></br>
        <h6>My name is Prism Suwal. Please give me money. Thank you.</h6>
      </div>
    </div>
  )
}

export default Aboutme
