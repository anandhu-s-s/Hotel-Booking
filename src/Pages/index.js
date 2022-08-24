import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Bookings from './Bookings/Bookings';
import Home from './Home/Home';
import Newbooking from './Rooms/Newbooking';

import Room2 from './Rooms/Room2';
const index = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
            
                <Route path='/' element={<Home/>}/>
                <Route path='/newbooking' element={<Newbooking/>}/>
               
                <Route path='/room1' element={<Room2/>}/>
               
                <Route path='/bookings' element={<Bookings/>}/>
               




                
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default index