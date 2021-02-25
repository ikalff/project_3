import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Paginate from './Paginate'

export default function UserBooking(props) {

  const userId = props.userId

  const [userBookings, updateUserBookings] = useState([])

  const [bookingsLoading, updateBookingsLoading] = useState(true)

  const resultsPerPage = 3
  const [pageNum, updatePageNum] = useState(1)

  useEffect(() => {

    try {

      axios.get('/api/properties')
        .then(({ data }) => {

          const allPropertiesData = data

          const filteredBookings = allPropertiesData.filter(item => item.bookings.userId === userId)
          console.log(filteredBookings)
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

  return <div className="section">
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
            <h4 className='title is-4 mb-2 mt-2'>{item.name}</h4>
            <h5 className='title is-4 mb-2 mt-2'>{item.bookings.checkInDate}</h5>
            <h5 className='title is-4 mb-2 mt-2'>{item.bookings.checkOutDate}</h5>
          </div>
          <div className="column">
            <img width="200" src={item.images[0] ? item.images[0] : 'http://placehold.it/400x400?text=no%20image%20available'} />
          </div>

        </div>
      })}
    </div>

  </div>

}


