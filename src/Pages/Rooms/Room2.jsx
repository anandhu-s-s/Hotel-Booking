import React, { useEffect, useState } from 'react'
import './Room2.css'
import Header from '../../Components/Header/Header'
import Roomdetails from '../../Components/Bookingdetails/Roomdetails';
import Input from '../../Components/Input/Input'
 import Button from '../../Components/Button/Button';
 import { useNavigate } from 'react-router-dom';
import Amenities from '../../Components/Amenities/Amenities';
const Room2 = () => {
    const navigate=useNavigate();
    const [popup,setPopup]=useState(false);
    const [ item,setItem]= useState({roomno:"",adultno:"",childno:"",price:""})
    const [ data,setData]= useState([]);

  
   
// .......Getdata from user.....//
    

 async function Signup(e){

  try{


  e.preventDefault();
  console.log(item,"room")


  
  let result=await fetch("http://localhost:5264/room",{
  method:'POST',
  body:JSON.stringify(item),
  headers:{
    "Content-Type":'application/json',
    "Accept":'application/json'

  }

})
result= await result.json();
alert("User Saved")
setPopup(false)
setItem({roomno:"",adultno:"",childno:"",price:""})
}
catch
{
  alert('ERROR');
}  

}

function onChange(value,key){
  setItem((prev)=>({...prev,[key]:value}))
}
async function getData(){
  const respond=await fetch("http://localhost:5264/room",{
  method:'GET',
  headers:{
    "Content-Type":'application/json',

  }

})
return respond.json();
  

}
useEffect(()=>{
  const userData=async ()=>{
  const respond=await getData();
  setData(respond);
};userData();
},[]);
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
        <div className="bk">Edit</div>


   </div>
   <div>
   {data.map((value,index)=>(
   <Roomdetails a={value.roomno} b={value.adultno} c={value.childno} d={value.price} e='Delete' />
  
   
   ))}
   </div>
   </div>
   </div>

<div className={popup? 'blur':'none'}>
  <div className='container2'>
<div className='head'>Room 101</div>

 <div className='room1'>
  <form onSubmit={Signup} >
    <Input label="Room Number" type="number" value={item.roomno} onChange={(e)=>{onChange(e.target.value,'roomno')}}/>
    <Input label="Adults Capacity" type="number" value={item.adultno} onChange={(e)=>{onChange(e.target.value,'adultno')}}/>
    <Input label="Children Capacity" type="number" value={item.childno}  onChange={(e)=>{onChange(e.target.value,'childno')}}/>
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