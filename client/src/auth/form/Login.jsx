import React from 'react'
import "./form.scss"

function Login() {
  return (
    <div className='form'>
      <h3>sign up</h3>
      <input type="text" className='input'  placeholder='username'/>
      <input type="text" className='input'  placeholder='email'/>
      <input type="text" className='input'  placeholder='password'/>
    </div>
  )
}

export default Login
