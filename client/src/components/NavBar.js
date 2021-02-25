import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth.js'


function NavBar({ location }) {

  const [username, updateUsername] = useState('')
  let LoggedInUserId = getLoggedInUserId()

  const token = localStorage.getItem('token')

  useEffect(() => {
    async function fetchData() {
      LoggedInUserId = getLoggedInUserId()
      if (LoggedInUserId) {
        try {
          const { data } = await axios.get(`/api/users/${LoggedInUserId}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (data) {
            updateUsername(data.first_name)
          }
        } catch (err) {
          console.log(err)
        }
      }
    }
    fetchData()
  }, [location])


  function logOut() {
    localStorage.clear()
    updateUsername('')
    history.push('/')
  }
 

  return <nav className='navbar' role='navigation' aria-label='main navigation'>


    <div className='navbar-brand'>
      <div className='navbar-item'>
        <Link to='/'>
          <h1 className='title brandfont is-size-2 has-text-white'>ArrivR</h1>
        </Link>
      </div>
    </div>



    <div className='navbar-end'>
      <div className='navbar-item'>
        {username && <div className='buttons has-text-white'>
          <i className='fas fa-user-circle fa-lg mr-2'></i>
          Logged in as {username}
          <a onClick={logOut} className='button ml-4'>Log out</a>
          <Link className='button is-primary' to={`/users/${LoggedInUserId}`}>User profile</Link>
          <Link className='button is-primary' to='/makeproperty'>List a property</Link>
        </div>
        }
        {!username && <div className='buttons has-text-white'>
          <Link className='button is-primary' to='/register'>Register</Link>
          <Link className='button is-primary' to='/login'>Login</Link>
        </div>
        }

      </div>
    </div>
  </nav>


}

export default withRouter(NavBar)