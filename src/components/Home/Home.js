import React from 'react'
import './Home.css';
import Animation from '../../495px-Light_dispersion_conceptual_waves.gif';
import Nepal from '../../photos/tilicho.jpeg';
import Australia from '../../photos/Manly.jpg';

function Home() {
  return (
    <div id='home'>
      <div className='content'>
        <div className='subContent'>
          <h6>Stay tuned</h6>
          <img className='img-underConstruction' src ={Animation} alt='Under Construction' />
        </div>
        <div className="container-lg my-3 home">
        <div id="myCarousel" className="carousel sl homeide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            {/* <li data-target="#myCarousel" data-slide-to="2"></li> */}
          </ol>
          <div className="carousel-inner">
              <div className="carousel-item active">
                <img className='img-Aboutme' src={Nepal} alt="First Slide" />
              </div>
              {/* <div className="carousel-item">
                <div className='column3'>
                  <img src={Me1} alt="Second Slide - pt1" />
                  <img src={Me2} alt="Second Slide - pt2" />
                  <img src={Me3} alt="Second Slide - pt3" />
                </div>
              </div> */}
              <div className="carousel-item">
                <img className='img-Aboutme' src={Australia} alt="Third Slide" />
              </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" data-slide="next">
              <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
