import React from 'react'
import'./SignNet.css'
import {FaCheckSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function SignNet() {
  return (
    <div className='container'>
    <img alt=''className='sigin' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456'/>
    
    <Link to='/'><h4>Home</h4></Link>
  <div className='signin-page'>
    <div className='content'>
    <h1>Sign In</h1>
    <input className='email' type='email' placeholder='Email or Phone number'/><br/>
    <input className='pwd' type='text' placeholder='Password'/>
    </div>
    <div className='click'>
    <Link to='/netflix-show'>Sign In</Link>
    </div>
    <div className='footer'>
     <div className='help'>
     <FaCheckSquare/>
      <p className='p1'>Remember me</p>
      <p className='p2'>Need help?</p>
     </div>
     <div className='desc'>
      <p className='p'>New to Netflix?<b>Sign up now</b></p>
      <small><p className='p3'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p></small>
     </div>
    </div>

  </div>
</div>
  )
}

export default SignNet
