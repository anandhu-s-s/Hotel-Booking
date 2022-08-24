import React from 'react'
import Button from '../Button/Button'
import './Bookingcard.css'

const BookingcardOut = () => {
  return (
   <div className='card'>
    <div className='name'>Name</div>
    <div className='number'>Number</div>
    <Button type="primary" label="Check Out" ></Button>
   </div>
  )
}

export default BookingcardOut