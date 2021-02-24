import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

export default function DateRangePicker({ startDate, setStartDate, endDate, setEndDate, unavailableDates }) {
  const handleStartDateChange = (date) => {
    setStartDate(date._d)
  }
  const handleEndDateChange = (date) => {
    setEndDate(date._d)
  }

  function disableUnavailable() {
    // unavailableDates.map(date => {
    //   return false
    // })
    return false
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
      shouldDisableDate={disableUnavailable}
      // shouldDisableDate={false}

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