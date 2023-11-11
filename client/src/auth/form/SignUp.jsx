import { useState, useRef } from 'react'
import './form.scss';

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const passwordRef = useRef()

  // const showPassword = () => {
  //   console.log(passwordRef.current.type)
  //   if(passwordRef.current.type === 'password') {
  //     passwordRef.current.type = "text"
  //   }else{
  //     passwordRef.current.type = "password"
  //   }
  // }
  return (
    <div className='form'>
      <h3>sign up</h3>
      <input 
        type="text" 
        className='input' 
        value={username}  
        placeholder='username'
        onChange={(e) => setUsername(e.target.value)}
        />
      <input 
        type="email" 
        className='input' 
        value={email}  
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
        />
      <div className="password-container">
        <input 
          type={showPassword ? 'text' : 'password'} 
          className='input password'  
          placeholder='password' 
          value={password} 
          ref={passwordRef}
          onChange={(e) => setPassword(e.target.value)}
          />
        <i className={`bx ${showPassword ? 'bx-show-alt' : 'bxs-hide'}`} onClick={() => setShowPassword((state) => !state)}></i> 
      </div>
      <div className="password-container">
        <input 
          type={ showConfirmPassword ? 'text' : 'password'} 
          className='input password'  
          placeholder='confirm password' 
          value={confirmPassword}
          ref={passwordRef}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />
        <i className={`bx ${showConfirmPassword ? 'bx-show-alt' : 'bxs-hide'}`} onClick={() => setShowConfirmPassword((state) => !state)}></i> 
      </div>
      <button className='btn'>submit</button>
      <span className='reverce-link'>have an existing account?</span>
    </div>
  )
}

export default SignUp
