import React, { useState } from 'react'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

export default function DateRangePicker({ startDate, setStartDate, endDate, setEndDate }) {
  const handleStartDateChange = (date) => {
    setStartDate(date)
  }
  const handleEndDateChange = (date) => {
    setEndDate(date)
  }


  return <MuiPickersUtilsProvider utils ={MomentUtils}>
    <DatePicker
      label='Select start date'
      value={startDate} 
      onChange={handleStartDateChange} 
      variant='inline'
      disableToolbar
      animateYearScrolling
      disablePast
      autoOk

    />
    <DatePicker 
      label='Select end date'
      value={endDate} 
      onChange={handleEndDateChange} 
      variant='inline'
      disableToolbar
      animateYearScrolling
      disablePast
      autoOk
    />
  </MuiPickersUtilsProvider>
}