import React from 'react'
import './Technologies.css';
import digitalOcean from '../../photos/1200px-DigitalOcean_logo.svg.png';
import postman from '../../photos/postman-logo-F43375A2EB-seeklogo.com.png';

function Technologies() {
  return (
    <div id='technologies'>
      <div className='content'>
        <div className='subContent-Technologies'>
          <h4>Technologies</h4>
          <div className='technologies'>
            <div className='technology-row-top'>
              <div className='technologyImg'>
                <i className="fab fa-html5 technologyIcon"></i>
              </div>
              <div className='technologyImg'>
                <i className="fab fa-css3-alt technologyIcon"></i>
              </div>
              <div className='technologyImg'>
                <i className="fab fa-node technologyIcon"></i>
              </div>
              <div className='technologyImg'>
                <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/330px-Expressjs.png' alt='Express JS'></img>
              </div>
              <div className='technologyImg'>
                <img className='img-technology' src='https://webassets.mongodb.com/_com_assets/cms/mongodb_atlas-h0ai1yctwo.svg' alt='MongoDB'></img>
              </div>
              <div className='technologyImg'>
                <i className="fab fa-react technologyIcon"></i>
              </div>
              <div className='technologyImg'>
                <img className='img-technology-right' src='https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667' alt='Pug JS'></img>
              </div>
              <div className='technologyImg'>
                <img className='img-technology-right' src='https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/MySQL_Logo.png/104px-MySQL_Logo.png' alt='MySql'></img>
              </div>
              <div className='technologyImg'>
                <img className='img-technology' src='https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/330px-JQuery_logo.svg.png' alt='Jquery'></img>
              </div>
              <div>
                <img className='img-technology-right' src='https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667' alt='Mocha'></img>
              </div>
              <div>
                <img className='img-technology-right' src={postman} alt='Postman'></img>
              </div>
              <div className='technologyImg'>
                <i className="fab fa-php technologyIcon"></i>
              </div>
              <div>
                <img className='img-technology' src={digitalOcean} alt='Digital Ocean'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
