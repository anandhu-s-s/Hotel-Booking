import React from 'react'



const Input = ({label,type,onChange,value}) => {
  return (
    <div> <label>{label}</label><br/>
    <input type={type}  onChange={onChange} value={value} /></div>
  )
}

export default Input