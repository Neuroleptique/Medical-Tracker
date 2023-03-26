import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Header() {

  return (
      <header className='header'>
        <div className="logo">
          <Link to='/about'></Link>
        </div>
        <ul>
        <>
          <li> 
          <Link to='/login'>
            <p>Login </p>
          </Link>
        </li>
  
        <li>
          <Link to='/register'>
            <p>Register</p>
          </Link>
        </li>
        </>
        </ul>
        </header>        
  )
}

export default Header