import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link } from 'react-router-dom'

export default function HostPropertyComponent(props) {

  const hostId = props.location.state.hostId

  const [hostProperties, updateHostProperties] = useState([])
  const [hostName, updateHostName] = useState('')

  const [hostBio, updateHostBio] = useState('')

  const [propertiesLoading, updatePropertiesLoading] = useState(true)
  const [nameLoading, updateNameLoading] = useState(true)

  const resultsPerPage = 3
  const [pageNum, updatePageNum] = useState(1)

  useEffect(() => {

    try {

      axios.get('/api/properties')
        .then(({ data }) => {

          const allPropertiesData = data

          const filteredProperties = allPropertiesData.filter(item => item.host._id === hostId)

          updateHostProperties(filteredProperties)

          updatePropertiesLoading(false)

        })

    } catch (err) {
      console.log('Error:', err)
    }
  }, [])

  useEffect(() => {

    try {

      axios.get(`/api/host/${hostId}`)
        .then(({ data }) => {

          updateHostName(data[0])
          updateHostBio(data[1])
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

      <h4 className='title is-4 mb-2 mt-2 is-italic'>{hostBio}</h4>

      <div className='title is-4 mb-2 mt-2'>{hostName} lists these other properties too - take a look. </div>
     
      <Paginate
        onChange={handlePageChange}
        pageNum={pageNum}
        totalResults={hostProperties.length}
        resultsPerPage={resultsPerPage}
      />
    </div>

    <div>

      {hostProperties.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((item, index) => {

        return <div className='box columns mt-4' key={index}>

          <div className="column">
            <h4 className='title is-4 mb-2 mt-2'>{item.name}</h4>
            <Link to={`/properties/${item._id}`} className="button is-primary is-light mb-2">View this property</Link>
          </div>
          <div className="column">
            <img width="200" src={item.images[0] ? item.images[0] : 'http://placehold.it/400x400?text=no%20image%20available'} />
          </div>

        </div>
      })}
    </div>

  </div >

}