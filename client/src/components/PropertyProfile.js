import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { isCreator } from '../lib/auth.js'
import Properties from '../../../models/properties.js'
import { getLoggedInUserId } from '../lib/auth.js'
import BookingForm from './BookingForm.js'
import 'react-edit-text/dist/index.css'
import HostPropertyComponent from './HostPropertyComponent.js'
import bookings from '../../../controllers/bookings.js'

export default function Singleproperty({ match, history }) {
  const [property, updateProperties] = useState([])
  const [error, updateError] = useState('')
  const [text, setText] = useState('')
  const token = localStorage.getItem('token')
  const LoggedInUserId = getLoggedInUserId()
  const [errorState, updateErrorState] = useState(false)
  const [commentSuccess, updateCommentSuccess] = useState(false)
  const [editCommentSuccess, updateEditCommentSuccess] = useState(false)
  const [deleteSuccessState, updateDeleteSuccessState] = useState(false)
  const [deleteErrorState, updateDeleteErrorState] = useState(false)


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

  async function handleComment() {
    try {
      await axios.post(`/api/properties/${match.params.propertyId}/comment`, { text }, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          setText('')
          updateProperties(resp.data)
          updateCommentSuccess(true)
          updateEditCommentSuccess(false)
        })
    } catch (err) {
      console.log(err)
      updateError('Sorry, only hosts and those who have booked a stay can leave a review!')
      updateCommentSuccess(false)
      updateEditCommentSuccess(false)
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
  //console.log('test:', editCommentSuccess)
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

  function handleDeleteBooking(event, item, bookingId) {
    event.preventDefault()
    console.log(`/api/bookings/${match.params.propertyId}/${bookingId}`)
    try {
      axios.delete(`/api/bookings/${match.params.propertyId}/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(resp => {
          updateDeleteSuccessState(true)
          updateDeleteErrorState(false)
        })
    } catch (err) {
      updateDeleteErrorState(true)
      updateDeleteSuccessState(false)
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
        <div className='box column is-half has-text-centered pt-5 pb-5 px-5'>


          <h5 className='title brandfont has-text-primary is-size-4 mb-3'>
            <i className='fas fa-map-marker-alt mr-2'></i>  {property.location}
          </h5>

          <h2 className='title brandfont has-text-info is-size-2 mb-2'>{property.name}</h2>




          <p>

            {property.isEntirePlace ?
              <span><i className='fas fa-home fa-lg mr-2 has-text-primary'></i>Entire place </span>
              :
              <span><i className='fas fa-bed fa-lg mr-2 has-text-primary'></i>Private room </span>
            }

            for <span className='title brandfont has-text-primary is-size-4 ml-1'>£{property.pricePerNight}</span> Per night



          </p>



        </div>
      </div>

    </section >
    <div className='container px-6 pt-6 pb-6'>
      <div className='columns'>
        <div className='column'>
          <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Summary:</h5>
          <p>{property.summary}</p>

          <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>House rules:</h5>

          <p>Place type: {property.isEntirePlace ? 'Entire place' : 'Room only'} </p>
          <p>Price per night: {property.pricePerNight}</p>
          <p>Check in: {property.checkInTime}</p>
          <p>Check out: {property.checkOutTime}</p>
          <p>{property.houseRules}</p>

          <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Amenities</h5>
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

          <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Cancellation Policy:</h5>
          <p>{property.cancellationPolicy}</p>


          <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Gallery</h5>
          <div className='imagegallery columns mt-4 is-multiline'>
            {
              property.images.map((image, index) => {
                return <div key={index} className='column is-quarter'><img src={image} /></div>
              })
            }
          </div>
          {property.comments.length > 0 && <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Reviews</h5>}
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
            <Link className='button is-primary mb-4' to={`/updateproperty/${property._id}`}>Edit property</Link>
            :
            <> <Link className='button is-primary is-light mb-4' to={{
              pathname: `/host/${property.host._id}`,
              state: {
                hostId: property.host._id
              }

            }}>Meet the host</Link>
              <BookingForm
                propertyId={match.params.propertyId}
                maxNumberOfGuests={property.maxNumberOfGuests}
                property={property}
              /> </>}
          <br />
          {isCreator(property.host._id) && <div className="content">
            <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Bookings:</h5>
            {property.bookings.length > 0 &&
              property.bookings.map((booking, index) => {
                return <div key={index} className="box columns mt-4">
                  <div className="column">
                    <h5>Name: {booking.user.first_name} {booking.user.last_name}</h5>
                    <p>Email: {booking.user.email}</p>
                    <p>Check In: {String(new Date(booking.checkInDate)).substr(0, 15)}</p>
                    <p>Check Out: {String(new Date(booking.checkOutDate)).substr(0, 15)}</p>
                    <p>Number of Guests: {booking.numberOfGuests}</p>
                    <p>id: {booking._id}</p>
                    <h6>Remember to contact {booking.user.first_name} for payment and more details on their stay!</h6>
                    <button className="button is-danger" onClick={(event, item) => {
                      handleDeleteBooking(event, item, booking._id)
                    }}>Delete Booking</button>
                    {deleteSuccessState ? <div className="notification is-success mt-3">Booking Successfully Deleted.</div> : <div className="notification is-hidden"></div>}
                  </div>
                </div>
              })
            }
          </div>}
          <article className="media">
            <div className="media-content box">
              <h5 className='title brandfont has-text-info is-size-3 mb-1 mt-4'>Review:</h5>
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
                    className="button is-primary"
                  >
                    Submit
                    </button>
                </p>
              </div>
            </div>
          </article>
          {error && <div className='box mt-4 has-background-danger has-text-white'>{error}</div>}
          {errorState ? <div className="notification is-danger">We could not post your review. Please try again.</div> : <div className="notification is-hidden"></div>}
          {commentSuccess ? <div className="notification is-success is-light">Your review has been saved.</div> : <div className="notification is-hidden"></div>}
        </div>
      </div>
    </div>
  </>
}