import React from 'react'
import logo from '../../logo.png';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className='container'>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img className='logo' src={logo} alt='PRISM' /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li>
                <Link 
                  activeClass="active" 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={600}
                  delay={250}
                > 
                  Home
                </Link>
              </li>
              
              <li>
                <Link 
                  activeClass="active" 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}
                > 
                  About me
                </Link>
              </li>

              <li>
                <Link 
                  activeClass="active" 
                  to="projects" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}
                > 
                  Projects
                </Link>
              </li>
              
              <li>
                <Link 
                  activeClass="active" 
                  to="technologies" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}
                >
                  Technologies
                </Link>
              </li>

              <li>
                <Link 
                  activeClass="active" 
                  to="contactme" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}
                >
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
