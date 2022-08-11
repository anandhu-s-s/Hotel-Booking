import React from 'react'
import './Room.css'
import Input from '../../Components/Input/Input'
import { Link } from 'react-router-dom'
const Room1 = () => {
  return (
    <div className='container2'>
    <div className='head'>Room 101</div>
     <div className='room1'>
        <Input label="Room Number" type="number"/>
        <Input label="Adults Capacity" type="number"/>
        <Input label="Children Capacity" type="number"/>
        <Input label="Price" type="number"/>
        
         <div className='button'>
             <button className='get' >Submit</button>
             <button className='back'>Back</button>
             
         </div>
     </div>
 </div>
  )
}

export default Room1