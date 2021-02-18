import React, { useState } from 'react'
import axios from 'axios'

export default function RegisterPage({ history }) {

  const [error, updateError] = useState('')
  const [formData, updateFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const newFormData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      passwordConfirmation: formData.passwordConfirmation

    }
    newFormData[name] = value
    updateFormData(newFormData)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/register', formData)
      history.push('/')
    } catch (err) {
      updateError(err.response.data.message)
    }
  }




  return <div className='container px-6 pt-6 pb-6'>

    <div className={error ? 'box has-background-danger has-text-white' : 'is-hidden'}>{error}</div>

    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">First name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={formData.first_name}
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
            value={formData.last_name}
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
            value={formData.email}
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
            value={formData.password}
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
            value={formData.passwordConfirmation}
            onChange={handleChange}
            name={'passwordConfirmation'}
          />
        </div>
      </div >
      <button className='button is-primary'>Submit</button>
    </form >
  </div >
}