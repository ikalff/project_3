import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DateRangePicker from './dateRangePicker'
import amenities from '../data/amenities.js'

export default function SearchForm({ onChange, formLocation, checkboxDataProp, locationDataProp, startDate, setStartDate, endDate, setEndDate }) {
  //const amenities = ['Wifi', 'Pet friendly', 'Wheelchair Accessible', 'Washing machine', 'Near a beach']
  const [locationData, updateLocationData] = useState('')

  
  const [checkboxData, updateCheckboxData] = useState({
    'Wifi': false,
    'Pet friendly': false,
    'Wheelchair Accessible': false,
    'Washing machine': false,
    'Near a beach': false
  })

  useEffect(() => {
    if (locationDataProp) {
      updateLocationData(locationDataProp)
    }
    if (checkboxDataProp) {
      updateCheckboxData(checkboxDataProp)
    }
  }, [])


  function handleFieldsChange(event) {
    event.preventDefault()
    onChange(locationData, checkboxData)
  }



  function handleLocationDataBox(event) {
    updateLocationData(event.target.value)
  }

  function handleCheckBox(event) {
    const newcheckboxData = { ...checkboxData }
    newcheckboxData[event.target.name] = event.target.checked
    updateCheckboxData(newcheckboxData)
  }

  function clearFilters(event) {
    event.preventDefault()
    updateLocationData('')
    updateCheckboxData({
      'Wifi': false,
      'Pet friendly': false,
      'Wheelchair Accessible': false,
      'Washing machine': false,
      'Near a beach': false
    })
  }



  return <form>

    <div className="field">
      <label className="label">Location</label>
      <div className="control">
        <input
          className="input"
          type="text"
          name="locationData"
          onChange={handleLocationDataBox}
          value={locationData}
        />
      </div>
    </div>
    {
      amenities.map((amenity, index) => {
        return <div key={index} className="field">
          <label className="checkbox">

            <input
              className='mr-1'
              type="checkbox"
              name={amenity}
              onChange={handleCheckBox}
              checked={checkboxData[amenity]}
            />
            {amenity}
          </label>
        </div>
      })
    }

    <DateRangePicker
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
    />
    {formLocation === 'listings' && <div className='buttons'>


 

      <button className='button is-primary' onClick={handleFieldsChange}>Update search</button>
      <button className='button' onClick={clearFilters}>Clear</button>
    </div>}

    {formLocation === 'home' && <div className='buttons mt-4'>


      <Link className='button is-primary' to={{
        pathname: '/properties',
        state: {
          locationData: { locationData },
          checkboxData: { checkboxData },
          startDate: { startDate },
          endDate: { endDate }
        }
      }}>Search</Link>



      <button className='button' onClick={clearFilters}>Clear</button>
    </div>}

  </form>
}