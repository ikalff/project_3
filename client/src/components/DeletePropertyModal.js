import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import axios from 'axios'

export default function DeletePropertyModal({ deleteModal, setDeleteModal, property}) {
  async function deleteProperty() {
    const propertyData = property
    const token = localStorage.getItem('token')
    try {
      await axios.delete(`/api/properties/${propertyData._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setDeleteModal('modal')
    } catch (err) {
      
    }
  
  } 


  return <div className={deleteModal}>
    <div className="modal-background" onClick={() => {
      setDeleteModal('modal')
    }}></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title">Are you sure you want to delete this property?</p>
        <button className="delete" aria-label="close" onClick={() => {
          setDeleteModal('modal')
        }}></button>
      </header>
      <section className="modal-card-body has-text-centered">
        <Link to='/' >
          <button className="button is-danger" onClick={deleteProperty}>Delete Property</button>
        </Link>
      </section>
    </div>
  </div>
}