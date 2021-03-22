import React from 'react'
import logo from '../logo.png';
import './Navbar.css';

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
              <li className="nav-item" active>
                <a className="nav-link" href="/">Home<span className='sr-only'>(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Technologies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
