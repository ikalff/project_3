import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return <section className='hero home is-fullheight-with-navbar'>
    <div className='hero-body columns is-centered'>
      <div className='box column is-half'>
        <p className='title'>Welcome to ArrivR</p>
        <p className='subtitle'>Search for a property:</p>
        <Link className='button is-primary' to='/properties'>All listings</Link>
      </div>
    </div>
  </section>

}