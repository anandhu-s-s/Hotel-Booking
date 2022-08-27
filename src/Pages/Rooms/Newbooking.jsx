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
  const [ item,setItem]= useState({FirstName:"",LastName:"",CheckIn:"",CheckOut:"",noOfadults:"",noOfChildren:""})

  async function Signup(e){

   try{
 
 
   e.preventDefault();
  
 
 
   
   let result=await fetch("https://localhost:7149/NewBooking",{
   method:'POST',
   body:JSON.stringify(item),
   headers:{
     "Content-Type":'application/json',
     "Accept":'application/json'
 
   }
 
 })
 result= await result.json();
 console.log(result);
 alert("User Saved")

 setItem({FirstName:"",LastName:"",CheckIn:"",CheckOut:"",noOfadults:"",noOfChildren:""})
 }
 catch
 {
   alert('ERROR');
 }  
 
 }
 
 function onChange(value,key){
   setItem((prev)=>({...prev,[key]:value}))
 }

  return (
    <>
    
    <div className='container6'>
    <Header/>
     
       <div className='head'>New Booking</div>
        <div className='contents4'>
        <form onSubmit={Signup} >
           <Input label="Guest First Name" type="text"  value={item.FirstName} onChange={(e)=>{onChange(e.target.value,'FirstName')}}/>
           <Input label="Guest Last Name" type="text"   value={item.LastName} onChange={(e)=>{onChange(e.target.value,'LastName')}}/>
           <Input label="Checked in Date" type="date"  value={item.CheckIn} onChange={(e)=>{onChange(e.target.value,'CheckIn')}}/>
           <Input label="Checked Out Date" type="date"  value={item.CheckOut} onChange={(e)=>{onChange(e.target.value,'CheckOut')}}/>
           <Input label="Number of Adults" type="number"    value={item.noOfadults} onChange={(e)=>{onChange(e.target.value,'noOfadults')}}/>
           <Input label="Number of children" type="number"  value={item.noOfChildren} onChange={(e)=>{onChange(e.target.value,'noOfChildren')}}/>
           <Input label="Rooms"/>



            <div className='btn'>
               <Button type='primary' label='Get Available Room' onClick={()=>setClick(true)}></Button>
               <Button type='secondary' label='Book Room' ></Button> 
                <div onClick={()=>navigate(-1)} className='back'>Back</div>
                </div>
                </form>
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