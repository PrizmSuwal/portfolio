import './Footer.css';
import React from 'react'
import logo from '../../photos/logo.png';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='social-media-wrap'>
        <a href='/'>
          <img src={logo} alt='PRISM'></img>
        </a>
        <p>Leveling up one day at a time. </p>
        <div className='social-icons'>
          <a className='social-icon-link facebook'  aria-label='Facebook' href='https://www.facebook.com/suwal.prism/' target='_blank' rel='noreferrer'><i class='fab fa-facebook fa-3x'></i></a>
          <a className='social-icon-link instagram' aria-label='Instagram' href='https://www.instagram.com/prism_suwal/' target='_blank' rel='noreferrer'><i class='fab fa-instagram fa-3x'></i></a>
          <a className='social-icon-link github' aria-label='Github' href='https://github.com/PrizmSuwal' target='_blank' rel='noreferrer'><i class='fab fa-github fa-3x'></i></a>
          <a className='social-icon-link linkedin' aria-label='Linkedin' href='https://www.linkedin.com/in/prism-suwal-8741b4192/' target='_blank' rel='noreferrer'><i class='fab fa-linkedin fa-3x'></i></a>
        </div>
        <small className='website-rights'> © 2021, Prism Suwal. All Rights Reserved.</small> 
      </div>
    </div>
  )
}

export default Footer
