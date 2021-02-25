import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link, useLocation } from 'react-router-dom'
import SearchForm from './SearchForm.js'
import moment from 'moment'


export default function App() {

  const searchState = useLocation()
  const resultsPerPage = 5
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
        setStartDate(searchState.state.startDate.startDate)
        setEndDate(searchState.state.endDate.endDate)
      }
      try {
        const { data } = await axios.get('api/properties')
        updateProperties(data)
        updateLoading(false)
        if (searchState.state) {
          filter(data,
            searchState.state.locationData.locationData,
            searchState.state.checkboxData.checkboxData,
            searchState.state.startDate.startDate,
            searchState.state.endDate.endDate
          )
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

  function filter(data, locationData, checkboxData, startDate, endDate) {

    let newProperties = []
    newProperties = data.filter(property => {
      return property.location.toLowerCase().includes(locationData.toLowerCase())
    })
    amenities.forEach(amenityName => {
      if (checkboxData[amenityName] === true) {
        newProperties = newProperties.filter(property => {
          return property.amenities.find(amenity => amenity.amenityName === amenityName).amenityValue === true
        })
      }
    })



    newProperties = newProperties.filter(property => {
      let isAvailable = true
      if (property.bookings) {
        property.bookings.forEach((booking) => {
          booking.datesBooked.forEach((bookedDate) => {
            const bookedDateString = String(moment(bookedDate).toDate()).substr(0, 15)
            getDateRange(startDate, endDate).forEach(searchedDate => {
              const searchedDateString = String(searchedDate).substr(0, 15)
              if (bookedDateString === searchedDateString) {
                isAvailable = false
              }
            })
          })
        })
      }
      if (isAvailable) {
        return property
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
      <div className='column is-one-quarter mr-4'>

      <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>
          Refine search</h5>
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

      <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>
          Properties</h5>

        <Paginate
          onChange={handlePageChange}
          pageNum={pageNum}
          totalResults={properties.length}
          resultsPerPage={resultsPerPage}
        />
        <div className='properties'>
          {properties.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((property, index) => {

            return <div key={index} className='box columns mb-6'>
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
                      {amenity.amenityValue ?
                        <i className='fas fa-check-circle mr-2'></i>
                        :
                        <i className='fas fa-times-circle mr-2'></i>}
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

