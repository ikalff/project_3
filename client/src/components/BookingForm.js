import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { getLoggedInUserId } from '../lib/auth.js'
import DateRangePicker from './dateRangePicker'

function BookingForm({ propertyId, maxNumberOfGuests, unavailableDates, property }) {

  const LoggedInUserId = getLoggedInUserId()

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [numOfDays, setNumOfDays] = useState(1)

  const [error, updateError] = useState('')
  const [success, updateSuccess] = useState('')
  const [formData, updateFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '',
    datesBooked: []
  })
  

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    const newFormData = {
      checkInDate: startDate,
      checkOutDate: endDate,
      numberOfGuests: formData.numberOfGuests,
      datesBooked: getDateRange(startDate, endDate)
    }
    newFormData[name] = value
    updateFormData(newFormData)
  }

  const getDateRange = (startDate, endDate) => {
    let dates = []
    const theDate = new Date(startDate)
    while (theDate < endDate + 1) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    return dates
  }

  async function handleSubmit(event) {
    const token = localStorage.getItem('token')
    event.preventDefault()


    if (!formData.checkInDate || !formData.checkOutDate || !formData.numberOfGuests || formData.numberOfGuests === 'Please select') {
      updateError('Please select a check in date, check out date, and the number of guests.')
      updateSuccess('')
    } else {
      try {
        const { data } = await axios.post(`/api/bookings/${propertyId}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        })
        updateError('')
        updateSuccess('Congratulations! Your booking is now confirmed')
      } catch (err) {
        updateError(err.response.data.message)
        updateSuccess('')
      }
    }
  }
  
  function totalDays () {
    return getDateRange(startDate, endDate).length + 1
  }

  function totalPrice() {
    //console.log(property.pricePerNight);
    return totalDays() * property.pricePerNight
  }

  const maxNumberOfGuestsArray = ['Please select']
  for (let i = 1; i < maxNumberOfGuests + 1; i++) {
    maxNumberOfGuestsArray.push(i)
  }


  if (!LoggedInUserId) {
    return null
  }


  return <div className='box mt-6'>

    {error && <div className='box has-background-danger has-text-white'>{error}</div>}
    {success && <div className='box has-background-primary has-text-white'>{success}</div>}

    {!success &&
      <div>
        <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Book Now</h5>
        <p className='mb-4'>This property can accommodate a maximum of <strong>{maxNumberOfGuests}</strong> guests.</p>
        <form onSubmit={handleSubmit}>
          <div className='columns'>
            <div className='column'>
              <DateRangePicker
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                unavailableDates={unavailableDates}
              />
            </div>
            <div className='column'>
              <label className="label">Guests: </label>


              <div className="select">
                <select
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  name={'numberOfGuests'}>

                  {
                    maxNumberOfGuestsArray.map((number, index) => {
                      return <option key={index}>{number}</option>

                    })
                  }

                </select>
              </div>

            </div>
          </div>
          <p>{`Total days: ${totalDays()}`}</p>
          <p>{`Total price: £${totalPrice()}`}</p>
          <button className='button is-primary mt-4'>Book now</button>
        </form>
      </div>
    }

  </div>
}

export default withRouter(BookingForm)