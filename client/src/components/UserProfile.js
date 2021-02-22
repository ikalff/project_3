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
    properties: [],
    isAdmin: ''
  })
  const [userDataLoading, updateUserDataLoading] = useState(true)

  const inputFields = ['first_name', 'last_name', 'email', 'password', 'passwordConfirmation']

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
      const { data } = await axios.post('/users/:userId', userData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data._id)
      history.push('/users/:userId')
    } catch (err) {

      console.log(err.response.data)
    }
  }



  if (userDataLoading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }

//! line 70 - change password confirmation in schema to password_confirmation?
  return <div className="section">
    <div className="columns">

      <div className="column">
        <h2 className='title is-2 mb-4'>User profile</h2>
        <form onSubmit={handleSubmit}>
          {inputFields.map(field => {
            return <div key={field} className="field">
              <label className="label">
                {(field[0].toUpperCase() + field.slice(1)).replace('_', ' ')}
              </label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  value={userData[field]}
                  onChange={handleChange}
                  name={field}
                />
              </div>
            </div>
          })}

          <button className="button is-primary">Update my details</button>
        </form>
      </div>

      {userData.isHost && <div className="column">
        <HostProfileComponent userId={userId} />
      </div>}

    </div>
  </div>

}