import React from 'react'
import './Newbooking.css'
import Input from '../../Components/Input/Input'
import {useNavigate } from 'react-router-dom'
import Button from '../../Components/Button/Button';

import Header from '../../Components/Header/Header'
import { useState } from 'react';
const Newbooking = () => {
  const navigate=useNavigate();
  const [click,setClick]=useState();
  return (
    <>
    
    <div className='container6'>
    <Header/>
     
       <div className='head'>New Booking</div>
        <div className='contents4'>
           <Input label="Guest First Name" type="text"/>
           <Input label="Guest Last Name" type="text"/>
           <Input label="Checked in Date" type="date"/>
           <Input label="Checked Out Date" type="date"/>
           <Input label="Number of Adults" type="number"/>
           <Input label="Number of children" type="number"/>
           <Input label="Rooms"/>



            <div className='btn'>
               <Button type='primary' label='Get Available Room' onClick={()=>setClick(true)}></Button>
               <Button type='secondary' label='Book Room' ></Button> 
                <div onClick={()=>navigate(-1)} className='back'>Back</div>
                </div>

                <div className={click? 'booking':'none'}>
                   <Button type='secondary' label='Check In' ></Button> 
                   <Button type='secondary' label='Check Out' ></Button> 
                   <Button type='secondary' label='Cancel' ></Button> 
                </div>
               
                
                
           
        </div>
    </div>
    </>
  )
}

export default Newbooking