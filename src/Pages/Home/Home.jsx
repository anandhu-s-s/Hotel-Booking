import React from 'react'
import './Home.css'

import room from '../../Assets/Images/hotel-room.jpg'
import checkin from '../../Assets/Icons/checkin.svg'
import checkout from '../../Assets/Icons/checkout.svg'
import Header from '../../Components/Header/Header'
import BookingcardIN from '../../Components/BookingCard/BookingcardIN'
import BookingcardOut from '../../Components/BookingCard/BookingcardOUT'
const Home = () => {
  return (
    <div className='container'>
<div className="header">
  <Header/>
</div>
        <div className='content'>
           <img src={room} alt="" className='room2'/>
        </div>
        <div className='checking'>
            <div className='check'>
                <img src={checkin} alt="" className='icon'/>
                Checking in Today
               <BookingcardIN></BookingcardIN>
               <BookingcardIN></BookingcardIN>
               <BookingcardIN></BookingcardIN>
              
            </div>
            <div className='check'>
                <img src={checkout} alt="" className='icon'/>
                Checking out Today
                <BookingcardOut></BookingcardOut>
                <BookingcardOut></BookingcardOut>
                
            </div>
        </div>
    </div>
  )
}

export default Home