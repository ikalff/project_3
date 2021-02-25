import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'

export default function UserBooking(props) {
  const userId = props.userId
  const [userBookings, updateUserBookings] = useState([])
  const [bookingsLoading, updateBookingsLoading] = useState(true)
  const resultsPerPage = 3
  const [pageNum, updatePageNum] = useState(1)

  const [error, updateError] = useState('')
  const [deleteErrorState, updateDeleteErrorState] = useState(false)
  const [deleteSuccessState, updateDeleteSuccessState] = useState(false)

  const token = localStorage.getItem('token')


  useEffect(() => {
    try {
      axios.get('/api/properties')
        .then(({ data }) => {
          const allPropertiesData = data
          console.log('all prop data[0]', allPropertiesData[0])
          //console.log('user', allPropertiesData[0].bookings[0].user)
          const filteredBookings = []
          allPropertiesData.forEach(property => {
            property.bookings.forEach(booking => {
              if (booking.user._id === userId) {
                filteredBookings.push(booking)
              }
            })
          })
          console.log('filtered bookings', filteredBookings)
          updateUserBookings(filteredBookings)
          updateBookingsLoading(false)
        })
    } catch (err) {
      console.log('Error:', err)
    }
  }, [])
  if (bookingsLoading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }
  function handlePageChange(newValue) {
    updatePageNum(newValue)

  }

  function handleDeleteBooking(event, item) {
    event.preventDefault()
    console.log("hello I am inside your handle delete booking")

    console.log('item in handle delete', item)
    console.log(`/api/property/${item.propertyId}/bookings/${item._id}`)

    try {
      axios.delete(`/api/bookings/${item.propertyId}/${item._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          //history.push(`/users/${userId}`)
          updateDeleteSuccessState(true)
          updateDeleteErrorState(false)
        })

    } catch (err) {
      
      updateError(err.response.data.message)
      updateDeleteErrorState(true)
      updateDeleteSuccessState(false)
    }
  }



  return <div className="section">

    {deleteErrorState ? <div className="notification is-danger">{error}</div> : <div className="notification is-hidden"></div>}

    {deleteSuccessState ? <div className="notification is-success is-light">Your booking has been cancelled.</div> : <div className="notification is-hidden"></div>}

    <div className='block mb-4'>
      <h2 className='title is-4 mb-4'>Your Bookings</h2>
      <Paginate
        onChange={handlePageChange}
        pageNum={pageNum}
        totalResults={userBookings.length}
        resultsPerPage={resultsPerPage}
      />
    </div>

    <div>
      {userBookings.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((item, index) => {
        return <div className='box columns mt-4' key={index}>
          <div className="column">
            <h4 className='title is-4 mb-2 mt-2'>{item.propertyName}</h4>
            <p className='title is-4 mb-2 mt-2'>Check In: {String(new Date(item.checkInDate)).substr(0,15)}</p>
            <p className='title is-4 mb-2 mt-2'>Check Out: {String(new Date(item.checkOutDate)).substr(0,15)}</p>
            <button className="button is-danger" onClick={(event) => {
              handleDeleteBooking(event, item)
              console.log('item in button', item)
            }}>Delete Booking</button>
          
          </div>

        </div>
      })}
    </div>

  </div>
}