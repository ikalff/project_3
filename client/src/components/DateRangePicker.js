import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

export default function DateRangePicker({ location, startDate, setStartDate, endDate, setEndDate, unavailableDates }) {


  const handleStartDateChange = (date) => {
    if (location === 'bookingform') {
      setStartDate(date)
    } else {
      setStartDate(date._d)
    }
  }
  const handleEndDateChange = (date) => {
    if (location === 'bookingform') {
      setEndDate(date)
    } else {
      setEndDate(date._d)
    }
  }

  function disableUnavailable() {
    // unavailableDates.map(date => {
    //   return false
    // })
    return false
  }


  return <MuiPickersUtilsProvider utils={MomentUtils}>
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