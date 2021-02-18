import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link } from 'react-router-dom'

export default function App() {

  const [properties, updateproperties] = useState([])
  const [pageNum, updatePageNum] = useState(1)
  const [loading, updateLoading] = useState(true)
  const resultsPerPage = 3

  useEffect(() => {
    axios.get('api/properties')
      .then(({ data }) => {
        updateproperties(data)
        updateLoading(false)
      })
  }, [])

  function handleChange(newValue) {
    updatePageNum(newValue)
  }


  if (loading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }


  return <div className='container px-6 pt-6 pb-6'>


    <h2 className='title is-2 mb-2'>Properties</h2>

    <Paginate
      onChange={handleChange}
      pageNum={pageNum}
      totalResults={properties.length}
      resultsPerPage={resultsPerPage}
    />

    <div className='properties'>
      {properties.slice((pageNum - 1) * resultsPerPage, ((pageNum - 1) * resultsPerPage) + resultsPerPage).map((property, index) => {
        return <div key={index} className='box columns'>
          <div className='column'>
            <Link to={'/properties/' + property._id}><img src={property.images.main ? property.images.main : 'http://placehold.it/400x400?text=no%20image%20available'} /></Link>
          </div>
          <div className='column'>
            <h4 className='title is-4 mb-2'>{property.name}</h4>
            <p>Location: {property.location}</p>
            <p>Summary: {property.summary}</p>

            <Link className='button is-primary mt-5' to={'/properties/' + property._id}>More details</Link>

          </div>
        </div>

      })}
    </div>
  </div>
}