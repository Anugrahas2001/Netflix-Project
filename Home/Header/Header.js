import React from 'react'
import './Header.css'
import {FaChevronRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <header className='showcase'>
        <div className='showcase-top'>
            <img alt='logo' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456'/>
            <Link to='/sign-in' className='btn btn-rounded'>
                Sign In
            </Link>
        </div>
        <div className='showcase-content'>
            <h1>Unlimited movies, Tv Shows and more</h1>
            <p>Watch anywhere. Cancel Anytimes</p>
            <Link to='/netflix-show' className='btn btn-x1'>
                Watch Free For 30 Days <FaChevronRight/>
            </Link>

        </div>

      </header>
    </div>
  )
}

export default Header
