import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return <nav>

    <div className='navbar-end'>
      <div className='navbar-item'>
        <div className='buttons'>
          <Link className='button is-primary' to='/'>Home</Link>
          <Link className='button is-primary' to='/properties'>All listings</Link>
          <Link className='button is-primary' to='/register'>Register</Link>
          <Link className='button is-primary' to='/login'>Login</Link>
        </div>
      </div>
    </div>
  </nav>
}