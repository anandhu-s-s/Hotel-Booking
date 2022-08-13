import React from 'react'
import './Bookings.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button';
import Details from '../../Components/Bookingdetails/Details';
const Bookings = () => {
  return (
   <div className="container3">
     <Header/>
    <div className="contents1">
        <div className="head">Bookings</div>
        <div className="head2">New Booking</div>
    
    </div>
    <div className="contents2">
      <input className="input2" type="number" placeholder='(Type Guest Name)' />
      <input className="input2" type="number" placeholder='-Any Status-' />
      <Button type="primary" label="Search" ></Button>
    </div>
    <div className="footer">
    <div className="first">
        
        <div className="bk">Guest Last Name</div>
        <div className="bk">Guest First Name</div>
        <div className="bk">Room Number</div>
        <div className="bk">CheckIn Date</div>
        <div className="bk">CheckOut Date</div>
        <div className="bk">Status</div>
      
    </div>
    <Details a='Silva' b='Silva' c='101' d='10/11/2022' e='28/11/2022' f='In'/>
    <Details a='Silva' b='Silva' c='101' d='10/11/2022' e='28/11/2022' f='In'/>
    <Details a='Silva' b='Silva' c='101' d='10/11/2022' e='28/11/2022' f='In'/>
    
    </div>

    {/* <div className="footer">
      <div className="bk">Guest Last Name</div>
      <div className="bk">Guest First Name</div>
      <div className="bk">Room Number</div>
      <div className="bk">CheckIn Date</div>
      <div className="bk">CheckOut Date</div>
      <div className="bk">Status</div>
    </div> */}
   </div>
  )
}

export default Bookings