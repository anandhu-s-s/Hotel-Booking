import React from 'react'
import './Home.css'

import room from '../../Assets/Images/hotel-room.jpg'
import checkin from '../../Assets/Icons/checkin.svg'
import checkout from '../../Assets/Icons/checkout.svg'
import Header from '../../Components/Header/Header'
import Bookingcard from '../../Components/BookingCard/Bookingcard'
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
                <Bookingcard></Bookingcard>
                <Bookingcard></Bookingcard>

            </div>
            <div className='check'>
                <img src={checkout} alt="" className='icon'/>
                Checking out Today
                <Bookingcard></Bookingcard>
            </div>
        </div>
    </div>
  )
}

export default Home