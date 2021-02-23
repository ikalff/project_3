import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PropertyForm from './PropertyForm'
import { isCreator } from '../lib/auth.js'

export default function UpdatePokemon({ history, match }) {
  const [error, updateError] = useState('')
  const [checkboxData, updateCheckboxData] = useState([
    {
      amenityName: 'Wifi',
      amenityValue: false
    },
    {
      amenityName: 'Pet friendly',
      amenityValue: false
    },
    {
      amenityName: 'Wheelchair Accessible',
      amenityValue: false
    },
    {
      amenityName: 'Washing machine',
      amenityValue: false
    },
    {
      amenityName: 'Near a beach',
      amenityValue: false
    }
  ])
  const propertyId = match.params.propertyId
  const [ownerId, updateOwnerId] = useState('')
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
    amenities: checkboxData
  })

  //console.log(formData)


  useEffect(() => {
    axios.get(`/api/properties/${propertyId}`)
      .then(({ data }) => {
        updateOwnerId(data.host._id)
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


  function handleCheckBox(event) {
    const amenityIndex = checkboxData.findIndex(amenity => amenity.amenityName === event.target.name)
    const newCheckboxData = [...checkboxData]
    newCheckboxData[amenityIndex] = {
      'amenityName': event.target.name,
      'amenityValue': event.target.checked
    }
    console.log(formData.amenities)
    updateCheckboxData(newCheckboxData)
    updateFormData({ ...formData, ['amenities']: newCheckboxData })
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
      updateError('Unable to update property. Please enter a unique property name and a value for all required fields.')
      console.log(err)
    }
  }




  return <div className='container px-6 pt-6 pb-6'>


    {error && <div className='box has-background-danger has-text-white'>{error}</div>}
    {isCreator(ownerId) ?
      <PropertyForm
        handleChange={handleChange}
        handleCheckBox={handleCheckBox}
        handleSubmit={handleSubmit}
        formData={formData}
        location='updateProperty'

      />
      :

      <div className='box has-background-danger has-text-white'>Sorry - you can not edit this.</div>
    }

    {error && <div className='box mt-4 has-background-danger has-text-white'>{error}</div>}

  </div>
}