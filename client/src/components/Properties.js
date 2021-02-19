import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Paginate from './Paginate'
import { Link } from 'react-router-dom'

export default function App() {

  const resultsPerPage = 3
  const [properties, updateProperties] = useState([])
  const [pageNum, updatePageNum] = useState(1)
  const [loading, updateLoading] = useState(true)
  const amenities = ['Wifi', 'Pet friendly', 'Wheelchair Accessible', 'Washing machine', 'Near a beach']


  const [formData, updateFormData] = useState({
    location: '',
    Wifi: false,
    'Pet friendly': false,
    'Wheelchair Accessible': false,
    'Washing machine': false,
    'Near a beach': false
  })


  useEffect(() => {
    try {
      axios.get('api/properties')
        .then(({ data }) => {
          updateProperties(data)
          console.log(data)
          updateLoading(false)
        })
    } catch (err) {
      console.log(err)
    }
  }, [])

  function handlePageChange(newValue) {
    updatePageNum(newValue)
  }


  function handleChange(event) {
    const newFormData = formData
    if (event.target.type === 'text') {
      newFormData['location'] = event.target.value
    } else if (event.target.type === 'checkbox') {
      newFormData[event.target.name] = event.target.checked
    }
    console.log(newFormData)
    updateFormData(newFormData)
  }




  function filter(event) {
    event.preventDefault()

    try {
      axios.get('api/properties')
        .then(({ data }) => {
          //console.log(data)
          let newProperties = []

          //console.log('Initial load')
          //console.log(newProperties)

          newProperties = data.filter(property => {
            return property.location.toLowerCase().includes(formData.location.toLowerCase())
          })


          //console.log('after location')
          //console.log(newProperties)

          amenities.forEach(amenityName => {

            if (formData[amenityName] === true) {
              console.log(amenityName)
              newProperties = newProperties.filter(property => {
                return property.amenities.find(amenity => amenity.amenityName === amenityName).amenityValue === true
              })
            }


          })





          //console.log('after wifi')
          //console.log(newProperties)

          updateProperties(newProperties)


        })
    } catch (err) {
      console.log(err)
    }



  }







  if (loading) {
    return <div className='loading'>
      <img src='https://i.ibb.co/xDS2vQc/loading.gif' />
    </div>
  }


  return <div className='container px-6 pt-6 pb-6'>
    <div className='columns'>
      <div className='column'>

        <form onSubmit={filter}>

          <div className="field">
            <label className="label">Location</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="location"
                onChange={handleChange}
                value={formData.location}
              />
            </div>
          </div>
          {
            amenities.map((amenity, index) => {
              return <div key={index} className="field">
                <label className="label">{amenity}</label>
                <div className="control">
                  <input
                    type="checkbox"
                    name={amenity}
                    onChange={handleChange}
                    value={formData[amenity]}
                  />
                </div>
              </div>

            })

          }




          <button>Filter</button>
        </form>


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