import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HostProfileComponent from './HostProfileComponent.js'


export default function UserProfile({ history, match }) {
  const userId = match.params.userId

  const [userData, updateUserData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isHost: '',
    isAdmin: ''
  })

  console.log('user profile userData', userData)

  const [userDataLoading, updateUserDataLoading] = useState(true)

  //! Check error useState - see register.js
  const [error, updateError] = useState('')


  useEffect(() => {

    axios.get(`/api/users/${userId}`)
      .then(({ data }) => {
        console.log('data:', data)

        updateUserData(data)
        updateUserDataLoading(false)
      })

  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    updateUserData({ ...userData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    
    const token = localStorage.getItem('token')

    try {
      const { data } = await axios.put(`/api/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` }
      })
     
      history.push(`/users/${userId}`)
    } catch (err) {
      updateError(err.response.data.message)
      console.log(err.response.data)
    }
  }



  if (userDataLoading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }


  return <div className="section">

    <div className={error ? 'box has-background-danger has-text-white' : 'is-hidden'}>{error}</div>

    <div className="columns">

      <div className="column">
        <h2 className='title is-2 mb-4'>User profile</h2>
        <form onSubmit={handleSubmit}>

          <div className="field">
            <label className="label">First name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={userData.first_name}
                onChange={handleChange}
                name={'first_name'}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Last name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={userData.last_name}
                onChange={handleChange}
                name={'last_name'}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={userData.email}
                onChange={handleChange}
                name={'email'}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                value={userData.password}
                onChange={handleChange}
                name={'password'}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Confirm Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                value={userData.passwordConfirmation}
                onChange={handleChange}
                name={'passwordConfirmation'}
              />
            </div>


            <button className="button is-primary mt-5">Update my details</button>
          </div>
        </form>
      </div>

      {userData.isHost ? <div className="column">
        <HostProfileComponent userId={userId} /> </div> : <button className="button is-primary">Become a host</button>
      }
    </div>
  </div>

}


