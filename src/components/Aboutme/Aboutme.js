import React from 'react'
import './Aboutme.css';
import Nepal from '../../photos/tilicho.jpeg';
import Australia from '../../photos/Manly.jpg';
import Me1 from '../../photos/Harbour.jpg';
import Me2 from '../../photos/Laperouse.jpg';
import Me3 from '../../photos/Patan.jpg';

function Aboutme() {
  return (
    <div id = 'about'>
      <div className='content'>
        <h6>My name is Prism Suwal. Please give me money. Thank you.</h6>
      </div>
      <div className="container-lg my-3">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
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
  )
}

export default Aboutme
