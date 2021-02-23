import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link, useLocation } from 'react-router-dom'
import SearchForm from './SearchForm.js'

export default function App() {

  const searchState = useLocation()
  const resultsPerPage = 3
  const [properties, updateProperties] = useState([])
  const [pageNum, updatePageNum] = useState(1)
  const [loading, updateLoading] = useState(true)
  const [locationData, updateLocationData] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const amenities = ['Wifi', 'Pet friendly', 'Wheelchair Accessible', 'Washing machine', 'Near a beach']
  const [checkboxData, updateCheckboxData] = useState({
    'Wifi': false,
    'Pet friendly': false,
    'Wheelchair Accessible': false,
    'Washing machine': false,
    'Near a beach': false
  })

  useEffect(() => {
    async function fetchProperties() {
      if (searchState.state) {
        updateLocationData(searchState.state.locationData.locationData)
        updateCheckboxData(searchState.state.checkboxData.checkboxData)
      }
      try {
        const { data } = await axios.get('api/properties')
        updateProperties(data)
        updateLoading(false)
        if (searchState.state) {
          filter(data, searchState.state.locationData.locationData, searchState.state.checkboxData.checkboxData)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchProperties()
  }, [])



  function filter(data, locationData, checkboxData) {
    let newProperties = []
    newProperties = data.filter(property => {
      return property.location.toLowerCase().includes(locationData.toLowerCase())
    })
    amenities.forEach(amenityName => {
      if (checkboxData[amenityName] === true) {
        console.log(amenityName)
        newProperties = newProperties.filter(property => {
          return property.amenities.find(amenity => amenity.amenityName === amenityName).amenityValue === true
        })
      }
      
    })
    updateProperties(newProperties)
  }

  async function fetchandfilter(newLocationValue, newCheckboxValue) {
    try {
      const { data } = await axios.get('api/properties')
      updateProperties(data)
      updateLoading(false)
      if (searchState.state) {
        filter(data, newLocationValue, newCheckboxValue)
      }
    } catch (err) {
      console.log(err)
    }
  }



  function handlePageChange(newValue) {
    updatePageNum(newValue)
  }

  function handleFieldsChange(newLocationValue, newCheckboxValue) {
    updateLocationData(newLocationValue)
    updateCheckboxData(newCheckboxValue)
    fetchandfilter(newLocationValue, newCheckboxValue)
  }

  if (loading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }


  return <div className='container px-6 pt-6 pb-6'>
    <div className='columns'>
      <div className='column is-narrow'>

        <SearchForm
          formLocation='listings'
          onChange={handleFieldsChange}
          locationDataProp={locationData}
          checkboxDataProp={checkboxData}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

      </div>
      <div className='column'>
        <h2 className='title is-2 mb-2'>Properties</h2>
        <Paginate
          onChange={handlePageChange}
          pageNum={pageNum}
          totalResults={properties.length}
          resultsPerPage={resultsPerPage}
        />
        <div className='properties'>
          {properties.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((property, index) => {

            return <div key={index} className='box columns'>
              <div className='column'>
                <Link to={'/properties/' + property._id}><img src={property.images[0] ? property.images[0] : 'http://placehold.it/400x400?text=no%20image%20available'} /></Link>
              </div>
              <div className='column'>
                <h4 className='title is-4 mb-2'>{property.name}</h4>
                <p>Location: {property.location}</p>
                <p>Summary: {property.summary}</p>
                <h5 className='title is-5 mt-4 mb-2'>Amenities</h5>
                {property.amenities.length > 0 &&
                  property.amenities.map((amenity, index) => {
                    return <p key={index}>
                      {amenity.amenityValue ? '✅ ' : '❌ '}
                      {amenity.amenityName}
                    </p>
                  })
                }

                <Link className='button is-primary mt-5' to={'/properties/' + property._id}>More details</Link>

              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
}