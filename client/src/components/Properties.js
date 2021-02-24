import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link, useLocation } from 'react-router-dom'
import SearchForm from './SearchForm.js'
import moment from 'moment'

export default function App() {

  const searchState = useLocation()
  const resultsPerPage = 3
  const [properties, updateProperties] = useState([])
  const [pageNum, updatePageNum] = useState(1)
  const [loading, updateLoading] = useState(true)
  const [locationData, updateLocationData] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [unavailableDates, setUnavailableDates] = useState([])
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

  useEffect(() => {
    if (properties) {
      getUnavailableDates()
    }
  }, [properties])

  function getUnavailableDates() {
    let dates = []
    properties.map(property => {
      property.bookings.map(bookings => {
        bookings.datesBooked.map((date, index) => {
          dates.push(date)
          // console.log(index, String(date));
        })
      })
    })
    setUnavailableDates(dates)
  }

  const getDateRange = (startDate, endDate) => {
    let dates = []
    const theDate = new Date(startDate)
    while (theDate <= endDate) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    return dates
  }

  function filter(data, locationData, checkboxData) {
    
    let newProperties = []
    newProperties = data.filter(property => {
      return property.location.toLowerCase().includes(locationData.toLowerCase())
    })
    amenities.forEach(amenityName => {
      if (checkboxData[amenityName] === true) {
        // console.log(amenityName)
        newProperties = newProperties.filter(property => {
          return property.amenities.find(amenity => amenity.amenityName === amenityName).amenityValue === true
        })
      }
    })
    getDateRange(startDate, endDate).forEach(date => {
      let newArray = []
      newProperties = newProperties.filter(property => {
        if (property.bookings && property.bookings.length) {
          property.bookings.map(booking => {
            let isAvailable = []
            for (let i = 0; i < booking.datesBooked.length; i++) {
              const bookedDates = String(moment(booking.datesBooked[i]).toDate()).substr(0, 15)
              const userDate = String(date).substr(0, 15)
              // console.log('bookedDates', bookedDates);
              // console.log('userDate', userDate);
              if(userDate === bookedDates) {
                isAvailable.push('not')
                    // break
                } else {
                  isAvailable.push('available')
                }
              }
              console.log(isAvailable);
              if(!isAvailable.includes('not')){
                console.log('property', property);
                return newArray.push(property)
                

              } 
              return
          })
        } else {
          newArray.push(property)
        }
        console.log('1', newProperties);
      })
      console.log('2', newProperties);
      console.log('martha', newArray);
      updateProperties(newArray)
    })
    console.log('3', newProperties);
    // updateProperties(newProperties)
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