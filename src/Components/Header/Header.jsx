import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/Icons/logo.svg'
import user from '../../Assets/Icons/user.svg'
import logout from '../../Assets/Icons/logout.svg'
import { useState } from 'react'
const Header = () => {
        const navigate=useNavigate();
        const[click,setClick]=useState(false);
  return (
    <div className='container1'>
        <header>
        <div className='links'><img src={logo} alt=''/></div>
        <div className='links'> Bookings</div>
        <div className='links' onClick={()=>navigate('/')}>HomePage</div>
        <div className='links'> <Link to={'/room1'} className='link' >Rooms</Link></div>

        <div className= 'links' onClick={()=>{setClick(!click)}}>
              Booking
            </div>   
            <div className={click? 'list':'none'}>
              <div><Link to={'/newbooking'} className='link'>New Booking</Link> </div>
            <div><Link to={'/bookings'} className='link'>Booking</Link> </div>
            </div>
        <div className='links right' ><img src={user} alt=''/>
            Administrator
        <div className='links right logout'><img src={logout} alt=''/></div>
        </div>
        </header></div>
  )
}

export default Header