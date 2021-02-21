import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth.js'


function NavBar({ location, history }) {

  const [username, updateUsername] = useState([])
  let LoggedInUserId = getLoggedInUserId()

  useEffect(() => {
    async function fetchData() {
      LoggedInUserId = getLoggedInUserId()
      if (LoggedInUserId) {
        try {
          const { data } = await axios.get(`/api/users/${LoggedInUserId}`)
          if (data) {
            //console.log(data)
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
    //history.push('/')
  }

  return <nav>

    <div className='navbar-end'>
      <div className='navbar-item'>
        <div className='buttons has-text-white'>
          <Link className='button is-primary' to='/'>Home</Link>
          <Link className='button is-primary' to='/properties'>All listings</Link>

          {username && <>
         Logged in as {username}  |&nbsp; 
        <a onClick={logOut} className='has-text-white'>Log out</a>
          </>
          }
          {!username && <>
            <Link className='button is-primary' to='/register'>Register</Link>
            <Link className='button is-primary' to='/login'>Login</Link>
          </>
          }
        </div>
      </div>
    </div>
  </nav>


}

export default withRouter(NavBar)