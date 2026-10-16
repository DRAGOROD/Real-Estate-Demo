import React from 'react'

function FormEl(){
  return (
    <form className='contact-form-container'>
        <h3>Reach Out To Us!</h3>
        <div>
           <input type='text' />   
           <label>Name</label>
        </div>
        <div>
           <input type='email' />   
           <label>Email</label>
        </div>
        <div>
           <textarea type='text' />   
           <label>Message</label>
        </div>
        <span>Send</span>
    </form>
  )
}

export default FormEl