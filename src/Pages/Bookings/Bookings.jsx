import React from 'react'
import './Bookings.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button';
import Details from '../../Components/Bookingdetails/Details';
import { Link } from 'react-router-dom';
const Bookings = () => {
  return (
   <div className="container3">
     <Header/>
    <div className="contents1">
        <div className="head">Bookings</div>
        <div> <Link to={'/newbooking'} className='head2'>New Booking</Link> </div>
    
    </div>
    <div className="contents2">
      <input className="input2" type="text" placeholder='(Type Guest Name)' />
     
      <select className='select-tool' name="" id=""><option value="">-Any Status-</option></select>
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