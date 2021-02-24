import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

export default function DateRangePicker({ startDate, setStartDate, endDate, setEndDate, unavailableDates }) {
  const handleStartDateChange = (date) => {
    setStartDate(date)
  }
  const handleEndDateChange = (date) => {
    setEndDate(date)
  }

  function disableUnavailable() {
    unavailableDates.map(date => {
      date === date
    })
  }


  return <MuiPickersUtilsProvider utils ={MomentUtils}>
    <DatePicker
      label='Check in'
      value={startDate} 
      onChange={handleStartDateChange} 
      variant='inline'
      disableToolbar
      animateYearScrolling
      disablePast
      autoOk
      // shouldDisableDate={disableUnavailable}

    />
    <DatePicker 
      label='Check out'
      value={endDate} 
      onChange={handleEndDateChange} 
      variant='inline'
      disableToolbar
      animateYearScrolling
      disablePast
      autoOk
      // shouldDisableDate={disableUnavailable}
    />
  </MuiPickersUtilsProvider>
}