import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link } from 'react-router-dom'

export default function HostPropertyComponent(props) {

  //! need a way to get the id of the host in question from the link props
  const userId = props.userId 

  const [hostProperties, updateHostProperties] = useState([])
  const [hostName, updateHostName] = useState('')

  const [propertiesLoading, updatePropertiesLoading] = useState(true)
  const [nameLoading, updateNameLoading] = useState(true)

  const resultsPerPage = 3
  const [pageNum, updatePageNum] = useState(1)

  useEffect(() => {

    try {

      axios.get('/api/properties')
        .then(({ data }) => {

          const allPropertiesData = data

          const filteredProperties = allPropertiesData.filter(item => item.host._id === userId)

          updateHostProperties(filteredProperties)

          updatePropertiesLoading(false)

        })

    } catch (err) {
      console.log('Error:', err)
    }
  }, [])

  useEffect(() => {

    try {

      axios.get(`/api/host/${userId}`)
        .then(({ data }) => {

          updateHostName(data)
          updateNameLoading(false)

        })

    } catch (err) {
      console.log('Error:', err)
    }
  }, [])

  if (propertiesLoading || nameLoading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }

  function handlePageChange(newValue) {
    updatePageNum(newValue)
  }

  return <div className="section">
    <div className='block mb-4'>

      <div className='title is-2 mb-2 mt-2'>Meet {hostName}!</div>

      <div className='title is-4 mb-2 mt-2'>{hostName} lists these other properties too - take a look. </div>

      {/* Add host bio to host users and place here */}

      <Paginate
        onChange={handlePageChange}
        pageNum={pageNum}
        totalResults={hostProperties.length}
        resultsPerPage={resultsPerPage}
      />
    </div>

    <div>

      {hostProperties.map((item, index) => {

        return <div className='box columns mt-4' key={index}>

          <div className="column">
            <h4 className='title is-4 mb-2 mt-2'>{item.name}</h4>
            <button className="button is-primary is-light mb-2">View this property</button>
          </div>
          <div className="column">
            <img width="200" src={item.images[0] ? item.images[0] : 'http://placehold.it/400x400?text=no%20image%20available'} />
          </div>

        </div>
      })}
    </div>

  </div>

}