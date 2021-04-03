import React from 'react'
import './Home.css';
import Animation from '../../495px-Light_dispersion_conceptual_waves.gif';


function Home() {
  return (
    <div id='home'>
      <div className='content'>
        <div className='subContent'>
          <h6>Stay tuned</h6>
          <img className='img-underConstruction' src ={Animation} alt='Under Construction' />
        </div>
      </div>
    </div>
  )
}

export default Home
