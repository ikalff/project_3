import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { isOwner } from '../lib/auth.js'


export default function Singleproperty({ match, history }) {
  const [property, updateproperties] = useState([])
  const [error, updateError] = useState('')
  const [text, setText] = useState('')
  const token = localStorage.getItem('token')

  useEffect(() => {
    async function fetchData() {
      if (match.params.propertyid) {
        try {
          const { data } = await axios.get(`/api/properties/${match.params.propertyid}`)
          updateproperties(data)
          console.log(data)
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
    await axios.delete(`/api/deleteproperty/${match.params.propertyid}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    history.push('/')
  }


  function handleComment() {
    axios.post(`/api/comment/${match.params.propertyid}`, { text }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        setText('')
        updateproperties(resp.data)
      })
  }



  function handleDeleteComment(commentId) {
    axios.delete(`/api/comment/${match.params.propertyid}/delete/${commentId}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(resp => {
        updateproperties(resp.data)
      })
  }




  if (!property.user) {
    return null
  }



  return <div className='container'>
    <h1> properties </h1>
    <div className='properties'>

      <div className={error ? 'error' : 'hide'}>{error}</div>

      <div>
        <Link to={'/properties/' + property._id}><img src={property.images.main ? property.images.main : 'http://placehold.it/400x400?text=no%20image%20available'} /></Link>
        <h4 className='title is-4 mb-2'>{property.name}</h4>
        <p>Location: {property.location}</p>
        <p>Summary: {property.summary}</p>
        <Link className='button is-primary mt-5' to={'/properties/' + property._id}>More details</Link>
      </div>


      {property.user && <p>Posted by: {property.user.username}</p>}



      {isOwner(property.user._id) &&
        <>
          <Link className='button' to={`/updateproperty/${property._id}`}>Edit</Link>
          <button onClick={handleDelete}>Delete</button>
        </>
      }

      <p>Add a Comment:</p>


      <input type='text'
        onChange={event => setText(event.target.value)}
        placeholder="Make a comment.."
        value={text}
      >
      </input>
      <button
        onClick={handleComment}>Submit</button>


      <p>Comments:</p>

      {property.comments && property.comments.map((comment, index) => {
        return <div className='comment' key={index}>
          <p>{comment.text}</p>
          <p>By: {comment.user.username}</p>

          {isOwner(comment.user._id) &&

            <button onClick={() => handleDeleteComment(comment._id)}>delete</button>

          }

        </div>
      })
      }


    </div>


  </div>
}


