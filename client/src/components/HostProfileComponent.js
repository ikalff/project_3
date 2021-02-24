//!redirect here after log in? or login takes you to the page you were on when you logged in?

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Paginate from './Paginate'

export default function HostProfileComponent(props) {

  const userId = props.userId

  const [userProperties, updateUserProperties] = useState([])

  const [propertiesLoading, updatePropertiesLoading] = useState(true)

  const resultsPerPage = 3
  const [pageNum, updatePageNum] = useState(1)

  useEffect(() => {

    try {

      axios.get('/api/properties')
        .then(({ data }) => {

          const allPropertiesData = data

          const filteredProperties = allPropertiesData.filter(item => item.host._id === userId)

          updateUserProperties(filteredProperties)

          updatePropertiesLoading(false)

        })



    } catch (err) {
      console.log('Error:', err)
    }
  }, [])

  if (propertiesLoading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }

  function handlePageChange(newValue) {
    updatePageNum(newValue)
  }

  return <div className="section">
    <div className='block mb-4'>
      <h2 className='title is-4 mb-4'>Your properties</h2>

      <Paginate
        onChange={handlePageChange}
        pageNum={pageNum}
        totalResults={userProperties.length}
        resultsPerPage={resultsPerPage}
      />
    </div>

    <div>

      {userProperties.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((item, index) => {

        return <div className='box columns mt-4' key={index}>
          <div className="column">
            <h4 className='title is-4 mb-2 mt-2'>{item.name}</h4>
            <button className="button is-primary is-light mb-2">Edit property</button>
            <button className="button is-danger is-light mb-2">Delete property</button>
          </div>
          <div className="column">
            <img width="200" src={item.images[0] ? item.images[0] : 'http://placehold.it/400x400?text=no%20image%20available'} />
          </div>

        </div>
      })}
    </div>

    <div>
      <button className='button is-primary mt-5'>Add a property</button>
    </div>
  </div>

}



