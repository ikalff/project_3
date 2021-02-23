import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm.js'

export default function Home() {
  return <section className='hero home is-fullheight-with-navbar'>
    <div className='hero-body columns is-centered'>
      <div className='box column is-half'>
        <p className='title'>Welcome to ArrivR</p>
        <p className='subtitle'>Search for a property:</p>
        <SearchForm formLocation='home' />
      </div>
    </div>
  </section>

}