import React from 'react'
import './Body.css';
import Animation from '../495px-Light_dispersion_conceptual_waves.gif';

function Body() {
  return (
    <div>
      <div className='content'>
        <div className='subContent'>
          <h6>I am working hard, so hard that I am tired of sleeping. But I have exam going on, not that it matters but still.  </h6>
          <img className='img-underConstruction' src ={Animation} alt='Under Construction' />
          <h6>Stay tuned</h6>
        </div>
        <div className='subContent-Projects'>
          <h4>Ongoing Projects</h4>
          <img className='projectLogo' src='http://xinney.com/img/logo.png' alt='Xinney logo' />
          <img className='projectLogo' src='http://174.138.38.24:8572/images/logo.svg' alt='Doctor Saab' />
          <br></br>
          <img className='projectLogoDeckdo' src='https://avatars.githubusercontent.com/u/52381212?s=400&u=6e818e15326ee39a120f50f66aad51e398d53ad1&v=4' alt='DeckDo Inc.'></img>
        </div>
        <div className='subContent-Technologies'>
          <h4>Technologies</h4>
          <div className='technologies'>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png' alt='HTML'></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png' alt='CSS'></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/330px-JQuery_logo.svg.png' alt='Jquery'></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png' alt='NodeJS' ></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' alt='React JS'></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/375px-MongoDB-Logo.svg.png' alt='MongoDB'></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/150px-PHP-logo.svg.png' alt='PHP'></img>
            </div>
            <div className='technologyImg'>
              <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/MySQL_Logo.png/104px-MySQL_Logo.png' alt='MySql'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
