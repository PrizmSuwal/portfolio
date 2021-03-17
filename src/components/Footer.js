import './Footer.css';
import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-subscription'>
        <span className='footer-quote'> Get in Touch </span>
          <div className='input-areas'>
            <form>
              <input type='email' name='email' placeholder='Your email' className='footer-input'/>
              <br></br><input type='text' name='message' placeholder='Your message' className='footer-input'/>
              <br></br><button buttonStyle='btn--outline'>Send</button>
            </form>
          </div>       
      </div>
      <div className='social-media-wrap'>
        <div className='social-icons'>
          <a className='social-icon-link facebook'  aria-label='Facebook' href='https://www.facebook.com/suwal.prism/' target='_blank' rel='noreferrer'><i class='fab fa-facebook fa-2x'></i></a>
          <a className='social-icon-link instagram' aria-label='Instagram' href='https://www.instagram.com/prism_suwal/' target='_blank' rel='noreferrer'><i class='fab fa-instagram fa-2x'></i></a>
          <a className='social-icon-link github' aria-label='Github' href='https://github.com/PrizmSuwal' target='_blank' rel='noreferrer'><i class='fab fa-github fa-2x'></i></a>
          <a className='social-icon-link linkedin' aria-label='Linkedin' href='https://www.linkedin.com/in/prism-suwal-8741b4192/' target='_blank' rel='noreferrer'><i class='fab fa-linkedin fa-2x'></i></a>
        </div>
        <small className='website-rights'> © 2021, Prism Suwal. All Rights Reserved.</small> 
      </div>
    </div>
  )
}

export default Footer
