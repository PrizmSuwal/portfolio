import React from 'react'
import './Contact.css';

function contact() {
  return (
    <div className='contact-container' id='contactme'>
      <div className='contact-subscription'>
        <span className='contact-quote'> Get in Touch </span>
          <div className='input-areas'>
            <form>
              <input type='email' name='email' placeholder='Your email' className='contact-input'/>
              <br></br><input type='text' name='message' placeholder='Your message' className='contact-input'/>
              <br></br><button buttonStyle='btn--outline'>Send</button>
            </form>
          </div>       
      </div>
    </div>
  )
}

export default contact
