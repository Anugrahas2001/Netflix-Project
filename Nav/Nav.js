/*eslint-disable*/
import React from 'react'
import './Nav.css'
import {FaSearch,FaBell,FaCaretDown} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div className='nav'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'/>
      <div className='center'>
        <ul className='items'>
            <Link to='/'><li>Home</li></Link>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently added</li>
            <li>My List</li>
        </ul>
      </div>
   
      <div className='right'>
        <FaSearch className='icon'/>
      <span>KID</span>
      <span>DVD</span>
      <FaBell className='icon'/>
      <img className='Avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'/>
      <FaCaretDown className='icon'/>
      </div>
    
    </div>
  )
}

export default Nav
