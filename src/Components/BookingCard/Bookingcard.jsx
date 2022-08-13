import React from 'react'
import Button from '../Button/Button'
import './Bookingcard.css'

const Bookingcard = () => {
  return (
   <div className='card'>
    <div className='name'>Name</div>
    <div className='number'>Number</div>
    <Button type="primary" label="Check in" ></Button>
   </div>
  )
}

export default Bookingcard