import React, { useEffect, useState } from 'react'
import './Bookings.css'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button';
import Details from '../../Components/Bookingdetails/Details';
import { Link } from 'react-router-dom';

const Bookings = () => {

  const [ data,setData]= useState([]);


  async function getData(){
    const respond=await fetch("https://localhost:7149/NewBooking",{
    method:'GET',
    headers:{
      "Content-Type":'application/json',
  
    }
  
  })
  return await respond.json();
    
  
  }
  useEffect(()=>{
    const userData=async ()=>{
    const respond=await getData();
    setData(respond);
  };
  userData();
  },[]);
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
    {data.map((value,index)=>
    (
    <Details a={value.lastName} b={value.firstName} c={""} d={value.checkIn} e={value.checkOut} f={""}/>

    ))}
    
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