import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth.js'


function BookingForm({ propertyId }) {

  const LoggedInUserId = getLoggedInUserId()


  const [error, updateError] = useState('')
  const [formData, updateFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: ''
  })

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const newFormData = {
      checkInDate: formData.checkInDate,
      checkOutDate: formData.checkOutDate,
      numberOfGuests: formData.numberOfGuests
    }
    newFormData[name] = value
    updateFormData(newFormData)
    //console.log(newFormData)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const { data } = await axios.post(`/api/bookings/${propertyId}`, formData)
      history.push('/')
    } catch (err) {
      updateError(err.response.data.message)
    }
  }




  if (!LoggedInUserId) {
    return null
  }

  return <div className='box mt-6'>
    <h5 className='title is-5 mt-4 mb-2'>Book Now</h5>
    <form onSubmit={handleSubmit}>
      <div className='columns'>
        <div className='column'>
          <label className="label">Check in: </label>
          <input
            className="input"
            type="text"
            value={formData.checkInDate}
            onChange={handleChange}
            name={'checkInDate'}
          />
        </div>
        <div className='column'>
          <label className="label">Check out: </label>
          <input
            className="input"
            type="text"
            value={formData.checkOutDate}
            onChange={handleChange}
            name={'checkOutDate'}
          />
        </div>
        <div className='column'>
          <label className="label">Number of guests: </label>
          <input
            className="input"
            type="text"
            value={formData.numberOfGuests}
            onChange={handleChange}
            name={'numberOfGuests'}
          /> 

        </div>
      </div>
      <p>Total days:</p>
      <p>Total price:</p>
      <button className='button is-primary mt-4'>Book now</button>
    </form>

  </div>
}

export default withRouter(BookingForm)