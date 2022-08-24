import React from 'react'
import './Amenities.css'
const Amenities = ({label,data}) => {
  return (
    <div className='items'>
    <div>{label}</div>
    <div className='delete'>{data}</div>
    </div>
  )
}

export default Amenities