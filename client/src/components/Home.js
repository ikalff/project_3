import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm.js'

export default function Home() {


  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  return <section className='hero home is-fullheight-with-navbar'>
    <div className='hero-body columns is-centered'>
      <div className='box column is-half pt-5 pb-5 px-5'>
        <h2 className='title brandfont has-text-info is-size-2'>
          Search for a property:</h2>
        <SearchForm
          formLocation='home'
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />
      </div>
    </div>
  </section>

}