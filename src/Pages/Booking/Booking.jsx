import React from 'react'
import Input from '../../Components/Input/Input'
import './Booking.css'
const Booking = () => {
  return (
    <div className='container2'>
    <div className='head'>Booking</div>
     <div className='contents'>
        <Input label="Guest First Name" type="text"/>
        <Input label="Guest Last Name" type="text"/>
        <Input label="Checked in Date" type="date"/>
        <Input label="Checked Out Date" type="date"/>
        <Input label="Number of Adults" type="number"/>
        <Input label="Number of children" type="number"/>
        <Input label="Rooms"/>
         <div className='button'>
             <button className='get'>Get Available Room</button>
             <button className='book'>Book Room</button>
             <button className='back'>Back</button>
         </div>
     </div>
 </div>
  )
}

export default Booking