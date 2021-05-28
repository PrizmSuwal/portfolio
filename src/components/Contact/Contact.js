import React from 'react'
import './Contact.css';

function contact() {
  return (
    <div className='contact-container' id='contactme'>
      <div className='contact-icon'>
        <i className="fas fa-phone-alt"></i>
      </div>
      <div className='contact-subscription'>
        <p className='contact-quote'> Get in Touch </p>
        <p className='contact-subquote'> Have a question or want to collaborate?</p>
        <div className='input-areas'>
          <form>
            <input type='text' name='name' placeholder='Your name' className='contact-input'/>
            <br></br><input type='email' name='email' placeholder='Your email' className='contact-input'/>
            <br></br><input type='text' name='message' placeholder='Your message' className='contact-input message'/>
            <br></br><p className='contact-p'>Contact Me</p>
            <p className='contact-disabled'>This button has been disabled temporarily. KIndly email at prizmsuwal@gmail.com</p>
          </form>
        </div>       
      </div>
    </div>
  )
}

export default contact
