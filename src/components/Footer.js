import './Footer.css';
import React from 'react'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <div className= 'footer-quote'>
          <span> Coming Soon </span>
        </div>
        <div className='input-areas'>
          <form>
            <input type='email' name='email' placeholder='Your email' className='footer-input'/>
            <button buttonStyle='btn--outline'>Send</button>
          </form>
        </div>
      </section>
      <div className='social-media-wrap'>
        <div className='social-icons'>
          <a className='social-icon-link facebook'  aria-label='Facebook' href='https://www.facebook.com/suwal.prism/'><i class="fab fa-facebook fa-2x"></i></a>
          <a className='social-icon-link instagram' aria-label='Instagram' href='https://www.instagram.com/prism_suwal/'><i class="fab fa-instagram fa-2x"></i></a>
          <a className='social-icon-link github' aria-label='Github' href='https://github.com/PrizmSuwal'><i class="fab fa-github fa-2x"></i></a>
          <a className='social-icon-link linkedin' aria-label='Linkedin' href='https://www.linkedin.com/in/prism-suwal-8741b4192/'><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
        <small className='website-rights'> © 2021, Prism Suwal. All Rights Reserved.</small> 
      </div>
    </div>
  )
}

export default Footer
