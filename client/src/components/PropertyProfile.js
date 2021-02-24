import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { isCreator } from '../lib/auth.js'
import Properties from '../../../models/properties.js'
import { getLoggedInUserId } from '../lib/auth.js'
import BookingForm from './BookingForm.js'
import 'react-edit-text/dist/index.css'
export default function Singleproperty({ match, history }) {
  const [property, updateProperties] = useState([])
  const [error, updateError] = useState('')
  const [text, setText] = useState('')
  const token = localStorage.getItem('token')
  const LoggedInUserId = getLoggedInUserId()
  const [errorState, updateErrorState] = useState(false)
  const [commentSuccess, updateCommentSuccess] = useState(false)
  const [editCommentSuccess, updateEditCommentSuccess] = useState(false)
  useEffect(() => {
    async function fetchData() {
      if (match.params.propertyId) {
        try {
          const { data } = await axios.get(`/api/properties/${match.params.propertyId}`)
          updateProperties(data)
          if (!data) {
            updateError('Could not find a property with that ID')
          }
        } catch (err) {
          console.log(err)
          updateError('Unable to fetch data')
        }
      }
    }
    fetchData()
  }, [])
  if (!property.name) {
    return null
  }
  function handleComment() {
    console.log('WORK PLEASE! from start')
    try {
      axios.post(`/api/properties/${match.params.propertyId}/comment`, { text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          setText('')
          console.log('WORK PLEASE! 1')
          updateProperties(resp.data)
          console.log('WORK PLEASE!2')
          updateCommentSuccess(true)
          console.log('WORK PLEASE!3')
          updateEditCommentSuccess(false)
          console.log('hello post')
        })
    } catch (err) {
      console.log('WORK PLEASE! error1')
      updateErrorState(true)
      updateCommentSuccess(false)
      updateEditCommentSuccess(false)
      console.log('WORK PLEASE!', err)
    }
  }
  async function handleUpdateComment(commentId) {
    //console.log(text)
    try {
      await axios.put(`/api/properties/${match.params.propertyId}/comment/${commentId}`, { text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          setText('')
          updateEditCommentSuccess(true)
          updateProperties(resp.data)
        })
    } catch (err) {
      updateEditCommentSuccess(false)
      console.log('error', err)
    }
  }
  console.log('test:', editCommentSuccess)
  function handleDeleteComment(commentId) {
    try {
      axios.delete(`/api/properties/${match.params.propertyId}/comment/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          updateProperties(resp.data)
          updateEditCommentSuccess(false)
        })
    } catch (err) {
      updateErrorState(true)
      updateError(err.response.data.message)
      updateCommentSuccess(false)
      updateEditCommentSuccess(false)
    }
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
          <div className='imagegallery columns mt-4 is-multiline'>
            {
              property.images.map((image, index) => {
                return <div key={index} className='column is-quarter'><img src={image} /></div>
              })
            }
          </div>
          {property.comments.length > 0 && <h5 className='title is-5 mt-4 mb-2'>Reviews</h5>}
          {property.comments.length > 0 &&
            property.comments.map((comment, index) => {
              return <article key={index} className="media">
                <div className="media-content">
                  {isCreator(comment.user._id) && <div className="content">
                    <h6>{comment.user.first_name} says:</h6>
                    <input
                      className="input"
                      type='text'
                      name="textbox1"
                      defaultValue={comment.text}
                      onChange={event => setText(event.target.value)}
                    />
                  </div>}
                  {editCommentSuccess ? <div className="notification is-success is-light">Your review edit has been saved.</div> : <div className="notification is-hidden"></div>}
                  {!isCreator(comment.user._id) && <div className="content">
                    <h6>{comment.user.first_name} says:</h6>
                    <p>{comment.text}</p>
                  </div>}
                </div>
                {isCreator(comment.user._id) && <div className="media-right">
                  <button
                    className="delete"
                    onClick={() => handleDeleteComment(comment._id)}>
                  </button>
                </div>}
                {isCreator(comment.user._id) && <div className="media-right">
                  <button
                    className="edit"
                    onClick={() => handleUpdateComment(comment._id)}>Edit
                    </button>
                </div>}
              </article>
            })
          }
          {isCreator(property.host._id) ?
            <Link className='button is-primary' to={`/updateproperty/${property._id}`}>Edit</Link>
            :
            <BookingForm
              propertyId={match.params.propertyId}
              maxNumberOfGuests={property.maxNumberOfGuests}
              property={property}
            />}
          <br />
          <article className="media">
            <div className="media-content">
              <h3>Review:</h3>
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
          {errorState ? <div className="notification is-danger">We could not post your review. Please try again.</div> : <div className="notification is-hidden"></div>}
          {commentSuccess ? <div className="notification is-success is-light">Your review has been saved.</div> : <div className="notification is-hidden"></div>}
        </div>
      </div>
    </div>
  </>
}