import React from 'react'
import DoctorSaab from '../../photos/DrSaab.svg';
import Xinney from '../../photos/Xinney.png';
import './Projects.css';

function Projects() {
  return (
    <div id= 'projects'>
      <div className='content'>
        <div className='subContent-Projects'>
          <h4>Ongoing Projects</h4>
          <div className='upperProject'>
            <img className='projectLogo-Xinney' src={Xinney} alt='Xinney logo' />
            <img className='projectLogo-DrSaab' src={DoctorSaab} alt='Doctor Saab' />
          </div>
          <div className='upperProject'>
            <img className='projectLogo-Deckdo' src='https://avatars.githubusercontent.com/u/52381212?s=400&u=6e818e15326ee39a120f50f66aad51e398d53ad1&v=4' alt='DeckDo Inc.'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
