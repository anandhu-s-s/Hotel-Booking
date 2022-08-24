import React, { useState } from 'react'
import './Room2.css'
import Header from '../../Components/Header/Header'
import Details from '../../Components/Bookingdetails/Roomdetails';
import Input from '../../Components/Input/Input'
 import Button from '../../Components/Button/Button';
 import { useNavigate } from 'react-router-dom';
import Amenities from '../../Components/Amenities/Amenities';
const Room2 = () => {
    const navigate=useNavigate();
    const [popup,setPopup]=useState(false);
    const [ item,setItem]= useState({roomno:"",adults:"",children:"",price:""})

    async function Signup(e){
      
      
  try{


  e.preventDefault();
  console.log(item,"room")


  
  let result=await fetch("http://192.168.1.62:3000/profile",{
  method:'POST',
  body:JSON.stringify(item),
  headers:{
    "Content-Type":'application/json',
    "Accept":'application/json'

  }

})
result= await result.json()
}
catch
{
  alert('ERROR_CONNECTION_TIMED_OUT');
}  

}

function onChange(value,key){
  setItem((prev)=>({...prev,[key]:value}))
}
  return (
    <>
    <div className="container3">
    <Header/>
   <div className="contents1">
       <div className="head">Rooms</div>
       <div className='createroom' onClick={()=>setPopup(true)}>Create Rooms</div>
   
   </div>

      <div className="footer">
    <div className="first1">
        
        <div className="bk">Room Number</div>
        <div className="bk">Adults Capacity</div>
        <div className="bk">Children Capacity</div>
        <div className="bk">Price</div>

   </div>
   <Details a='101' b='4' c='2' d='3000' />
   <Details a='102' b='6' c='3' d='5000'  />
   <Details a='103' b='6' c='2' d='4000'  />
   </div>
   </div>

<div className={popup? 'blur':'none'}>
  <div className='container2'>
<div className='head'>Room 101</div>

 <div className='room1'>
  <form onSubmit={Signup} >
    <Input label="Room Number" type="number" value={item.roomno} onChange={(e)=>{onChange(e.target.value,'roomno')}}/>
    <Input label="Adults Capacity" type="number" value={item.adults} onChange={(e)=>{onChange(e.target.value,'adults')}}/>
    <Input label="Children Capacity" type="number" value={item.children}  onChange={(e)=>{onChange(e.target.value,'children')}}/>
    <Input label="Price" type="number" value={item.price}  onChange={(e)=>{onChange(e.target.value,'price')}}/>
    
     <div className='buttn'>
          <Button type='primary' label='Save'></Button> 
          <div className='or'>or</div> 
            <div onClick={()=>navigate(setPopup(false))} className='back'>Cancel</div>

            </div>
            </form>



            <div className="Amenities">
             <div className='head5'>
             <Input label=' Amenities' type='text'/></div>
          
         
            <div className="back">Add new</div>

            <div className="wrapper">
              <div className="amenities2">
                <Amenities label='Internet access' data='delete'/>
                <Amenities label='Television' data='delete'/>
                <Amenities label='Premium Dryer' data='delete'/>
                <Amenities label='Premium Towels' data='delete'/>
                <Amenities label='Cribe' data='delete'/>
                <Amenities label='Safe' data='delete'/>

              </div>
            </div>
             
            

             
             
             
            </div>
     </div>
     </div>
 </div>

</>
  )
}

export default Room2