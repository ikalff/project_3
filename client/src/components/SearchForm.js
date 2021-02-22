import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchForm({ onChange, formLocation, checkboxDataProp, locationDataProp }) {




  const [locationData, updateLocationData] = useState('')
  const amenities = ['Wifi', 'Pet friendly', 'Wheelchair Accessible', 'Washing machine', 'Near a beach']
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
    //console.log(locationData)
  }

  function handleCheckBox(event) {
    const newcheckboxData = { ...checkboxData }
    newcheckboxData[event.target.name] = event.target.checked
    //console.log(newcheckboxData)
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



    {formLocation === 'listings' && <div className='buttons'>


 

      <button className='button is-primary' onClick={handleFieldsChange}>Update search</button>


      <button className='button' onClick={clearFilters}>Clear</button>
    </div>}

    {formLocation === 'home' && <div className='buttons'>


      <Link className='button is-primary' to={{
        pathname: '/properties',
        state: {
          locationData: { locationData },
          checkboxData: { checkboxData }
        }
      }}>Search</Link>
      <button className='button' onClick={clearFilters}>Clear</button>
    </div>}

  </form>
}