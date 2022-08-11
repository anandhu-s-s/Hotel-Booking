import React from 'react'
import './Newbooking.css'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router-dom'

const Newbooking = () => {
  return (
    <div className='container2'>
       <div className='head'>New Booking</div>
        <div className='contents'>
           <Input label="Guest First Name" type="text"/>
           <Input label="Guest Last Name" type="text"/>
           <Input label="Checked in Date" type="date"/>
           <Input label="Checked Out Date" type="date"/>
           <Input label="Number of Adults" type="number"/>
           <Input label="Number of children" type="number"/>
           <Input label="Rooms"/>
            <div className='button'>
                <button className='get'><Link to={'booking'} >Get Available Rooms</Link></button>
                
            </div>
        </div>
    </div>
  )
}

export default Newbooking