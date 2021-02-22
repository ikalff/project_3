import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropertyForm from './PropertyForm'

export default function UpdatePokemon({ history, match }) {

  const propertyId = match.params.propertyId
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


  useEffect(() => {
    axios.get(`/api/properties/${propertyId}`)
      .then(({ data }) => {
        const newFormData = {
          images: data['images'],
          name: data['name'],
          location: data['location'],
          isRoomOnly: data['isRoomOnly'],
          isEntirePlace: data['isEntirePlace:'],
          pricePerNight: data['pricePerNight'],
          summary: data['summary'],
          numberOfBedrooms: data['numberOfBedrooms'],
          maxNumberOfGuests: data['maxNumberOfGuests'],
          checkInTime: data['checkInTime'],
          checkOutTime: data['checkOutTime'],
          houseRules: data['houseRules'],
          cancellationPolicy: data['cancellationPolicy'],
          amenities: data['amenities']
        }
        updateFormData(newFormData)
        console.log(newFormData)
      })
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    updateFormData({ ...formData, [name]: value })
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
      amenities: formData['amenities']
    }
    try {
      const { data } = await axios.put(`/api/properties/${propertyId}`, newFormData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(data._id)
      history.push(`/properties/${data._id}`)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return <PropertyForm
    handleChange={handleChange}
    handleTypeChange={(types) => updateFormData({ ...formData, types })}
    handleSubmit={handleSubmit}
    formData={formData}
  />
}