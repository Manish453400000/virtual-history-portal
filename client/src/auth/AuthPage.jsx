import React from 'react'
import './auth.scss'
// assets 
import { authBg } from '../assets/index'
import Pyramid from '../components/pyramid/Pyramid'
import Login from './form/Login'
import SignUp from './form/SignUp'

function AuthPage() {
  return (
    <div className='auth'>
      <div className="background">
        <img src={authBg} alt="backgound" className='coverPic' /> 
      </div>
      <div className="con">
        <div className="left">
           {/* <Login /> */}
           <SignUp />
        </div>
        <div className="right">
          <Pyramid />
        </div>
      </div>
    </div>
  )
}

export default AuthPage