import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { isCreator } from '../lib/auth.js'
import properties from '../../../models/properties.js'
import { getLoggedInUserId } from '../lib/auth.js'
import BookingForm from './BookingForm.js'




export default function Singleproperty({ match, history }) {
  const [property, updateproperties] = useState([])
  const [error, updateError] = useState('')
  const [text, setText] = useState('')
  const token = localStorage.getItem('token')
  const LoggedInUserId = getLoggedInUserId()
  const commentId = match.params.commentId

  useEffect(() => {
    async function fetchData() {
      console.log(match.params.propertyId)
      if (match.params.propertyId) {
        try {
          const { data } = await axios.get(`/api/properties/${match.params.propertyId}`)
          updateproperties(data)
          //console.log(data)
          if (!data) {
            updateError('Could not find a property with that ID')
          }
        } catch (err) {
          console.log(err)
          updateError('Unable to fetch data')
        }
      } else {
        //history.push('/')
      }
    }
    fetchData()
  }, [])



  async function handleDelete() {
    await axios.delete(`/api/properties/${match.params.propertyId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    history.push('/')
  }


  function handleComment() {
    axios.post(`/api/properties/${match.params.propertyId}/comment`, { text }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        setText('')
        updateproperties(resp.data)
      })
  }

  function handleDeleteComment(commentId) {
    console.log(commentId)
    axios.delete(`/api/properties/${match.params.propertyId}/comment/${match.params.commentId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        updateproperties(resp.data)
      })
  }

  if (!property.name) {
    return null
  }

  return <>

    <section className='hero has-background-grey-light is-primary is-fullheight-with-navbar'
      style={{
        backgroundImage: `url(${property.images[0] ? property.images[0] : 'http://placehold.it/400x400'})`
      }}>
      <div className='hero-body columns is-centered'>
        <div className='box column is-half has-text-centered'>
          <h4 className='title is-4 mb-2 has-text-black'>{property.name}</h4>
          <p>Location: {property.location}</p>
        </div>
      </div>
    </section>

    <div className='container px-6 pt-6 pb-6'>
      <div className='columns'>
        <div className='column'>

          <p>Summary: {property.summary}</p>

          <p>Place type: {property.isEntirePlace ? 'Entire place' : 'Room only'} </p>
          <p>Price per night: {property.pricePerNight}</p>
          <p>Check in: {property.checkInTime}</p>
          <p>Check out: {property.checkOutTime}</p>
          <p>House rules: {property.houseRules}</p>
          <p>Cancellation Policy: {property.cancellationPolicy}</p>

          <h5 className='title is-5 mt-4 mb-2'>Amenities</h5>
          {property.amenities.length > 0 &&
            property.amenities.map((amenity, index) => {
              return <p key={index}>
                {amenity.amenityValue ? '✅ ' : '❌ '}
                {amenity.amenityName}
              </p>
            })
          }


          <h5 className='title is-5 mt-4 mb-2'>Gallery</h5>
          {property.images.length > 1 &&
            property.images.map((image, index) => {
              return <img key={index} src={image} width='150' />
            })
          }



          {property.comments.length > 0 && <h5 className='title is-5 mt-4 mb-2'>Comments</h5>}
          {property.comments.length > 0 &&
            property.comments.map((comment, index) => {
              return <article key={index} className="media">
                <div className="media-content">
                  <div className="content">
                    <h6>{comment.user.first_name} says:</h6>
                    <p>{comment.text}</p>
                  </div>
                </div>
                {isCreator(comment.user._id) && <div className="media-right">
                  <button
                    className="delete"
                    onClick={() => handleDeleteComment(comment._id)}>
                  </button>
                </div>}
              </article>
            })
          }

          <BookingForm
            propertyId={match.params.propertyId}
            maxNumberOfGuests={property.maxNumberOfGuests}></BookingForm>


          <h4>Review:</h4>

          <article className="media">
            <div className="media-content">
              <div className="field">
                <p className="control">
                  <textarea
                    className="textarea"
                    placeholder="Make a comment.."
                    onChange={event => setText(event.target.value)}
                    value={text}
                  >
                    {text}
                  </textarea>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button
                    onClick={handleComment}
                    className="button is-info"
                  >
                    Submit
                  </button>
                </p>
              </div>
            </div>
          </article>

        </div>

      </div>


    </div>
  </>
}


