import React, { useState } from 'react'
import axios from 'axios'
import PropertyForm from './PropertyForm'
import { getLoggedInUserId } from '../lib/auth.js'


export default function MakeProperty({ history }) {
  
  const LoggedInUserId = getLoggedInUserId()
  const [formData, updateFormData] = useState({
    images: [],
    name: '',
    location: '',
    isRoomOnly: false,
    isEntirePlace: false,
    pricePerNight: '',
    summary: '',
    numberOfBedrooms: '',
    maxNumberOfGuests: '',
    checkInTime: '',
    checkOutTime: '',
    houseRules: '',
    cancellationPolicy: '',
    amenities: []
  })


  function handleChange(event) {
    updateFormData({ ...formData, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const newFormData = {
      images: formData['images'],
      name: formData['name'],
      location: formData['location'],
      isRoomOnly: true,
      isEntirePlace: true,
      pricePerNight: formData['pricePerNight'],
      summary: formData['summary'],
      numberOfBedrooms: formData['numberOfBedrooms'],
      maxNumberOfGuests: formData['maxNumberOfGuests'],
      checkInTime: formData['checkInTime'],
      checkOutTime: formData['checkOutTime'],
      houseRules: formData['houseRules'],
      cancellationPolicy: formData['cancellationPolicy'],
      amenities: formData['amenities'],
      host: LoggedInUserId
    }

    try {
      const { data } = await axios.post('/api/properties', newFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data._id)
      history.push(`/properties/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return <div>
    <h5 className='title is-5 mt-4 mb-2'>List your property</h5>
    <PropertyForm
      handleChange={handleChange}
      handleTypeChange={(types) => updateFormData({ ...formData, types })}
      handleSubmit={handleSubmit}
      formData={formData}
    /></div>
}